import { ENV } from "./constants";
import { getFilters } from "./getFilters";

export function productFormatter(rawProduct) {
  const { id, attributes } = rawProduct;
  const {
    name,
    slug,
    description,
    summary,
    width,
    gsm,
    unit,
    price,
    featured,
    tissue,
    gm,
    composition,
    cares,
  } = attributes;
  const inventory = attributes.inventories.data.map((i) => {
    return {
      id: i.id,
      quantity: i.attributes.quantity,
      isSample: i.attributes.isSample,
      color: {
        id: i.attributes.variant.data.id,
        name: i.attributes.variant.data.attributes.name,
      },
      images:
        i.attributes.images.data?.map((i) => ({
          id: i.id,
          alt: i.attributes.name,
          url: i.attributes.url,
          width: i.attributes.width,
          height: i.attributes.height,
        })) || [],
      productInventoryId: i.attributes.productInventory?.data?.id || null,
    };
  });
  const categories =
    attributes.categories.data.map((c) => ({
      id: c.id,
      name: c.attributes.name,
    })) || [];
  const tags = attributes.tags.data.map((t) => ({
    id: t.id,
    name: t.attributes.name,
  }));
  const cover = {
    id: attributes.cover.data.id,
    alt: attributes.cover.data.attributes.name,
    url: attributes.cover.data.attributes.url,
    width: attributes.cover.data.attributes.width,
    height: attributes.cover.data.attributes.height,
  };
  const images = attributes.images.data.map((i) => {
    return {
      id: i.id,
      alt: i.attributes.name,
      url: i.attributes.url,
      width: i.attributes.width,
      height: i.attributes.height,
    };
  });

  return {
    id,
    name,
    slug,
    description,
    summary,
    width,
    gsm,
    unit,
    price,
    inventory,
    categories,
    tags,
    cover,
    images,
    featured,
    gm,
    tissue,
    composition,
    cares,
  };
}

export function getProductSpecs(product) {
  return [
    { id: 1, spec: "Composición", value: product?.composition },
    { id: 2, spec: "Usos", value: getFilters([product]).tags },
    { id: 3, spec: "Peso g/m²", value: `${product?.gsm} g/m²` },
    { id: 4, spec: "Peso g/m", value: `${product?.gm} g/m` },
    { id: 5, spec: "Ancho cm", value: `${product?.width} cm` },
    { id: 6, spec: "Tipo de tejido", value: product?.tissue },
  ];
}
