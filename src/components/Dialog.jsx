import React from "react";
import {
  Dialog as DialogMT,
  DialogHeader,
  DialogBody,
  IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export function Dialog(props) {
  const { open, handleOpen, title, content } = props;
  return (
    <DialogMT open={open} handler={handleOpen} className="gap-3 p-3 relative">
      <DialogHeader className="font-alegreya lg:text-3xl text-secondary font-bold">
        {title}
      </DialogHeader>
      <DialogBody className="font-alegreya lg:text-xl">{content}</DialogBody>
      <IconButton
        onClick={handleOpen}
        className="w-7 h-7 !absolute flex right-0 top-0 m-4"
      >
        <XMarkIcon className="w-5 h-5" />
      </IconButton>
    </DialogMT>
  );
}
