// components/testimonial/TestimonialAvatars.jsx
export default function TestimonialAvatars({ data, activeIndex, swiperRef }) {
  const goToSlide = (index) => {
    swiperRef.current?.slideToLoop(index);
  };

  return (
    <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
      {data.map((item, index) => (
        <button
          key={item.id}
          onClick={() => goToSlide(index)}
          className={`rounded-full transition-all duration-300 ${
            activeIndex === index
              ? "ring-4 ring-white scale-125"
              : "opacity-60 hover:opacity-100"
          }`}
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
