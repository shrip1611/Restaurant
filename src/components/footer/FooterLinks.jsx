// components/footer/FooterLinks.jsx
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function FooterLinks() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              to={link.path}
              className="hover:text-green-400 transition"
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
