import React from 'react';
import 'swiper/css'; // core Swiper
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


function Slider() {
 

  return (
    <div className="w-full max-w-8xl mx-auto ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="lg:rounded-lg overflow-hidden"
      >
        <SwiperSlide>
          <img
            src="/assets/slide-1.png"
            alt="Slide 1"
            className="w-full h-[700px] object-contain bg-gray-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/1.png"
            alt="Slide 2"
            className="w-full h-[700px] object-contain bg-gray-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slider-2.png"
            alt="Slide 3"
            className="w-full h-[700px] object-contain bg-gray-100"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/assets/slide-3.jpg"
            alt="Slide 4"
            className="w-full h-[700px] object-contain bg-gray-100"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
