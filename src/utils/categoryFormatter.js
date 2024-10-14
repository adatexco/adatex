import { ENV } from "./constants";

export function categoryFormatter(rawCategory) {
  const { id, attributes } = rawCategory;
  const { name, description, slug, colSpan, order } = attributes;
  const cover = {
    id: attributes.cover.data.id,
    alt: attributes.cover.data.attributes.name,
    url: attributes.cover.data.attributes.url,
    width: attributes.cover.data.attributes.width,
    height: attributes.cover.data.attributes.height,
  };

  return {
    id,
    name,
    description,
    cover,
    slug,
    colSpan,
    order,
  };
}
