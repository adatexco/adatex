import { MainLayout } from "@/components";
import { CheckIcon, ListBulletIcon } from "@heroicons/react/20/solid";
import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import React from "react";

export default function AboutUsPage() {
  return (
    <MainLayout>
      <div className="container py-3 lg:p-11 text-secondary">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl text-center lg:text-left lg:text-5xl">
            ¡Bienvenido a Adatex!
          </h1>
          <p className="text-center lg:text-left text-sm lg:text-xl">
            Somos una comercializadora de textiles 100% online, donde
            encontrarás todo lo que necesitas para hacer de tus ideas y negocios
            en el mundo de la tapicería, decoración y confección una realidad.
          </p>
          <List className="font-alegreya text-center text-secondary lg:pb-10">
            <h3 className="font-bold text-xl lg:text-3xl text-center lg:text-left">
              Nuestra propuesta de valor
            </h3>
            <ListItem className="text-justify text-sm lg:text-lg">
              <ListItemPrefix className="hidden lg:flex">
                <CheckIcon className="w-5" />
              </ListItemPrefix>
              Ofrecemos textiles vanguardistas, con alta calidad y diseño,
              facilidad de elección en cuanto a cantidades y una forma de
              comprar online, sencilla y rápida.
            </ListItem>
            <ListItem className="text-justify text-sm lg:text-lg">
              <ListItemPrefix className="hidden lg:flex">
                <CheckIcon className="w-5" />
              </ListItemPrefix>
              Estamos comprometidos con lograr entregar el mayor valor al menor
              precio de forma innovadora y automática
            </ListItem>
            <ListItem className="text-justify text-sm lg:text-lg">
              <ListItemPrefix className="hidden lg:flex">
                <CheckIcon className="w-5" />
              </ListItemPrefix>
              ¿Deseas ver y tocar la tela antes de comprar? No te preocupes,
              puedes solicitar las muestras que necesites y pagar sólo el envío.
              cuando realices tu compra, el valor del envío será descontado 100%
              de tu factura! ¡Entregamos las muestras que necesites en tiempo
              récord! ¡Elije lo que buscas y compra con total confianza!
            </ListItem>
          </List>
        </div>
      </div>
    </MainLayout>
  );
}
