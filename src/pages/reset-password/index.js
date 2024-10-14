export { default } from "./ResetPassword";

export async function getServerSideProps(context) {
  const code = context.query.code;
  return {
    props: {
      code,
    },
  };
}
