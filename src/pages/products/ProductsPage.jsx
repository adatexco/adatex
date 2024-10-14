import { Product } from "@/api";
import { Category } from "@/api/category";
import { MainLayout, ProductCard, ProductSidebar } from "@/components";
import Filterbar from "@/components/Products/Filterbar";
import { useAuth, useLoading } from "@/hooks";
import { filterProductByAttributes } from "@/utils";
import { Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

export default function ProductsPage(props) {
  const [filters, setFilters] = useState([]);
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { category, searchFocus = false } = props;
  const [_, setCategories] = useState([]);
  const [loading, setLoading] = useLoading();

  const getProducts = async () => {
    try {
      const response = await Product.getAll();
      setProducts(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await Category.getAll();
      setCategories(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getProductsAndCategories = async () => {
    try {
      setLoading(true);
      await getProducts();
      await getCategories();
      if (category) {
        setFilters([...filters, category]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsAndCategories();
  }, []);

  useEffect(() => {
    if (search !== "") {
      setIsSearching(true);
      setFilters([]);
    } else {
      setIsSearching(false);
    }
  }, [search]);

  const filterBySearch = (products) => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleFilter = (products, filters) => {
    if (isSearching) {
      return filterBySearch(products);
    } else {
      return filterProductByAttributes(products, filters);
    }
  };

  return (
    <MainLayout
      user={user}
      search={search}
      setSearch={setSearch}
      searchFocus={searchFocus}
      showSearchBar={true}
    >
      <div className="container">
        {loading ? (
          <div className="flex p-10 md:p-32  h-48 md:h-[100%] align-middle justify-center animate-pulse">
            <h3 className="!font-alegreya text-secondary !text-center !self-center  !text-lg !md:text-3xl font-bold">
              Cargando productos...
            </h3>
          </div>
        ) : (
          <div className="grid grid-cols-12 lg:gap-x-[25px]  max-md:gap-y-[45px] my-6 h-auto">
            <div className="lg:col-span-3 col-span-12 max-md:order-2 lg:order-1 order-3 p-8 lg:p-0">
              <ProductSidebar
                filters={filters}
                setFilters={setFilters}
                products={products}
              />
            </div>
            <div className="container lg:col-span-9 col-span-12 order-2 lg:order-2">
              <Filterbar filters={filters} setFilters={setFilters} />
              <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-x-[25px] gap-y-[40px] mt-2">
                {handleFilter(products, filters).map((product, index) => (
                  <ProductCard
                    product={product}
                    key={`${product.id}-${index}`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
}
