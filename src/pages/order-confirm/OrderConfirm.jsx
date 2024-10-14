import { Order } from "@/api";
import { MainLayout } from "@/components";
import { useAuth, useCart, useLoading } from "@/hooks";
import { ENV } from "@/utils";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function OrderConfirmPage(props) {
  const { user } = useAuth();
  const { deleteAll } = useCart();
  const router = useRouter();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useLoading();
  const { referencePayment } = props;

  const getOrder = async () => {
    try {
      setLoading(true);
      const order = await Order.getByReferencePayment(referencePayment);
      setOrder(order);
      if (order.paymentStatus === "APPROVED") {
        deleteAll();
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const setContent = (paymentStatus) => {
    switch (paymentStatus) {
      case ENV.PAYMENT_STATUS.APPROVED:
        return "Hemos empezado a preparar tu orden ahora mismo. Recibirás la confirmación de la orden en tu email.";
      case ENV.PAYMENT_STATUS.DECLINED:
        return "Comunicate con tu banco para saber por qué la transacción fue declinada";
      case ENV.PAYMENT_STATUS.ERROR:
        return "ERROR";
      default:
        return "ERROR";
    }
  };

  const setTitle = (paymentStatus) => {
    switch (paymentStatus) {
      case ENV.PAYMENT_STATUS.APPROVED:
        return "¡GRACIAS POR TU COMPRA!";
      case ENV.PAYMENT_STATUS.DECLINED:
        return "NO PUDIMOS PROCESAR TU PAGO";
      case ENV.PAYMENT_STATUS.ERROR:
        return "ERROR";
      default:
        return "ERROR";
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  if (!order && !loading) {
    return (
      <MainLayout user={user}>
        <div className="container flex flex-col align-middle justify-center w-full gap-5 lg:gap-10 p-10">
          <h1 className="text-center text-2xl font-bold">
            LA TRANSACCIÓN QUE BUSCAS NO EXISTE
          </h1>
          <p className="text-center text-sm lg:text-lg">
            Lamentamos informarte que esta transacción no ha sido creada o que
            hay un error en nuestros servidores, puedes comunicarte con nosotros
            para aclarar cualquier duda
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout user={user}>
      <div className="container flex flex-col align-middle justify-center w-full gap-5 lg:gap-10 p-10 lg:min-h-[500px]">
        {loading ? (
          <div>Cargando</div>
        ) : (
          <>
            <h1 className="text-center text-2xl font-bold">
              {setTitle(order.paymentStatus)}
            </h1>
            <p className="text-center text-sm lg:text-lg">
              {setContent(order.paymentStatus)}
            </p>
            {order.paymentStatus === ENV.PAYMENT_STATUS.APPROVED && user && (
              <Button onClick={() => router.push("/profile")} fullWidth={false}>
                Ver orden
              </Button>
            )}
          </>
        )}
      </div>
    </MainLayout>
  );
}
