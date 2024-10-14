import {
  AuthProvider,
  CartProvider,
  CategoriesProvider,
  HeaderProvider,
  LoadingProvider,
  OrdersProvider,
  ContentProvider,
} from "@/contexts";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <LoadingProvider>
        <HeaderProvider>
          <ContentProvider>
            <CategoriesProvider>
              <OrdersProvider>
                <AuthProvider>
                  <CartProvider>
                    <Component {...pageProps} />
                  </CartProvider>
                </AuthProvider>
              </OrdersProvider>
            </CategoriesProvider>
          </ContentProvider>
        </HeaderProvider>
      </LoadingProvider>
    </>
  );
}
