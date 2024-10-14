export function shippingFormatter(rawShipping) {
  const { id, attributes } = rawShipping;
  const { priceByMeter, priceByKilogram, priceBySample } = attributes;
  return {
    id,
    priceByMeter,
    priceByKilogram,
    priceBySample,
  };
}
