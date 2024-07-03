/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import FormattedPrice from "@/components/Formatted/FormattedPrice";
import { useDispatch } from "react-redux";
import { addToCart } from "@/utils/nextSlice";
import { ProductProps } from "@/shared/types";
import Percentage from "@/components/Formatted/Percentage";

const Products = ({ productData }: any) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full mt-[17rem] px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
      {productData.map(
        ({
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps) => (
          <div
            key={_id}
            className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
          >
            <div className="w-full h-[260px] relative">
              <div className="flex items-center w-20 p-3 h-20 rounded-br-[6rem] text-white bg-[#fc3232] absolute -top-4 -left-4">
                <p className="relative -top-1 font-bold">
                  <Percentage amount={((oldPrice - price) / price) * 100} />
                </p>
              </div>
              <Link
                href={{
                  pathname: `/product/${_id}`,
                  query: {
                    _id: _id,
                    brand: brand,
                    category: category,
                    description: description,
                    image: image,
                    isNew: isNew,
                    oldPrice: oldPrice,
                    price: price,
                    title: title,
                  },
                }}
              >
                <img
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  width={300}
                  height={300}
                  src={image}
                  alt="productImage"
                />
              </Link>
              {isNew && (
                <p className="absolute text-blue-950 top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                  !save <FormattedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="text-xs text-gray-500 tracking-wide">
                / {category}
              </p>
              <p className="text-base font-medium">{title}</p>
              <p className="flex items-center gap-2">
                <span className="text-sm line-through text-red-900">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
              </p>
              <p className="text-xs text-gray-600 text-justify">
                {description.substring(0, 120)}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      quantity: 1,
                    })
                  )
                }
                className="inline-block mt-4 h-10 px-6 pb-1 border border-gray-700 rounded transition-all duration-200 relative overflow-hidden text-black z-10 hover:text-white hover:border-black hover:bg-black"
              >
                Add To Card
                <span className="absolute left-1/2 transform -translate-x-1/2 scale-y-0 scale-x-125 top-full w-140 h-180 bg-opacity-5 rounded-full transition-all duration-500 delay-100"></span>
                <span className="absolute left-1/2 transform -translate-x-1/2 scale-y-0 scale-x-145 top-180 w-160 h-190 bg-black rounded-full transition-all duration-500 delay-100"></span>
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Products;
