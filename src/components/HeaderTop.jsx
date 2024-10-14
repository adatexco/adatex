import { useHeader } from "@/hooks";
import React, { useEffect } from "react";

export function HeaderTop() {
  const { header } = useHeader();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const navbar = document.querySelector(".nav");
      const childrenContainer = document.querySelector(".children-container");
      if (header && navbar) {
        const headerHeight = header.offsetHeight;
        if (window.scrollY > headerHeight) {
          navbar.classList.add("navbar-fixed");
          childrenContainer.classList.add("children-container-margin");
        } else {
          navbar.classList.remove("navbar-fixed");
          childrenContainer.classList.remove("children-container-margin");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="header"
      className="header border-b border-gray-200 bg-white hidden sm:flex sm:align-middle sm:justify-center "
    >
      <div className="container py-4 mx-[26px]">
        <div className="flex justify-center items-center">
          <div className=" text-gray-500 text-[12px]">
            <b>{header.title}</b> {header.content}
          </div>
        </div>
      </div>
    </div>
  );
}
