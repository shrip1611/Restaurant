import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
  const handleFormSubmit = () => {
    alert("Message sent successfully!");
  };

  return (
    <main className="bg-gray-600">

      {/* HERO */}
      <ContactHero
        title="Contact Us"
        subtitle="Get in touch with us for reservations & catering"
      />

      {/* CONTENT */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          <ContactInfo
            address="153 Food Street, Pune, Maharashtra"
            phone="+91 51762 93512"
            email="info@foodies.com"
            mapSrc="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />

          <ContactForm onSubmit={handleFormSubmit} />

        </div>
      </section>

    </main>
  );
}
