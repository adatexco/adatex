export function reviewFormatter(rawReview) {
  const { id, attributes } = rawReview;
  const { title, content, author, rating } = attributes;
  return {
    id,
    title,
    content,
    author,
    rating,
  };
}
