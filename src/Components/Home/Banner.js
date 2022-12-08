import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
const Banner = () => {
  return (
    <div className="mx-5 mt-5">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        modules={[Pagination, Navigation]}
        navigation={{ clickable: true }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="mySwiper"
      >
        <SwiperSlide
          className="slider text-white text-start"
          style={{
            backgroundImage: 'url("https://i.ibb.co/XYFgBdP/bg3.jpg")',
          }}
        >
          <div className="slider-text ">
            <div>
              <h1 className="lg:text-5xl text-3xl py-5">
                Get The Ultimate Profit From The Bit Coin
              </h1>
              <p className="lg:text-3xl text-xl">
                Predict the price direction call or put ?
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slider text-white text-center"
          style={{
            backgroundImage:
              'url(" https://i.ibb.co/dp8WWt7/adobestock-513059759-editorial-use-only.jpg")',
          }}
        >
          <div className="slider-text ">
            <div>
              <h1 className="lg:text-5xl text-3xl py-5">
                Join Future Of Algorithmic Crypto Trading Strategies
              </h1>
              <p className="lg:text-3xl text-xl">
                The first ever instant service.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className="slider text-white text-center"
          style={{
            backgroundImage: 'url("https://i.ibb.co/t4b7Fy0/xrp-1.jpg")',
          }}
        >
          <div className="slider-text ">
            <div>
              <h1 className="lg:text-5xl text-3xl py-5">
                The crypto trading app for the next-gen
              </h1>
              <p className="lg:text-3xl text-xl">
                Predict the price direction call or put ?
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
