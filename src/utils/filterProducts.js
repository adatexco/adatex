export const filterProductByAttributes = (products = [], filters = []) => {
  return products.filter((product) =>
    filters.every((filter) =>
      Object.values(filter).some((value) =>
        Object.values(product).some((productValue) =>
          Array.isArray(productValue)
            ? productValue.some((item) => item.name === value)
            : productValue === value
        )
      )
    )
  );
};
