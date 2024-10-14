import Link from "next/link";
import React, { useEffect, useState } from "react";

export function Navbar(props) {
  const { openMenu, normal = false, className = "" } = props;

  useEffect(() => {
    const handleStyledNav = () => {
      const carousel = document.querySelector(".cars");
      const menu = document.querySelector(".menu");
      const menuSub = document.querySelector(".menu-sub");
      const nav = document.querySelector(".nav");
      if (carousel && menu) {
        const carouselHeight = carousel.offsetHeight;
        if (window.scrollY + 100 > carouselHeight) {
          menu.classList.add("menu-scroll-active");
          menuSub.classList.add("menu-scroll-active-sub");
          nav.classList.add("nav-less-padding");
        } else {
          menu.classList.remove("menu-scroll-active");
          menuSub.classList.remove("menu-scroll-active-sub");
          nav.classList.remove("nav-less-padding");
        }
      }
    };

    if (!normal) {
      window.addEventListener("scroll", handleStyledNav);

      return () => {
        window.removeEventListener("scroll", handleStyledNav);
      };
    }
  }, []);

  return (
    <div
      className={`${className} menu openMenu ${
        openMenu ? "lg:flex" : "hidden"
      } ${
        normal && "menu-scroll-active"
      } lg:absolute lg:block  left-0 right-0 top-24`}
    >
      <div className="container z-10">
        <div
          className={`menu-sub ${
            normal && "menu-scroll-active-sub"
          } flex lg:w-fit gap-10 mx-auto font-medium py-4 text-secondary lg:text-white flex-col lg:flex-row lg:justify-center lg:align-middle text-center`}
        >
          <Link className="navbar__link relative" href={"/"}>
            HOME
          </Link>
          <Link className="navbar__link relative" href={"/products"}>
            PRODUCTOS
          </Link>
          <Link className="navbar__link relative" href={"/blog"}>
            BLOG
          </Link>
          <Link className="navbar__link relative lg:hidden" href={"/cart"}>
            CARRITO
          </Link>
          <Link className="navbar__link relative lg:hidden" href={"/profile"}>
            USUARIO
          </Link>
        </div>
      </div>
    </div>
  );
}
