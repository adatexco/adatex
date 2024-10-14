import { Category } from "@/api/category";

export { default } from "./ProductsPage";

export async function getServerSideProps(context) {
  const categorySlug = context.query.category;
  let search = false;
  let category = null;
  if (categorySlug) {
    category = await Category.getBySlug(categorySlug);
  }
  if (context.query.search) {
    search = context.query.search;
  }

  return {
    props: {
      category,
      searchFocus: search,
    },
  };
}
