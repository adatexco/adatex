import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";

export default function QuantityInput({ quantity, setQuantity }) {
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity - 1 < 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const handleManualQuantity = (event) => {
    const { value } = event.target;
    if (isNaN(value)) {
      setQuantity(0);
    } else {
      setQuantity(Number(value));
    }
  };

  return (
    <div className="flex flex-row  justify-between align-middle border rounded p-1">
      <IconButton variant="text" onClick={decreaseQuantity}>
        <MinusIcon width={16} height={16} />
      </IconButton>
      <input
        value={quantity}
        onChange={handleManualQuantity}
        type="text"
        inputMode="numeric"
        className="outline-none text-center  w-11  h-11 leading-[40px]"
      />
      <IconButton variant="text" onClick={increaseQuantity}>
        <PlusIcon width={16} height={16} />
      </IconButton>
    </div>
  );
}
