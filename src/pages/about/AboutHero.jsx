import SectionHeading from "../../components/common/SectionHeading";

export default function AboutHero({ image, title, subtitle }) {
  return (
    <section className="relative h-[60vh] mt-16 flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 text-center px-4 text-white ">
        <SectionHeading
          title={title}
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
