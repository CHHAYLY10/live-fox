/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { ProductProps } from "@/shared/types";

export default function HomePageScroll(): JSX.Element {
  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const [data, setData] = useState<ProductProps[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.com/tech"
        );
        const data: ProductProps[] = await response.json();
        setData(data.slice(0));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number): void => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
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
              }: ProductProps) => (
                <div key={_id}>
                  <SwiperSlide>
                    <div className="w-full py-24 px-[11rem]  grid md:grid-cols-3 gap-3 shadow-2xl bg-gray-100 rounded-lg">
                      <div className="flex items-center justify-center bg-gray-200 rounded-lg relative group overflow-hidden">
                        <img
                          src={image}
                          alt="product image"
                          width={800}
                          height={800}
                        />
                      </div>
                      <div className="md:col-span-2 flex flex-col gap-3 justify-center p-4">
                        <h1 className="text-xl md:text-3xl tracking-wide font-semibold">
                          {title}
                        </h1>
                        <p className="text-sm text-gray-600 px-[10rem]">{description}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              )
            )}
          </div>
        ) : null}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <style>
        {`#HomePageScroll {
               height: 100%;
             }
             html,
             body {
               position: relative;
               height: 100%;
             }
             
             body {
               background: #eee;
               font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
               font-size: 14px;
               color: #000;
               margin: 0;
               padding: 0;
               height: 100%;
             }
             
             .swiper {
               width: 100%;
               height: 100%;
             }
             
             .swiper-slide {
               text-align: center;
               font-size: 18px;
               background: #fff;
             
               /* Center slide text vertically */
               display: flex;
               justify-content: center;
               align-items: center;
             }
             
             .swiper-slide img {
               display: block;
               width: 100%;
               height: 100%;
               object-fit: cover;
             }
             
             .autoplay-progress {
               position: absolute;
               right: 16px;
               bottom: 16px;
               z-index: 10;
               width: 48px;
               height: 48px;
               display: flex;
               align-items: center;
               justify-content: center;
               font-weight: bold;
               color: var(--swiper-theme-color);
             }
             
             .autoplay-progress svg {
               --progress: 0;
               position: absolute;
               left: 0;
               top: 0px;
               z-index: 10;
               width: 100%;
               height: 100%;
               stroke-width: 4px;
               stroke: var(--swiper-theme-color);
               fill: none;
               stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
               stroke-dasharray: 125.6;
               transform: rotate(-90deg);
             }
             `}
      </style>
    </>
  );
}
