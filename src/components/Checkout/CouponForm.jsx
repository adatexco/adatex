import { Coupon } from "@/api";
import { useAuth } from "@/hooks";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export function CouponForm() {
  const { user } = useAuth();
  const [coupons, setCoupons] = useState([]);
  const [addedCoupons, setAddedCoupons] = useState([]);
  const [coupon, setCoupon] = useState(null);
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getUserCoupons = async () => {
    try {
      const response = await Coupon.getUserCoupons();
      setCoupons(response);
    } catch (error) {
      console.error(error);
    }
  };

  const selectUserCoupon = (coupon) => {
    setCoupon(coupon.code);
    setCoupons(coupons.filter((c) => c.id !== coupon.id));
  };

  const onInputChange = (event) => {
    setError(null);
    setCode(event.target.value.toUpperCase());
  };

  const validateCoupon = async () => {
    try {
      setLoading(true);
      const response = await Coupon.getValidByCode(code);
      setCoupon(response);
      setError(null);
      setLoading(false);
      setCode("");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      getUserCoupons();
    }
  }, []);

  return (
    <div className="flex flex-col gap-3 p-3">
      {user && coupons.length > 0 && (
        <>
          <h3 className="font-semibold text-secondary">
            Selecciona uno de tus cupones disponibles
          </h3>
          <Select
            label="Selecciona un cupón disponible"
            value={coupon?.code ?? ""}
            onChange={selectUserCoupon}
            className="font-alegreya"
          >
            {coupons.map((c) => (
              <Option
                className=" font-alegreya"
                key={c.id}
                value={c}
              >{`${c.code} - ${c.description}`}</Option>
            ))}
          </Select>
        </>
      )}
      <h3 className="font-semibold text-secondary">
        Escribe el código de tu cupón
      </h3>
      <Input
        label="Código"
        placeholder="AABVXS"
        className="!font-alegreya !text-secondary"
        value={code}
        onChange={onInputChange}
      />
      <Button
        disabled={code === ""}
        loading={loading}
        onClick={() => validateCoupon()}
        color={error ? "red" : "black"}
      >
        Aplicar
      </Button>
      <p className={`${error ? " text-red-400" : "text-secondary"} text-xs`}>
        {error
          ? error
          : coupon
          ? "Has activado un cupón para esta orden"
          : " Si adquiriste una muestra, en tu correo encontrarás el código para redimir el costo que pagaste por el envío!"}
      </p>
    </div>
  );
}
