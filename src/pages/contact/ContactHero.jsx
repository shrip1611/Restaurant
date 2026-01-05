import SectionHeading from "../../components/common/SectionHeading";

export default function ContactHero({ title, subtitle }) {
  return (
    <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-r from-cyan-600 to-sky-600">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4 mt-25 text-white">
        <SectionHeading
          title={title}
          subtitle={subtitle}
        />
      </div>
    </section>
  );
}
