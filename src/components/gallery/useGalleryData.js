import foodItems from "../../services/foodItmes.json";

import CauliflowerCurry from "../../assets/images/dishes/CauliflowerCurry.jpeg";
import ChickpeaCurry from "../../assets/images/dishes/ChickpeaCurry.jpeg";
import CottageCheeseinCreamyTomatoSauce from "../../assets/images/dishes/CottageCheeseinCreamyTomatoSauce.jpeg";
import CreamyBlackLentils from "../../assets/images/dishes/CreamyBlackLentils.jpeg";
import FragrantSpicedVegetable from "../../assets/images/dishes/FragrantSpicedVegetable.jpeg";
import GrilledCottageCheeseSkewers from "../../assets/images/dishes/GrilledCottageCheeseSkewers.jpeg";
import HaraBharaKabab from "../../assets/images/dishes/HaraBharaKabab.jpeg";
import MixedVegetableCurry from "../../assets/images/dishes/MixedVegetableCurry.jpeg";
import PotatoCauliflowerCurry from "../../assets/images/dishes/Potato&CauliflowerCurry.jpeg";
import RoyalCreamyCottageCheese from "../../assets/images/dishes/RoyalCreamyCottageCheese.jpeg";
import SpicedChickpeaCurry from "../../assets/images/dishes/SpicedChickpeaCurry.jpeg";
import SpinachGreenVegPatties from "../../assets/images/dishes/Spinach&GreenVegPatties.jpeg";
import VegSpringRolls from "../../assets/images/dishes/VegSpringRolls.jpeg";
import YellowLentilswithSpices from "../../assets/images/dishes/YellowLentilswithSpices.jpeg";
import ClayOvenRoastedChicken from "../../assets/images/dishes/Clay-OvenRoastedChicken.jpeg";
import CreamyTomatoChicken from "../../assets/images/dishes/CreamyTomatoChicken.jpeg";
import GrilledChickeninSpicedCreamSauce from "../../assets/images/dishes/GrilledChickeninSpicedCreamSauce.jpeg";
import GrilledSpicedFish from "../../assets/images/dishes/GrilledSpicedFish.jpeg";
import IndianSpicedChickenCurry from "../../assets/images/dishes/IndianSpicedChickenCurry.jpeg";
import IndianSpicedLamb from "../../assets/images/dishes/IndianSpicedLamb.jpeg";
import MincedMeatCurry from "../../assets/images/dishes/MincedMeatCurry.jpeg";
import SlowCookedSpicedLambCurry from "../../assets/images/dishes/Slow-CookedSpicedLambCurry.jpeg";
import ChickeninSpicedCreamSauce from "../../assets/images/dishes/ChickeninSpicedCreamSauce.jpeg";
import SpicedChickenRice from "../../assets/images/dishes/SpicedChickenRice.jpeg";
import SpicedEggCurry from "../../assets/images/dishes/SpicedEggCurry.jpeg";
import SpicyFriedChickenBites from "../../assets/images/dishes/SpicyFriedChickenBites.jpeg";
import SpicedIndianFishCurry from "../../assets/images/dishes/SpicedIndianFishCurry.jpeg";
import SpicyShrimpCurry from "../../assets/images/dishes/SpicyShrimpCurry.jpeg";

const imageMap = {
  CauliflowerCurry,
  ChickpeaCurry,
  CottageCheeseinCreamyTomatoSauce,
  CreamyBlackLentils,
  FragrantSpicedVegetable,
  GrilledCottageCheeseSkewers,
  HaraBharaKabab,
  MixedVegetableCurry,
  PotatoCauliflowerCurry,
  RoyalCreamyCottageCheese,
  SpicedChickpeaCurry,
  SpinachGreenVegPatties,
  VegSpringRolls,
  YellowLentilswithSpices,
  ClayOvenRoastedChicken,
  CreamyTomatoChicken,
  GrilledChickeninSpicedCreamSauce,
  GrilledSpicedFish,
  IndianSpicedChickenCurry,
  IndianSpicedLamb,
  MincedMeatCurry,
  SlowCookedSpicedLambCurry,
  ChickeninSpicedCreamSauce,
  SpicedChickenRice,
  SpicedEggCurry,
  SpicyFriedChickenBites,
  SpicedIndianFishCurry,
  SpicyShrimpCurry,
};

export const getGalleryItems = () =>
  foodItems.map(item => ({
    ...item,
    image: imageMap[item.image],
  }));
