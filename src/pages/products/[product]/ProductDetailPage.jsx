import React, { useEffect, useState } from "react";
import {
  MainLayout,
  ProductBoard,
  ProductDetailHead,
  PageHeader,
  Reviews,
} from "@/components";
import {
  Breadcrumbs as MDBreadcrumbs,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
} from "@material-tailwind/react";
import { useAuth, useLoading } from "@/hooks";
import { StarIcon } from "@heroicons/react/24/outline";
import { Product } from "@/api";
import { getImageUrl } from "@/utils";

export default function ProductDetailPage(props) {
  const [showReviews, setShowReviews] = useState(false);
  const { user } = useAuth();
  const { slug } = props;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useLoading();
  const [showAlert, setShowAlert] = useState(false);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await Product.getBySlug(slug);
      setProduct(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <MainLayout normalNav user={user}>
      {!product || loading ? (
        <div>CARGANDO ...</div>
      ) : (
        <>
          <PageHeader
            title={product.name}
            pathname={"/"}
            query={{ slug: product.slug }}
          />
          <div className="container">
            <div className="my-11 border-b border-[#ededed]">
              <ProductDetailHead product={product} />
              <MDBreadcrumbs className="my-4 flex justify-center bg-transparent p-0">
                <Button
                  size="md"
                  variant="text"
                  className={`${!showReviews && "text-primary"} px-1 py-2`}
                  onClick={() => setShowReviews(false)}
                >
                  Más información
                </Button>
                <Button
                  size="md"
                  variant="text"
                  className={`${showReviews && "text-primary"} px-1 py-2`}
                  onClick={() => setShowReviews(true)}
                >
                  Opiniones
                </Button>
              </MDBreadcrumbs>
              {!showReviews ? (
                <div>
                  <ProductBoard
                    title={product.cares.title}
                    imageUrl={getImageUrl(product.images[0].url)}
                    width={product.images[0].width}
                    height={product.images[0].height}
                    alt={product.images[0].alt}
                  >
                    <div>
                      <p className="text-secondary">{product.cares.content}</p>
                      <List>
                        {product.cares.data.map((c) => (
                          <ListItem
                            key={c.id}
                            className="font-alegreya text-center lg:text-left"
                          >
                            {
                              <ListItemPrefix className=" self-center px-3 m-auto hidden lg:inline-block">
                                <StarIcon className="w-[20px]" />
                              </ListItemPrefix>
                            }
                            <span className="self-start flex flex-col lg:inline gap-1">
                              {
                                <span className="font-bold">{`${c.title} `}</span>
                              }{" "}
                              {c.content}
                            </span>
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  </ProductBoard>
                </div>
              ) : (
                <Reviews product={product} />
              )}
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
}
