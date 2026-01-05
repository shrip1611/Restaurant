import AboutHero from "./AboutHero";
import ImageTextSection from "./ImageTextSection";
import { InfoCard } from "./InfoCard";

import about from "../../assets/images/about.png";
import aboutImg from "../../assets/images/cetering1.png";

export default function About() {
  return (
    <main className="bg-slate-700">

      {/* HERO */}
      <AboutHero
        image={about}
        title="About Us"
        subtitle="Serving taste, tradition, and unforgettable experiences"
      />

      {/* STORY */}
      <ImageTextSection
        tag="Our Story"
        title="A Passion for Great Food & Warm Hospitality"
        image={aboutImg}
        text={[
          "Founded with a love for authentic flavors, our restaurant is dedicated to serving delicious meals crafted from the finest ingredients.",
          "Whether it’s a family dinner, corporate gathering, or wedding celebration, we create moments people remember.",
        ]}
      />

      {/* MISSION & VISION */}
      <section className="bg-cyan-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <InfoCard
            title="Our Mission"
            text="To deliver exceptional food and service that brings people together."
          />
          <InfoCard
            title="Our Vision"
            text="To become a trusted name in hospitality, known for quality and creativity."
          />
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl mb-12 tracking-widest">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Fresh Ingredients",
              "Experienced Chefs",
              "Custom Catering",
              "Warm Hospitality",
            ].map((item) => (
              <div
                key={item}
                className="bg-white/5 p-6 rounded-xl hover:bg-white/10 transition"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
