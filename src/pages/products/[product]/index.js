import { Product } from "@/api";
export { default } from "./ProductDetailPage";

export async function getServerSideProps(context) {
  const slug = context.params.product;
  return {
    props: {
      slug,
    },
  };
}
