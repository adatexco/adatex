import React from "react";
import { Checkbox } from "@material-tailwind/react";
import { getFilters } from "@/utils";

const defaultFilters = {
  categories: ["Tapicería", "Confección", "Cortinería"],
  widths: ["145 cm", "142 cm", "165 cm", "120 cm"],
  gsm: ["450 gsm", "350 gsm", "340 gsm", "155 gsm", "180 gsm"],
  applications: ["Sofas", "Ropa Deportiva", "Pijamas", "Base cama"],
};

export function ProductSidebar({ filters = [], setFilters, products }) {
  const availableFilters = getFilters(products);
  const addFilter = (filter) => {
    if (setFilters && !filters.some((f) => f.id === filter.id)) {
      setFilters([...filters, filter]);
    }
  };

  const removeFilter = (filter) => {
    if (setFilters) {
      setFilters(filters.filter((f) => f.id !== filter.id));
    }
  };

  const addRemoveFilter = (filter) => {
    if (!filters.some((f) => f.id === filter.id)) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }
  };

  const handleFilterWithCheckInput = (event, filter) => {
    if (event.target.checked) {
      addFilter(filter);
    } else {
      removeFilter(filter);
    }
  };

  const checkUncheckInput = (filter) => {
    if (filters.some((f) => f.id === filter.id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-secondary pl-3 pb-5 flex lg:hidden">
        Filtros
      </h2>
      <div className="border-b border-[#dddddd] pb-8 mb-6 pl-3">
        <h2 className="text-xl font-semibold text-secondary">Categorias</h2>
        <div className="flex flex-col items-start pt-5">
          {availableFilters.categories.map((f, index) => (
            <button
              key={`${f.id}-${index}`}
              className="cursor-pointer  hover:text-primary mb-3"
              onClick={() => addFilter(f)}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
      <div className="border-b border-[#dddddd]  pb-8 mb-6">
        <h2 className="text-xl font-semibold text-secondary pl-3">Anchos</h2>
        <ul className="flex flex-col pt-5">
          {availableFilters.widths.map((f, index) => (
            <li key={`${f.id}-${index}`}>
              <Checkbox
                label={f.name}
                ripple={true}
                onChange={(e) => handleFilterWithCheckInput(e, f)}
                checked={checkUncheckInput(f)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="border-b border-[#dddddd]  pb-8 mb-6">
        <h2 className="text-xl font-semibold text-secondary pl-3">Gramajes</h2>
        <ul className="flex flex-col pt-5">
          {availableFilters.gsms.map((f, index) => (
            <li key={`${f.id}-${index}`}>
              <Checkbox
                label={f.name}
                ripple={true}
                onChange={(e) => handleFilterWithCheckInput(e, f)}
                checked={checkUncheckInput(f)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-8 mb-6 pl-3">
        <h2 className="text-xl font-semibold text-secondary">Usos</h2>
        <div className="flex pt-5 flex-wrap">
          {availableFilters.tags.map((f, index) => (
            <button
              key={`${f.id}-${index}`}
              className='cursor-pointer  hover:text-primary transition-all mr-[10px] capitalize after:content-[","] last:after:content-none'
              onClick={() => addRemoveFilter(f)}
            >
              {f.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
