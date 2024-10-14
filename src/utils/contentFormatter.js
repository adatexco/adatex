export function contentFormatter(rawContent) {
  const { id, attributes } = rawContent;
  const {
    sampleImage: { data },
    contentMedia,
  } = attributes;

  return {
    id,
    sampleImage: {
      alt: data.attributes.name.split(".")[0],
      url: data.attributes.url,
      width: data.attributes.width,
      height: data.attributes.height,
    },
    contentMedia: contentMedia.data.map((d) => ({
      id: d.id,
      alt: d.attributes.name.split(".")[0],
      url: d.attributes.url,
      width: d.attributes.width,
      height: d.attributes.height,
    })),
  };
}
