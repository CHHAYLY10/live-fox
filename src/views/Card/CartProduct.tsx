/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LuMinus, LuPlus } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { CiCircleRemove } from "react-icons/ci";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/utils/nextSlice";
import FormattedPrice from "@/components/Formatted/FormattedPrice";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: string;
  quantity: number;
}

interface cartProductsProps {
  item: Item;
}

const CartProduct = ({ item }: cartProductsProps) => {
  const dispatch = useDispatch();
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex mt-8 flex-1">
        <div className="h-400 w-340 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={item.image} alt="Product image" width={200} height={200} />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div className="w-[20rem]">
            <div className="flex justify-between  font-medium text-gray-900">
              <h3>{item.title}</h3>
              <div className="text-lg ml-4 font-semibold text-amazon_blue">
                <FormattedPrice amount={item.price * item.quantity} />
              </div>
            </div>
            <p className="mt-5 text-sm text-gray-500 line-clamp-6">
              {item.description}
            </p>
            <p className="text-sm text-gray-600 mt-5">
              Unit Price{" "}
              <span className="font-semibold text-amazon_blue">
                <FormattedPrice amount={item.price} />
              </span>
            </p>
          </div>

          <div className="flex mt-10 flex-1 justify-between text-sm">
            <p className="text-gray-500">
              <div className="flex items-center gap-6">
                <div className="flex items-center mt-1 justify-between border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
                  <span
                    onClick={() =>
                      dispatch(
                        increaseQuantity({
                          _id: item._id,
                          brand: item.brand,
                          category: item.category,
                          description: item.description,
                          image: item.image,
                          isNew: item.isNew,
                          oldPrice: item.oldPrice,
                          price: item.price,
                          title: item.title,
                          quantity: 1,
                        })
                      )
                    }
                    className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                  >
                    <LuPlus />
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    onClick={() =>
                      dispatch(
                        decreaseQuantity({
                          _id: item._id,
                          brand: item.brand,
                          category: item.category,
                          description: item.description,
                          image: item.image,
                          isNew: item.isNew,
                          oldPrice: item.oldPrice,
                          price: item.price,
                          title: item.title,
                          quantity: 1,
                        })
                      )
                    }
                    className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer decoration-purple-300"
                  >
                    <LuMinus />
                  </span>
                </div>
                <div
                  onClick={() => dispatch(deleteProduct(item._id))}
                  className="flex items-center text-[3rem] font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300"
                >
                  <CiCircleRemove className="mt-[2px]" />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
