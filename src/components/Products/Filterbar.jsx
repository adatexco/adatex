import React from "react";
import { Button } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Filterbar({ filters = [], setFilters }) {
  const removeFilter = (filter) => {
    if (setFilters) {
      setFilters(filters.filter((f) => f.id !== filter.id));
    }
  };

  const removeAllFilters = () => {
    if (setFilters) {
      setFilters([]);
    }
  };

  return (
    <ul className="flex flex-wrap items-center pb-5 -mb-3 gap-3">
      {filters.map((filter, index) => (
        <li key={`${filter.id}-${index}`}>
          <Button
            size="sm"
            variant="outlined"
            className="flex flex-row items-center align-middle mx-2 p-[5px] text-xs"
            onClick={() => removeFilter(filter)}
          >
            {filter.name}
            <XMarkIcon width={15} height={15} className="ml-3" />
          </Button>
        </li>
      ))}
      {filters.length > 0 && (
        <li>
          <Button
            size="sm"
            variant="text"
            className="flex flex-row items-center align-middle mx-2 "
            onClick={removeAllFilters}
          >
            Borrar todos
            <XMarkIcon width={15} height={15} className="ml-3" />
          </Button>
        </li>
      )}
    </ul>
  );
}
