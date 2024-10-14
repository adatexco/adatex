export function couponFormatter(rawCoupon) {
  const { id, attributes } = rawCoupon;
  const { type, value, code, expiration, description, used } = attributes;

  return {
    id,
    type,
    value,
    code,
    expiration,
    description,
    used,
  };
}
