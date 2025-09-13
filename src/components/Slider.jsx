import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// Auto import all images
const images = import.meta.glob("../images/slider/*.{jpg,png,jpeg}", { eager: true });

const Slider = () => {
  const slides = Object.values(images)
    .map((img, index) => ({
      title: `Slide ${index + 1}`,
      desc: `Description for slide ${index + 1}`,
      img: img.default,
    }))
    .sort((a, b) => {
      const nameA = a.img.split("/").pop();
      const nameB = b.img.split("/").pop();
      return nameA.localeCompare(nameB);
    });

  return (
    <div className="w-full h-[60vh] sm:h-[75vh] md:h-screen flex justify-center items-center">
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="w-[90%] h-full" // 👈 Swiper takes full parent height
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center 
                       w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
          >
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-full object-contain rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
