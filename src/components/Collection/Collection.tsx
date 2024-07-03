/* eslint-disable @next/next/no-img-element */
import { ProductProps } from "@/shared/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Collection() {
  const [data, setData] = useState<ProductProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.com/tech"
        );
        const data: ProductProps[] = await response.json();
        setData(data.slice(0, 6));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {data ? (
        <div className="flex flex-wrap justify-center">
          {data.map(
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
              <div key={_id}>
                <section className="flex justify-center flex-wrap mt-[65px]">
                  <div className="flex place-content-center max-w-[1200px] w-[90%] mx-[auto] my-[0]">
                    <div className="w-[330px] m-[20px] relative ">
                      <Link
                        href={{
                          pathname: `/product/${_id}`,
                          query: {
                            _id,
                            title,
                            brand,
                            category,
                            description,
                            image,
                            isNew,
                            oldPrice,
                            price,
                          },
                        }}
                      >
                        <img
                          className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
                          src={image}
                          alt="img"
                        />
                      </Link>
                    </div>
                  </div>
                </section>
              </div>
            )
          )}
        </div>
      ) : null}
    </>
  );
}
