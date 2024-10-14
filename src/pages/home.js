import { Auth, Product } from "@/api";
import {
  MainLayout,
  Carousel,
  HomeCategories,
  Banner,
  ProductBoard,
  FeaturedProducts,
} from "@/components";
import { useAuth, useCategories, useContent, useLoading } from "@/hooks";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { useRouter } from "next/router";
import { getImageUrl } from "@/utils";

export default function HomePage() {
  const { user, login } = useAuth();
  const [loading, setLoading] = useLoading();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [wompiCheckout, setWompiCheckout] = useState(null);
  const { categories, setCategories } = useCategories();
  const { content } = useContent();
  const router = useRouter();

  const doLogin = async () => {
    try {
      const { jwt } = await Auth.login({
        identifier: "coquito@gmail.com",
        password: "coquito123",
      });
      login(jwt);
    } catch (error) {
      console.error(error);
    }
  };

  const getFeaturedProducts = async () => {
    try {
      setLoading(true);
      const response = await Product.getFeaturedProducts();
      setFeaturedProducts(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleClick = () => {
    router.push("/products");
  };

  useEffect(() => {
    getFeaturedProducts();
  }, []);

  if (loading) return null;

  return (
    <>
      <MainLayout user={user} categories={categories}>
        <Carousel products={featuredProducts} />
        <HomeCategories categories={categories} />
        {content && (
          <Banner
            withImage
            imageUrl={getImageUrl(content.sampleImage.url) ?? ""}
            width={content.sampleImage.width ?? 0}
            height={content.sampleImage.height ?? 0}
            title={"Pide tu muestra"}
          >
            <span className="font-bold text-lg text-white lg:pb-0 pb-4 lg:text-left text-center">
              Quieres tocar y ver la tela antes de comprarla?{" "}
              <br className="lg:hidden lg:mt-2 flex" />
              No te preocupes!
            </span>
            <p className="text-white lg:text-justify   text-center lg:pb-0 pb-4 lg:pr-[50px]">
              <span className="font-bold">
                Puedes solicitar la muestra de cualquiera de nuestros productos
                de forma gratuita
              </span>
              , sólo debes pagar el envío y cuando realices la compra, este
              valor será descontado de tu factura. Con Cately no corres ningún
              riesgo y no tienes que movilizarte para poder tomar la mejor
              decisión! En cada producto verás un botón para solicitar tu
              muestra.
            </p>
            <div className="lg:self-start hidden lg:flex self-center">
              <Button onClick={handleClick} className="font-alegreya my-4">
                Ver productos y solicita tus muestras
              </Button>
            </div>
          </Banner>
        )}
        <FeaturedProducts products={featuredProducts} />
        <div className="container">
          <ProductBoard
            imageUrl={getImageUrl(content.contentMedia[0].url)}
            width={content.contentMedia[0].width}
            height={content.contentMedia[0].height}
            alt={content.contentMedia[0].alt}
            title="Calidad garantizada!"
            textContent="Trabajamos con los mejores fabricantes y proveedores de textile, si tienes algún inconveniente con nuestra tela te devolvermos el 100% del dinero sin preguntas. Estamos seguros de nuestros productos y de nuestra calidad"
          />
        </div>
      </MainLayout>
    </>
  );
}
