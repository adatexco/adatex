import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Collapse,
  List,
  ListItem,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { OrderItem } from ".";
import moment from "moment";
import { numberFormatter, stateFormatter } from "@/utils";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export function OrdersList({ order }) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <div className="flex-row gap-1 text-xs sm:text-base md:text-lg  justify-start flex lg:hidden p-2">
        <span className="text-start font-bold">Orden</span>
        <span className="text-start">{order.id}</span>
      </div>
      <Card className="w-full mb-3">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0  rounded-none rounded-t-md border-b border-white/10 bg-gray-100  text-center p-3"
          onClick={toggleOpen}
        >
          <div className="flex flex-row justify-between">
            <div className="flex-col text-xs sm:text-base md:text-lg  justify-start hidden lg:flex">
              <span className="text-start font-bold">Orden</span>
              <span className="text-start">{order.id}</span>
            </div>
            <div className="flex flex-col text-xs sm:text-base md:text-lg  justify-start">
              <span className="text-start font-bold">Creado</span>
              <span className="text-start">
                {moment(order.dateCreated).format("MMM DD YYYY")}
              </span>
            </div>
            <div className="flex flex-col text-xs sm:text-base md:text-lg  justify-end">
              <span className="text-star font-bold">Estado</span>
              <span className="text-start">{stateFormatter(order.state)}</span>
            </div>
            <ChevronDownIcon
              className={`w-4 lg:w-6 h-4 lg:h-6 lg:m-4 self-center ease-out animate-pulse duration-300 ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </CardHeader>
        <CardBody className="p-0">
          <Collapse open={open}>
            <List>
              {order.products.map((product) => (
                <OrderItem product={product} key={product.id} />
              ))}
            </List>
          </Collapse>
        </CardBody>

        <CardFooter
          className={`p-3 m-0 rounded-b-md ease-in-out duration-200 ${
            open ? "bg-gray-100" : " bg-white"
          }`}
          onClick={toggleOpen}
        >
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-wrap text-xs sm:text-base md:text-lg justify-start gap-1">
              <span className="text-start font-bold">Dirección:</span>
              <span className="text-start">
                {order.addressShipping.address}
              </span>
            </div>
            <div className="flex flex-wrap text-xs sm:text-base md:text-lg gap-1">
              <span className="text-start font-bold">{"Total:"} </span>
              <span className="text-start">
                {numberFormatter(order.total ?? 0, "$")}
              </span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
