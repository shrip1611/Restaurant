import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import SlideContent from "./SlideContent";

const HeroSlider = ({ slides, onOrder, onDetails }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 10000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <SlideContent
            item={item}
            onOrder={() => onOrder(item)}
            onDetails={() => onDetails(item)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
