export const getFilters = (products) => {
  const categories = [];
  const tags = [];
  const widths = [];
  const gsms = [];

  products.forEach((product, index) => {
    product.categories.forEach((category) => {
      if (categories.some((c) => c.id == category.id)) {
        return;
      }
      categories.push({ ...category, type: "category" });
    });
    product.tags.forEach((tag) => {
      if (tags.some((t) => t.id === tag.id)) {
        return;
      }
      tags.push(tag);
    });
    if (!widths.some((w) => w.name === product.width)) {
      widths.push({ id: `width-${product.id}-${index}`, name: product.width });
    }
    if (!gsms.some((g) => g.id === product.gsm)) {
      gsms.push({ id: `gsm-${product.id}-${index}`, name: product.gsm });
    }
  });

  const availableFilters = {
    categories,
    tags,
    widths: widths
      .sort((a, b) => a.name - b.name)
      .map((w) => ({ id: w.id, name: `${w.name} cm`, value: w.name })),
    gsms: gsms
      .sort((a, b) => a.name - b.name)
      .map((g) => ({ id: g.id, name: `${g.name} g/m²`, value: g.name })),
  };

  return availableFilters;
};

export const getProductFilterAttributes = (product) => {
  let productFilterAttributes = [];
  product.categories.forEach((category) =>
    productFilterAttributes.push(category)
  );
  product.tags.forEach((tag) => productFilterAttributes.push(tag));
  productFilterAttributes.push({
    id: `${product.slug}-${product.width}`,
    name: `${product.width} cm`,
    value: product.width,
  });
  productFilterAttributes.push({
    id: `${product.slug}-${product.gsm}`,
    name: `${product.gsm} gsm`,
    value: product.gsm,
  });
  return productFilterAttributes;
};
