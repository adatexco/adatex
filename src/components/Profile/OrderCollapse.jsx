import React, { useState } from "react";
import { Button, Collapse } from "@material-tailwind/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { OrdersList } from ".";
import moment from "moment";

export function OrderCollapse({ order }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button
        fullWidth
        variant="text"
        className="mb-4 shadow-md"
        onClick={toggleOpen}
      >
        <div className="flex flex-row justify-between text-secondary !font-alegreya normal-case font-normal">
          <div
            className={`flex ${
              open ? "flex-row gap-3" : "flex-col"
            } text-xs sm:text-base md:text-lg  justify-start`}
          >
            <span className="text-center font-bold">Orden</span>
            <span className="text-center">12340404</span>
          </div>

          {!open && (
            <>
              <div className="flex flex-col text-xs sm:text-base md:text-lg  justify-start">
                <span className="text-center font-bold">Creado</span>
                <span className="text-center">
                  {moment(order.dateCreated).format("MMM DD YYYY")}
                </span>
              </div>
              <div className="flex flex-col text-xs sm:text-base md:text-lg  justify-start">
                <span className="text-center font-bold">Estado</span>
                <span className="text-center">{order.state}</span>
              </div>
            </>
          )}

          <ChevronUpDownIcon className="w-5 text-secondary" />
        </div>
      </Button>
      <Collapse
        open={open}
        className="rounded-md shadow-md !overflow-auto mb-5"
      >
        <OrdersList order={order} />
      </Collapse>
    </>
  );
}
