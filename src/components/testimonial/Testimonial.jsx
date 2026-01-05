// components/testimonial/Testimonial.jsx
import { useRef, useState } from "react";
import TestimonialSlider from "./TestimonialSlider";
import TestimonialAvatars from "./TestimonialAvatars";
import TestimonialNav from "./TestimonialNav";

import testimonials from "../../services/testimonials.json";

import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";

const imageMap = { user1, user2, user3, user4 };

export default function Testimonial() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = testimonials.map(item => ({
    ...item,
    image: imageMap[item.image],
  }));

  return (
    <section className="bg-teal-800 py-8 px-4 text-white">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h1 className="uppercase tracking-widest text-3xl sm:text-4xl md:text-5xl mb-2">
          Testimonial
        </h1>
        <p className="uppercase tracking-widest text-xs sm:text-sm mb-8">
          What customers say about us
        </p>

        {/* Slider */}
        <TestimonialSlider
          data={data}
          swiperRef={swiperRef}
          setActiveIndex={setActiveIndex}
        />

        {/* Avatars */}
        <TestimonialAvatars
          data={data}
          activeIndex={activeIndex}
          swiperRef={swiperRef}
        />

        {/* Navigation */}
        <TestimonialNav />
      </div>
    </section>
  );
}
