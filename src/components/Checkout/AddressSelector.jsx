import { Select, Option } from "@material-tailwind/react";
import React from "react";

export function AddressSelector({
  addresses = [],
  currentAddress,
  setCurrentAddress,
  setEditAddress,
  setShowNewAddressForm,
}) {
  const handleSelect = (address) => {
    setCurrentAddress(address);
    setEditAddress(false);
  };

  const handleNewAddress = () => {
    setCurrentAddress(null);
    setEditAddress(true);
    setShowNewAddressForm(true);
  };
  return (
    <>
      <span className="text-xs  md:text-base">
        Selecciona una de tus direcciones
      </span>
      <Select
        className="!font-alegreya !text-xs  !md:text-lg"
        label={
          currentAddress
            ? currentAddress.address
            : "Selecciona una dirección guardada"
        }
      >
        {addresses.map((address) => (
          <Option
            onClick={() => handleSelect(address)}
            key={address.id}
            className="!font-alegreya !text-xs  !md:text-lg"
          >
            {address.address}
          </Option>
        ))}
        <Option
          onClick={handleNewAddress}
          className="!font-alegreya !text-xs  !md:text-lg font-bold"
        >
          Crear nueva dirección
        </Option>
      </Select>
    </>
  );
}
