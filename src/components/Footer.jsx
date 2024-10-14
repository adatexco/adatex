import React from "react";
import Link from "next/link";

const LINKS = [
  {
    title: "Productos",
    items: ["Confeccion", "Tapicería"],
  },
  {
    title: "Compañía",
    items: ["Sobre nosotros", "Nuestros precios", "Solicitud de muestras"],
  },
  {
    title: "Recursos",
    items: ["Blog", "Noticias", "Eventos", "Centro de ayuda"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src="/icon.png" alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Link
              href="/about-us"
              color="blue-gray"
              className="font-normal transition-colors hover:text-primary focus:text-primary"
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link
              href="/shipping-and-returns"
              color="blue-gray"
              className="font-normal transition-colors  hover:text-primary focus:text-primary"
            >
              Envíos y devoluciones
            </Link>
          </li>
          <li>
            <Link
              href="/samples"
              color="blue-gray"
              className="font-normal transition-colors  hover:text-primary focus:text-primary"
            >
              Muestras
            </Link>
          </li>
          <li>
            <Link
              href="/privacy"
              color="blue-gray"
              className="font-normal transition-colors  hover:text-primary focus:text-primary"
            >
              Politica privacidad
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              color="blue-gray"
              className="font-normal transition-colors  hover:text-primary focus:text-primary"
            >
              Contáctanos
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <h2 color="blue-gray" className="text-center font-normal">
        &copy; 2024 Adatex.co
      </h2>
    </footer>
  );
}
