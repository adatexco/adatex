export function addressFormatter(rawAddress) {
  const { id, attributes } = rawAddress;
  const {
    address,
    city,
    directions,
    contactNumber,
    zipCode,
    neighborhood,
    lastUsed,
    name,
  } = attributes;
  return {
    id,
    address,
    city,
    directions,
    contactNumber,
    zipCode,
    neighborhood,
    lastUsed,
    name,
  };
}
