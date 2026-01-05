
export default function EventCard({ event, reverse }) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10">
      
      {/* IMAGE */}
      <div
        className={`w-full md:w-1/2 ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="h-[260px] sm:h-[300px] overflow-hidden rounded-xl group">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
        </div>
      </div>

      {/* TEXT */}
      <div
        className={`w-full md:w-1/2 text-white space-y-5 ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <p className="uppercase tracking-widest text-md text-amber-600 font-semibold">
          {event.tag}
        </p>

        <h2 className="text-3xl md:text-4xl leading-tight">
          {event.title}
        </h2>

        <p className="text-gray-300 leading-relaxed">
          {event.desc}
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full font-semibold transition">
          Read More
        </button>
      </div>
    </div>
  );
}
