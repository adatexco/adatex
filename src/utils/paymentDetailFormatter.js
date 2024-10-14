export function paymentDetailFormatter(rawPaymentDetail) {
  const { id, attributes } = rawPaymentDetail;

  const {
    cardName,
    cardFranchise,
    cardNumber,
    expirationMonth,
    expirationYear,
    lastUsed,
  } = attributes;

  return {
    id,
    cardName,
    cardFranchise,
    cardNumber,
    expirationMonth,
    expirationYear,
    lastUsed,
  };
}
