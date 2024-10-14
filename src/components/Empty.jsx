import React from "react";

export function Empty(props) {
  const { title, content } = props;
  return (
    <div className="gap-5 p-4 lg:p-0 w-full h-full font-alegreya text-secondary text-center lg:text-justify">
      <h3 className="text-xl font-bold p-2 lg:p-0">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
