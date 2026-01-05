const SlideContent = ({ item, onOrder, onDetails }) => {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <p className="text-green-400 uppercase tracking-widest">
            Featured Dish
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            {item.title}
          </h1>

          <p className="text-gray-400">{item.desc}</p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={onOrder}
              className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-full font-semibold transition"
            >
              Order Now
            </button>

            <button
              onClick={onDetails}
              className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              View Details
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={item.img}
            alt={item.title}
            className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
