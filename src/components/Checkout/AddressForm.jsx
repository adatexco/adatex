import { useAuth } from "@/hooks";
import { Button, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { AddressSelector } from ".";

export function AddressForm(props) {
  const { user } = useAuth();
  const {
    addresses = [],
    newAddress,
    setNewAddress,
    currentAddress,
    setCurrentAddress,
    setEditAddress,
  } = props;

  const [showNewAddressForm, setShowNewAddressForm] = useState(false);

  useEffect(() => {
    setShowNewAddressForm(currentAddress ? false : true);
  }, [currentAddress]);

  return (
    <>
      <div className="flex justify-between align-middle w-full gap-5 px-4">
        <h3 className=" text-secondary text-lg font-bold">Dirección</h3>
        {showNewAddressForm && addresses.length > 0 && (
          <Button
            size="sm"
            variant="text"
            className=" font-alegreya text-primary"
            onClick={() => setShowNewAddressForm(false)}
          >
            Ver direcciones guardadas
          </Button>
        )}
      </div>
      {user && addresses.length > 0 && !showNewAddressForm && (
        <div className="flex flex-col w-full gap-5 p-4">
          <AddressSelector
            addresses={addresses}
            currentAddress={currentAddress}
            setCurrentAddress={setCurrentAddress}
            setEditAddress={setEditAddress}
            setShowNewAddressForm={setShowNewAddressForm}
          />
        </div>
      )}
      {showNewAddressForm && (
        <div className="flex flex-col gap-5 p-4">
          <h4 className="flex">Datos de contacto</h4>
          <div className="flex flex-row gap-5 w-full">
            <Input
              label="Nombre y apellidos"
              value={newAddress.name}
              onChange={(event) =>
                setNewAddress({ ...newAddress, name: event.target.value })
              }
              required
              className="!font-alegreya !text-secondary"
            />
          </div>
          <div className="flex sm:flex-row flex-col gap-5 w-full">
            <Input
              label="Email"
              value={newAddress.email}
              onChange={(event) =>
                setNewAddress({ ...newAddress, email: event.target.value })
              }
              required
              className="!font-alegreya !text-secondary"
              containerProps={{ className: "min-w-[40%]" }}
            />
            <Input
              label="Numero de Teléfono"
              value={newAddress.contactPhone}
              onChange={(event) =>
                setNewAddress({
                  ...newAddress,
                  contactPhone: event.target.value,
                })
              }
              required
              className="!font-alegreya !text-secondary"
              containerProps={{ className: "min-w-[40%]" }}
            />
          </div>

          <h4 className="flex">Datos de envío</h4>
          <Input
            label="Dirección"
            value={newAddress.address}
            onChange={(event) =>
              setNewAddress({ ...newAddress, address: event.target.value })
            }
            required
            className="!font-alegreya !text-secondary"
          />
          <Input
            label="Barrio"
            value={newAddress.neighborhood}
            onChange={(event) =>
              setNewAddress({
                ...newAddress,
                neighborhood: event.target.value,
              })
            }
            className="!font-alegreya !text-secondary"
          />
          <div className="flex flex-row gap-5 w-full">
            <Input
              label="Ciudad"
              value={newAddress.city}
              onChange={(event) =>
                setNewAddress({ ...newAddress, city: event.target.value })
              }
              required
              containerProps={{ className: "min-w-[40%]" }}
              className="!font-alegreya !text-secondary"
            />
            <Input
              label="Departamento"
              value={newAddress.department}
              onChange={(event) =>
                setNewAddress({
                  ...newAddress,
                  department: event.target.value,
                })
              }
              containerProps={{ className: "min-w-[40%]" }}
              className="!font-alegreya !text-secondary"
            />
          </div>
          <Input
            value={newAddress.zipCode}
            onChange={(event) =>
              setNewAddress({ ...newAddress, zipCode: event.target.value })
            }
            containerProps={{ className: "min-w-[50%] max-w-[50%] " }}
            label="Código Postal"
            className="!font-alegreya !text-secondary"
          />
        </div>
      )}
    </>
  );
}
