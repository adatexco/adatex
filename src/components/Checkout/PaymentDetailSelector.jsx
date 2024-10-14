import { Select, Option } from "@material-tailwind/react";
import React from "react";

export function PaymentDetailSelector(props) {
  const {
    paymentDetails = [],
    currentPaymentDetail,
    setCurrentPaymentDetail,
    setEditPaymentDetail,
    setShowPaymentDetailForm,
  } = props;
  const handleSelect = (paymentDetail) => {
    setCurrentPaymentDetail(paymentDetail);
    setEditPaymentDetail(false);
  };

  const handleNewPaymentDetail = () => {
    setCurrentPaymentDetail(null);
    setShowPaymentDetailForm(true);
    setEditPaymentDetail(true);
  };

  return (
    <>
      <span className="text-xs  md:text-base">
        Selecciona uno de tus métodos de pago
      </span>
      <Select
        className="!font-alegreya !text-xs  !md:text-base"
        label={
          currentPaymentDetail
            ? `${currentPaymentDetail.cardFranchise} - ${String(
                currentPaymentDetail.cardNumber
              ).replace(/.(?=.{4})/g, "x")}`
            : "Selecciona una dirección guardada"
        }
      >
        {paymentDetails.map((paymentDetail) => (
          <Option
            onClick={() => handleSelect(paymentDetail)}
            key={paymentDetail.id}
            className="!font-alegreya !text-xs  !md:text-base"
          >
            {`${paymentDetail.cardFranchise} - ${String(
              paymentDetail.cardNumber
            ).replace(/.(?=.{4})/g, "x")}`}
          </Option>
        ))}
        <Option
          onClick={handleNewPaymentDetail}
          className="!font-alegreya !text-xs  !md:text-base font-bold"
        >
          Crear nuevo método de pago
        </Option>
      </Select>
    </>
  );
}
