// components/footer/FooterAbout.jsx
import logo from "../../assets/images/logo.png";

export default function FooterAbout() {
  return (
    <div>
      <img src={logo} alt="logo" className="h-20 mb-3" />
      <p className="text-sm leading-relaxed">
        Serving delicious food made with love. Enjoy fresh ingredients,
        authentic taste, and a warm dining experience.
      </p>
    </div>
  );
}
