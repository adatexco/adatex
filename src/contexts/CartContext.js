import { Cart, Shipping } from "@/api";
import { ENV } from "@/utils";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export function CartProvider(props) {
  const { children } = props;
  const [cart, setCart] = useState({
    coupons: [],
    products: [],
  });
  const [total, setTotal] = useState(Cart.count());
  const [totalAmount, setTotalAmount] = useState();
  const [checkoutValues, setCheckoutValues] = useState({
    deliveryCost: 0,
    totalProducts: 0,
    totalDiscounts: 0,
  });
  const [shipping, setShipping] = useState(null);

  const addCart = (productId, inventoryId, quantity, isSample = false) => {
    Cart.addProduct(productId, inventoryId, quantity, isSample);
    refreshTotalCart();
  };

  const addCoupon = (coupon) => {
    Cart.addCoupon(coupon);
    refreshTotalCart();
  };

  const refreshTotalCart = () => {
    setTotal(Cart.count());
    setCart(Cart.get());
  };

  const changeQuantityItem = (productId, quantity, isSample) => {
    Cart.changeQuantity(productId, quantity, isSample);
    refreshTotalCart();
  };

  const deleteItem = (productId, isSample) => {
    Cart.deleteProduct(productId, isSample);
    refreshTotalCart();
  };

  const deleteAll = () => {
    Cart.deleteAll();
    refreshTotalCart();
  };

  const setTotalAmountWithDelivery = (products = [], deliveryCost) => {
    setTotalAmount(
      products.reduce((acc, cur) => acc + cur.total, 0) + deliveryCost
    );
  };

  const calculateCheckoutValues = (products = []) => {
    let totalProducts = 0;
    let deliveryCost = 0;
    products.forEach((product) => {
      totalProducts += product.price * product.quantity;
      if (product.isSample) {
        deliveryCost += shipping.priceBySample
      } else {
        switch (product.unit) {
          case 'kg':
            break;
          case 'm':
            break
          default:
            break;
        }
      }
    });
    
  };

  const getCartAndShipping = async () => {
    try {
      const response = Cart.get();
      setCart(response);
      const shippingResponse = await Shipping.get();
      setShipping(shippingResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCartAndShipping();
  }, []);

  const data = {
    cart,
    checkoutValues,
    addCart,
    addCoupon,
    total,
    deleteItem,
    deleteAllItems: () => {},
    changeQuantityItem,
    totalAmount,
    setTotalAmountWithDelivery,
    deleteAll,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
}
