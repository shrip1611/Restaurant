// components/footer/FooterContact.jsx
import { Phone, Mail, MapPin } from "lucide-react";

export default function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
      <ul className="space-y-3 text-sm">
        <li className="flex items-center gap-2">
          <MapPin size={16} /> Pune, Maharashtra
        </li>
        <li className="flex items-center gap-2">
          <Phone size={16} /> +91 51762 93512
        </li>
        <li className="flex items-center gap-2">
          <Mail size={16} /> info@foodies.com
        </li>
      </ul>
    </div>
  );
}
