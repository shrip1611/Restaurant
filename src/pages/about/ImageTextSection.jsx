export default function ImageTextSection({
  tag,
  title,
  text,
  image,
  reverse = false,
}) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div
          className={`md:w-1/2 space-y-6 ${
            reverse ? "md:order-2" : ""
          }`}
        >
          <p className="uppercase tracking-widest text-sm text-orange-400">
            {tag}
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            {title}
          </h2>

          {text.map((para, i) => (
            <p key={i} className="text-gray-400 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        {/* IMAGE */}
        <div
          className={`md:w-1/2 overflow-hidden rounded-xl ${
            reverse ? "md:order-1" : ""
          }`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
