import React from "react";

import { Typography } from "@material-tailwind/react";
import { getProductSpecs } from "@/utils";

const TABLE_ROWS = [
  {
    spec: "Composición",
    value: "95% Poliester 5% Spandex",
  },
  {
    spec: "Usos",
    value: "Ropa deportiva, Ropa casual, Tapicería",
  },
  {
    spec: "Peso gsm",
    value: "180 gsm",
  },
  {
    spec: "Peso gml",
    value: "230 gml",
  },
  {
    spec: "Ancho",
    value: "142 cm",
  },
  {
    spec: "Tipo de tejido",
    value: "Punto",
  },
];

export function ProductSpecs({ product }) {
  return (
    <div>
      <h3 className="font-bold text-lg py-2">Especificaciones</h3>
      <table className="w-full h-full table-auto text-left">
        <tbody>
          {getProductSpecs(product).map(({ id, spec, value }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast
              ? "px-2 py-1"
              : "px-2 py-1 border-b border-blue-gray-50";

            return (
              <tr key={`${id}-${index}`}>
                <td className={`${classes}  bg-blue-gray-50/50 w-[30%]`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal xl:text-base text-sm font-alegreya"
                  >
                    {spec}
                  </Typography>
                </td>
                <td className={`${classes}`}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-alegreya xl:text-base text-sm flex flex-row gap-1 "
                  >
                    {Array.isArray(value)
                      ? value.map((v) => (
                          <Typography
                            color="blue-gray"
                            className={`font-alegreya xl:text-base text-sm capitalize after:content-[","] last:after:content-none `}
                          >
                            {v.name}
                          </Typography>
                        ))
                      : value}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
