export function orderFormatter(rawOrder) {
  const { id, attributes } = rawOrder;
  const {
    products,
    state,
    dateCreated,
    dateDelivered = null,
    reference,
    paymentStatus,
    addressShipping,
    total,
  } = attributes;
  return {
    id,
    products,
    state,
    dateCreated,
    dateDelivered,
    reference,
    paymentStatus,
    addressShipping,
    total,
  };
}
