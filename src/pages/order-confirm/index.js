export { default } from "./OrderConfirm";

export async function getServerSideProps(context) {
  return {
    props: {
      referencePayment: context.query.reference,
    },
  };
}
