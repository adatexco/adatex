export function headerFormatter(rawHeader) {
  const { id, attributes } = rawHeader;
  const { title, content } = attributes;
  return {
    id,
    title,
    content,
  };
}
