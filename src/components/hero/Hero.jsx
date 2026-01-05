import { useState } from "react";
import HeroSlider from "./HeroSlider";
import DishModal from "./DishModal";
import { heroSlides } from "./heroData";

const Hero = () => {
  const [activeDish, setActiveDish] = useState(null);
  const [modalType, setModalType] = useState(null);

  const closeModal = () => {
    setActiveDish(null);
    setModalType(null);
  };

  return (
    <section className="bg-black text-white">
      <HeroSlider
        slides={heroSlides}
        onOrder={(dish) => {
          setActiveDish(dish);
          setModalType("order");
        }}
        onDetails={(dish) => {
          setActiveDish(dish);
          setModalType("details");
        }}
      />

      <DishModal
        dish={activeDish}
        type={modalType}
        onClose={closeModal}
      />
    </section>
  );
};

export default Hero;
