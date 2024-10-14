import React from "react";
import { Breadcrumbs as MDBreadcumbs } from "@material-tailwind/react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/solid";

export function Breadcrumbs({ pathname, query, title }) {
  return (
    <MDBreadcumbs type="text">
      <Link
        href={"/"}
        className=" hover:text-primary transition-all ease-in-out text-secondary"
      >
        <HomeIcon width={15} />
      </Link>
      <Link
        href={"/products"}
        className=" hover:text-primary transition-all ease-in-out font-bold text-secondary"
      >
        Productos
      </Link>
      <Link
        className=" hover:text-primary transition-all ease-in-out font-bold"
        href={{
          pathname,
          query,
        }}
      >
        {title}
      </Link>
    </MDBreadcumbs>
  );
}
