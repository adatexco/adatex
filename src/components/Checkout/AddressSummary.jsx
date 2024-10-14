import { useAuth } from "@/hooks";
import { Button } from "@material-tailwind/react";
import React from "react";

export function AddressSummary({ currentAddress, setEditAddress }) {
  const { user } = useAuth();
  if (!currentAddress) {
    return null;
  }

  const handleClick = () => {
    if (setEditAddress) {
      setEditAddress(true);
    }
  };

  return (
    <div className="container">
      <div className="flex justify-between border-b">
        <h3 className="text-secondary font-semibold lg:text-xl ">
          Detalles de envío
        </h3>
        <Button
          size="sm"
          variant="text"
          onClick={handleClick}
          className="!text-primary !font-alegreya"
        >
          Cambiar dirección
        </Button>
      </div>
      <div className="flex justify-between text-secondary text-xs  md:text-base py-2">
        <div className="flex flex-col text-start">
          <p>{currentAddress.name}</p>
          <p>{currentAddress.address}</p>
          <p>{currentAddress.neighborhood}</p>
          <p>{currentAddress.city}</p>
          <p>Codigo Postal: {currentAddress.zipCode}</p>
        </div>
        <div className="flex flex-col text-xs md:text-base text-end text-nowrap">
          <p>{user.email}</p>
          <p>{currentAddress.contactNumber}</p>
        </div>
      </div>
    </div>
  );
}
