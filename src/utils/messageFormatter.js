export function messageFormatter(rawMessage) {
  const { id, attributes } = rawMessage;
  const { name, email, subject, content } = attributes;
  return {
    id,
    name,
    email,
    subject,
    content,
  };
}
