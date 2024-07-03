import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import MyImage from "../Image";

export default function AutoScroll() {
  return (
    <div className="p-10">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/IMG_3926.JPG"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/DSC_0139.JPG"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/image_2023-08-29_09-15-16.png"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/Demon.png"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/Photo​​ 4x6.jpg"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/photo_2024-03-28_19-30-04.jpg"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/1671067320570.jpg"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inline-block px-3">
            <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md transition-shadow duration-300 ease-in-out">
              <MyImage
                src="/assets/artwork/Scroll/image_2023-08-29_09-54-56.png"
                className="cursor-pointer w-full h-[300px] [box-shadow:0_14px_28px_rgba(0,_0,_0,_0.25),_0_10px_10px_rgba(0,_0,_0,_0.22)] opacity-100 top-2/4 object-cover scale-90 hover:scale-100 transition-transform duration-300"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
