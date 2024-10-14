import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { Button, Input, Rating, Textarea } from "@material-tailwind/react";
import { Review } from "@/api";
import { useAuth } from "@/hooks";

export function Reviews({ product }) {
  const { user } = useAuth();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    title: "",
    content: "",
    author: user ? `${user.firstname} ${user.lastname}` : "",
    rating: 0,
    user: user ? user.id : null,
    product: product.id,
  });

  const [internLoading, setInternLoading] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (key, event) => {
    setNewReview({ ...newReview, [key]: event.target.value });
  };

  const getReviews = async () => {
    try {
      setLoading(true);
      const response = await Review.getAllByProductId(product.id);
      setReviews(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleButtonState = () => {
    if (
      newReview.title === "" ||
      newReview.content === "" ||
      newReview.author === "" ||
      newReview.rating === 0
    ) {
      return true;
    }

    return false;
  };

  const addReview = async () => {
    try {
      setInternLoading(true);
      const response = await Review.create({ data: newReview });
      setReviews([response, ...reviews]);
      setNewReview({
        title: "",
        content: "",
        author: user ? `${user.firstname} ${user.lastname}` : "",
        rating: 0,
        user: user ? user.id : null,
        product: product.id,
      });
      setInternLoading(false);
    } catch (error) {
      console.error(error);
      setInternLoading(false);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  if (!product || loading) {
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  }

  return (
    <div className="bg-white py-4 max-w-80 lg:max-w-none lg:grid lg:grid-cols-12 min-h-[383px]">
      <div className="flex flex-col gap-3 mb-4 lg:col-span-6 order-2">
        <h3 className="font-bold text-secondary">Dejanos tus opinones</h3>
        <Rating
          value={newReview.rating}
          onChange={(value) => setNewReview({ ...newReview, rating: value })}
        />
        <Input
          label="Nombre"
          className="!font-alegreya"
          value={newReview.author}
          onChange={(e) => handleChange("author", e)}
        />
        <Input
          label="Titulo"
          className="!font-alegreya"
          value={newReview.title}
          onChange={(e) => handleChange("title", e)}
        />
        <Textarea
          label="Opiniones"
          className="!font-alegreya"
          value={newReview.content}
          onChange={(e) => handleChange("content", e)}
        />
        <Button
          loading={internLoading}
          disabled={handleButtonState()}
          onClick={() => addReview()}
        >
          Enviar
        </Button>
      </div>
      <div className="lg:col-span-6 order-1 w-full">
        <>
          <h3 className="font-bold text-secondary">Opiniones</h3>
          {reviews.length === 0 ? (
            <div>
              <h3>No hay opiniones aún. Se el primero en crear una!</h3>
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-3 my-10">
                <div className="flex flex-col sm:flex-row align-middle gap-1 sm:gap-3 w-full">
                  <p className="text-md sm:text-center sm:self-center font-bold text-secondary">
                    {review.author}
                  </p>
                  <Rating value={review.rating} readonly />
                </div>
                <div className="order-2 gap-1 flex flex-col">
                  <h3 className="text-sm text-secondary font-bold">
                    {review.title}
                  </h3>
                  <p className="text-sm text-gray-600">{review.content}</p>
                </div>
              </div>
            ))
          )}
        </>
      </div>
    </div>
  );
}
