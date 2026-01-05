// components/testimonial/TestimonialNav.jsx
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialNav() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <button className="custom-prev bg-white text-pink-600 p-2 rounded-full hover:scale-110 transition">
        <ChevronLeft size={20} />
      </button>
      <button className="custom-next bg-white text-pink-600 p-2 rounded-full hover:scale-110 transition">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
