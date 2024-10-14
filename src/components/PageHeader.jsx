import React from "react";
import { Breadcrumbs } from "@/components";

export function PageHeader({
  title,
  query,
  pathname,
  hideBreadcrumbs = false,
  noMargin = false,
  className = null,
}) {
  return (
    <div className="bg-gray-300 ">
      <div
        className={`container flex lg:flex-row flex-col justify-center lg:justify-between align-middle text-center ${
          className ? className : "min-h-60"
        }  lg:mb-0 ${!noMargin && "-mb-7"} w-full`}
      >
        <h1 className="text-5xl lg:text-4xl font-medium self-center">
          {title}
        </h1>
        {!hideBreadcrumbs && (
          <div className="self-center lg:m-0 mt-6">
            <Breadcrumbs title={title} query={query} pathname={pathname} />
          </div>
        )}
      </div>
    </div>
  );
}
