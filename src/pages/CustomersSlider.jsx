import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const CustomersSlider = () => {


const slides = [
  {
    image: "/c-5.jpg",
    name: "Aisha Rahman",
    title: "Highly Recommended",
    rating: 4,
    desc: "Great experience overall. Good prices, lovely toys, and friendly customer support.",
  },
  {
    image: "/c-4.jpg",
    name: "Hannah Lewis",
    title: "Kids Love Them",
    rating: 5,
    desc: "Such creative toys! My children absolutely love them and never get bored.",
  },
  {
    image: "/c-3.jpg",
    name: "Olivia Green",
    title: "Fast & Reliable Service",
    rating: 5,
    desc: "Quick delivery and everything arrived in perfect condition. Very pleased with the service.",
  },
  {
    image: "/c-2.jpg",
    name: "Emily Carter",
    title: "Great for Learning",
    rating: 4,
    desc: "Lovely educational toys that keep my daughter engaged while learning new skills.",
  },
  {
    image: "/c-1.jpg",
    name: "Sarah Thompson",
    title: "Excellent Quality Toys",
    rating: 5,
    desc: "Brilliant quality toys. My son plays with them every day and they feel very safe and well-made.",
  },
];

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="mySwiper h-[320px]"
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center text-center h-full mt-8">
            <img
              src={item.image}
              className="w-25 h-25 rounded-full m-4 object-contain"
            />
            <p className='text-white'>{item.name}</p>
            <h2 className="text-xl font-semibold text-white">{item.title}</h2>
            <p className="text-white text-sm">{item.desc}</p>
            {/* Stars */}
            <div className="flex my-2">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              ))}
              {[...Array(5 - item.rating)].map((_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    // <Swiper
    //   pagination={{
    //     dynamicBullets: true,
    //   }}
    //   modules={[Pagination]}
    //   className="mySwiper"
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide>
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   <SwiperSlide>Slide 5</SwiperSlide>

    // </Swiper>
  );
};

export default CustomersSlider;