import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function SearchBar({
  search = "",
  setSearch = null,
  searchFocus = false,
}) {
  const handleSearch = ({ target: { value } }) => {
    if (setSearch) {
      setSearch(value);
    }
  };
  return (
    <div className="w-full lg:h-auto h-[48px] lg:px-10 px-5 lg:py-0 py-1 relative flex justify-center align-middle">
      <div className="absolute right-0 top-0 bottom-0 w-8 mr-5 md:mr-10">
        <div className="flex w-full h-full align-middle justify-center">
          <MagnifyingGlassIcon className="w-5  text-gray-400" />
        </div>
      </div>
      <input
        autoFocus={searchFocus}
        onChange={handleSearch}
        value={search}
        placeholder="Buscar prouctos"
        className="border rounded w-full h-full px-3 !outline-none py-2  text-gray-800"
      />
    </div>
  );
}
