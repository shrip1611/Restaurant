// components/testimonial/TestimonialSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TestimonialSlider({ data, swiperRef, setActiveIndex }) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      slidesPerView={1}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
      className="mb-10 px-2"
    >
      {data.map(item => (
        <SwiperSlide key={item.id}>
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {item.text}
          </p>
          <p className="mt-4 text-xs sm:text-sm">
            <span className="font-semibold">{item.name}</span> – From {item.location}
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
