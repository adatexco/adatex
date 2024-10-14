import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { CreditCardIcon } from "@heroicons/react/16/solid";
import { formatCardNumber, formatExpires } from "@/utils";
import { useAuth } from "@/hooks";
import { PaymentDetailSelector } from ".";

export function PaymentDetailsForm(props) {
  const { user } = useAuth();
  const {
    newPaymentDetail,
    setNewPaymentDetail,
    CVC,
    setCVC,
    paymentDetails = [],
    currentPaymentDetail,
    setCurrentPaymentDetail,
    setEditPaymentDetail,
  } = props;

  const [showPaymentDetailForm, setShowPaymentDetailForm] = useState(false);
  const [cardExpires, setCardExpires] = useState("");

  const handleCardExpiresChange = (event) => {
    setCardExpires(formatExpires(event.target.value));
    setNewPaymentDetail({
      ...newPaymentDetail,
      expirationMonth: cardExpires.split("/")[0] ?? "",
    });
    setNewPaymentDetail({
      ...newPaymentDetail,
      expirationYear: cardExpires.split("/")[1] ?? "",
    });
  };

  return (
    <>
      <div className="flex justify-between align-middle w-full gap-5 px-4">
        <h3 className=" text-secondary text-lg font-bold">Método de pago</h3>
        {showPaymentDetailForm && paymentDetails.length > 0 && (
          <Button
            size="sm"
            variant="text"
            className="!font-alegreya !text-primary"
            onClick={() => setShowPaymentDetailForm(false)}
          >
            Tarjetas guardadas
          </Button>
        )}
      </div>
      {user && paymentDetails.length > 0 && !showPaymentDetailForm && (
        <div className="flex flex-col w-full gap-5 p-4">
          <PaymentDetailSelector
            paymentDetails={paymentDetails}
            currentPaymentDetail={currentPaymentDetail}
            setCurrentPaymentDetail={setCurrentPaymentDetail}
            setEditPaymentDetail={setEditPaymentDetail}
            setShowPaymentDetailForm={setShowPaymentDetailForm}
          />
          {/**
             *  <Button
            onClick={() => {
              setShowPaymentDetailForm(true);
              setCurrentPaymentDetail(null);
            }}
          >
            Crear nuevo método de pago
          </Button>
             */}
        </div>
      )}
      {(showPaymentDetailForm || paymentDetails.length === 0) && (
        <div className="flex flex-col gap-5 p-4">
          <h4 className="flex">Información de la tarjeta</h4>
          <Input
            maxLength={19}
            value={formatCardNumber(newPaymentDetail.cardNumber)}
            onChange={(event) =>
              setNewPaymentDetail({
                ...newPaymentDetail,
                cardNumber: Number(event.target.value),
              })
            }
            icon={
              <CreditCardIcon className="absolute left-0 h-4 w-4 text-blue-gray-300" />
            }
            placeholder="0000 0000 0000 0000"
            className=" !font-alegreya"
            label="Número de la tarjeta"
            required
          />
          <div className="flex flex-row gap-5 w-full">
            <Input
              maxLength={5}
              value={cardExpires}
              onChange={(event) => handleCardExpiresChange(event)}
              containerProps={{ className: "min-w-[40%]" }}
              placeholder="00/00"
              className=" !font-alegreya"
              label="Vencimiento"
              required
            />
            <Input
              maxLength={4}
              value={CVC}
              onChange={(event) => setCVC(event.target.value)}
              containerProps={{ className: "min-w-[40%]" }}
              placeholder="000"
              className="!font-alegreya"
              label="CVC"
              required
            />
          </div>
          <Input
            label="Nombre en la tarjeta"
            className="!font-alegreya"
            value={newPaymentDetail.cardName}
            onChange={(event) =>
              setNewPaymentDetail({
                ...newPaymentDetail,
                cardName: event.target.value,
              })
            }
          />
        </div>
      )}
    </>
  );
}
