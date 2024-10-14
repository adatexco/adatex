import { MainLayout } from "@/components";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

export default function ShippingAndReturnsPage() {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  useEffect(() => {
    handleOpen(1);
  }, []);

  return (
    <MainLayout>
      <div className="container text-secondary lg:p-4">
        <div className="flex flex-col gap-3 p-3">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">Envíos</h1>
            <span className="text-sm lg:text-lg text-gray-600">
              Actualizado el 2024-03-02
            </span>
          </div>
          <p className="text-justify text-secondary lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo
            reprehenderit autem, non sed velit, assumenda id quam ratione
            voluptate fugiat at quaerat alias excepturi facilis repellendus
            voluptatibus? Voluptatibus, ut.
          </p>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <div>
            <h1 className="font-bold text-2xl lg:text-3xl">
              Politica de devoluciones
            </h1>
            <span className="text-sm lg:text-lg text-gray-600">
              Actualizado el 2024-03-02
            </span>
          </div>
          <p className="text-justify text-secondary lg:text-xl">
            Las siguientes políticas se aplican a las devoluciones de productos
            comprados en nuestra pagina web www.cately.co:
          </p>
          <Accordion className="font-alegreya text-secondary" open={open === 1}>
            <AccordionHeader
              className="font-alegreya text-secondary lg:text-2xl"
              onClick={() => handleOpen(1)}
            >
              Devoluciones por garantía o insatisfacción con el producto
            </AccordionHeader>
            <AccordionBody className="font-alegreya text-secondary text-justify lg:text-xl">
              Dispones de un plazo de 90 días después de la compra para cambiar
              o devolver un artículo, a menos que se indique lo contrario en
              nuestras excepciones. Para realizar la devolución envíe un correo
              electronico a la dirección info@cately.co solicitando la
              devolución de su articulo. El correo será contestado con las
              instrucciones para realizar la devolución del producto y del monto
              pagado a el método de pago original de la transacción.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </MainLayout>
  );
}
