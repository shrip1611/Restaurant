import { useState } from "react";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
        ></textarea>

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
