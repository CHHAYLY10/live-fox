/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import FormattedPrice from "@/components/Formatted/FormattedPrice";
import { addToCart } from "@/utils/nextSlice";
import { Rating } from "@mui/material";
import { Bus } from "@/components/Loading";

const ProductDetail = () => {
  const [product, setProduct] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    setProduct(router.query);
  }, [router.query]);
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-4 md:py-10">
      {isLoading ? (
        <div className="w-full flex flex-col gap-6 items-center justify-center py-20">
          <Bus />
          <PulseLoader
            color="#000000"
            margin={12}
            size={7}
            speedMultiplier={1}
          />
        </div>
      ) : (
        <div className="w-full grid md:grid-cols-3 gap-3 shadow-2xl bg-gray-100 rounded-lg">
          <div className="flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden">
            <img
              src={product.image}
              alt="product image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
            <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
              {product.title}
            </h1>
            <p className="text-xs md:text-sm text-amazon_blue font-semibold">
              {product.category} {product.brand}
            </p>

            <div>
              <span className="text-lg text-amazon_blue font-semibold">
                <FormattedPrice amount={product.price} />
                <span className="ml-1 text-sm line-through">
                  <FormattedPrice amount={product.oldPrice} />
                </span>
              </span>
            </div>
            <Rating
              className="mr-10"
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />

            <h1 className="border-b-4">Description / Detail / Comments</h1>
            <p className="text-sm text-gray-600">{product.description}</p>

            <p className="text-base text-gray-800 flex items-center gap-1">
              QUANTITY : 1
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              Your saved:{" "}
              <span>
                <FormattedPrice amount={product.oldPrice - product.price} />
              </span>
            </p>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    brand: product.brand,
                    category: product.category,
                    description: product.description,
                    image: product.image,
                    isNew: product.isNew,
                    oldPrice: product.oldPrice,
                    price: product.price,
                    title: product.title,
                    quantity: 1,
                  })
                )
              }
              className="inline-block w-full md:w-96 mt-4 h-10 px-6 pb-1 border border-gray-700 rounded transition-all duration-200 relative overflow-hidden text-black z-10 hover:text-white hover:border-black hover:bg-black"
            >
              Order
              <span className="absolute left-1/2 transform -translate-x-1/2 scale-y-0 scale-x-125 top-full w-140 h-180 bg-opacity-5 rounded-full transition-all duration-500 delay-100"></span>
              <span className="absolute left-1/2 transform -translate-x-1/2 scale-y-0 scale-x-145 top-180 w-160 h-190 bg-black rounded-full transition-all duration-500 delay-100"></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
