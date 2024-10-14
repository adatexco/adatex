import { ENV } from "./constants";

const idGenerator = () => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

export async function encryptTransactionInfo(amount) {
  const transactionId = idGenerator();
  const transactionInfo = `${transactionId}${amount * 100}COP${
    ENV.WOMPI_INTEGRITY_KEY
  }`;
  const encondedText = new TextEncoder().encode(transactionInfo);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encondedText);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return {
    credential: hashHex,
    reference: transactionId,
    amountInCents: amount * 100,
  };
}
