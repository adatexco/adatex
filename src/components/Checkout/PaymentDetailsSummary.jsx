import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@material-tailwind/react";

export function PaymentDetailsSummary(props) {
  const { currentPaymentDetail, setEditPaymentDetails, CVC, setCVC } = props;

  const handleClick = () => {
    if (setEditPaymentDetails) {
      setEditPaymentDetails(true);
    }
  };

  if (!currentPaymentDetail) {
    return null;
  }

  return (
    <div className="container">
      <div className="flex justify-between align-middle border-b">
        <h3 className="text-secondary font-semibold">Detalles del pago</h3>
        <Button
          size="sm"
          variant="text"
          onClick={handleClick}
          className="!text-primary !font-alegreya"
        >
          Cambiar tarjeta
        </Button>
      </div>
      <div className="flex flex-row gap-3 p-3 align-middle text-sm md:text-base  bg-gray-100 rounded my-2 text-secondary">
        <div className=" bg-gray-400 rounded-full p-2">
          <CreditCardIcon className="w-4 h-4" />
        </div>
        <p className="text-center self-center">
          {currentPaymentDetail.cardFranchise}
        </p>
        <p className="text-center self-center">
          {String(currentPaymentDetail.cardNumber).replace(/.(?=.{4})/g, "x")}
        </p>
        <Input
          maxLength={4}
          containerProps={{ className: "min-w-16 max-w-16" }}
          placeholder="0000"
          label="CVC"
          value={CVC}
          onChange={(event) => setCVC(event.target.value)}
        />
      </div>
    </div>
  );
}
