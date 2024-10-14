import {
  AddressForm,
  AddressSummary,
  CheckoutCartSummary,
  MainLayout,
  PaymentDetailsForm,
  PaymentDetailsSummary,
  PageHeader,
  CouponForm,
} from "@/components";
import { Address, PaymentDetail, Product, Order } from "@/api";
import { useAuth, useCart, useLoading } from "@/hooks";
import React, { useState, useEffect } from "react";
import { ENV, encryptTransactionInfo, getCardType } from "@/utils";
import { useRouter } from "next/router";

export default function CheckOutPage() {
  const { cart, totalAmount, setTotalAmountWithDelivery } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useLoading();
  const [products, setProducts] = useState([]);
  const router = useRouter();
  const [editAddress, setEditAddress] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    name: "",
    email: "",
    contactNumber: "",
    address: "",
    city: "",
    neighborhood: "",
    zipCode: "",
    directions: "no-directions",
    department: "",
    lastUsed: true,
    user: null,
  });

  const getWompiCheckout = async () => {
    try {
      setTotalAmountWithDelivery(products, 0);
      const { credential, reference, amountInCents } =
        await encryptTransactionInfo(totalAmount);
      const checkoutData = {
        currency: "COP",
        amountInCents: amountInCents,
        reference,
        publicKey: ENV.WOMPI_PUBLIC_KEY,
        signature: { integrity: credential },
        redirectUrl: `${ENV.CLIENTHOST}/order-confirm?reference=${reference}`,
      };

      if (user) {
        checkoutData["customer-data"] = {
          email: user.email,
          "full-name": user.firstname,
        };
      }

      const checkout = await new WidgetCheckout(checkoutData);

      if (!currentAddress && user) {
        setNewAddress({ ...newAddress, user: user.id });
        const address = await Address.addAddress({
          data: { ...newAddress, user: user.id },
        });
        setCurrentAddress(address);
      }

      let orderData = {
        name: user ? `${user.firstname} ${user.lastname}` : currentAddress,
        addressShipping: currentAddress,
        products,
        state: "pending",
        dateCreated: new Date(),
        paymentStatus: "PENDING",
        reference,
        total: totalAmount,
      };

      if (user) {
        orderData["user"] = user.id;
      }

      const newOrder = await Order.createOrder({ data: orderData });

      checkout.open(async (result) => {
        var transaction = result.transaction;
        if (transaction.status === "APPROVED") {
          await Order.updateOrder(newOrder.id, {
            data: { paymentStatus: "APPROVED" },
          });
          router.push({
            pathname: "/order-confirm",
            query: { reference, status: transaction.status },
          });
        } else {
          await Order.updateOrder(newOrder.id, {
            data: { paymentStatus: "DECLINED" },
          });
          router.push({
            pathname: "/order-confirm",
            query: { reference, status: transaction.status },
          });
          throw new Error(transaction);
        }
      });
    } catch (error) {
      console.error(error);
      router.push({ pathname: "/order-confirm", query: { reference } });
    }
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = [];
        for (const item of cart.products) {
          const response = await Product.getById(item.id, item.inventoryId);
          data.push({
            ...response,
            quantity: item.quantity,
            variant: response.inventory.find((i) => i.id === item.inventoryId),
            isSample: item.isSample,
            price: item.isSample ? 0 : response.price,
            total: (item.isSample ? 0 : response.price) * item.quantity,
          });
        }
        setProducts(data);
        setTotalAmountWithDelivery(data, 0);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    })();
  }, [cart]);

  useEffect(() => {
    if (!user) {
      setEditAddress(true);
    } else {
      (async () => {
        try {
          const userAddresses = await Address.getUserAddresses(user.id);
          setAddresses(userAddresses);
          setCurrentAddress(userAddresses.find((a) => a.lastUsed));
          setEditAddress(userAddresses.length == 0);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, []);

  return (
    <MainLayout user={user}>
      <PageHeader
        hideBreadcrumbs
        noMargin
        title={
          <div className="flex flex-row  justify-center align-middle gap-4">
            <div>Checkout</div>
          </div>
        }
        className="lg:h-48 h-32"
      />
      <div className="grid grid-cols-12 w-full gap-4 py-4 md:px-4">
        <div className="col-span-12 md:col-span-6">
          {editAddress ? (
            <AddressForm
              newAddress={newAddress}
              setNewAddress={setNewAddress}
              addresses={addresses}
              currentAddress={currentAddress}
              setCurrentAddress={setCurrentAddress}
              setEditAddress={setEditAddress}
            />
          ) : (
            <AddressSummary
              currentAddress={currentAddress}
              setEditAddress={setEditAddress}
            />
          )}
          {/* Posteriormente se implementará el sistema de cupones */}
          {/**
             * <div>
            <CouponForm />
          </div>
             */}
        </div>

        <div className="col-span-12 md:col-span-6 h-full w-full">
          <CheckoutCartSummary
            products={products}
            currentAddress={currentAddress}
            blackText
            getWompiCheckout={getWompiCheckout}
          />
        </div>
      </div>
    </MainLayout>
  );
}
