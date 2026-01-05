import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfo({ address, phone, email, mapSrc }) {
  return (
    <div className="text-white space-y-6">

      <p className="text-gray-400 flex items-center gap-2">
        <MapPin size={16} /> {address}
      </p>

      <p className="text-gray-400 flex items-center gap-2">
        <Phone size={16} /> {phone}
      </p>

      <p className="text-gray-400 flex items-center gap-2">
        <Mail size={16} /> {email}
      </p>

      {/* MAP */}
      <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10">
        <iframe
          title="map"
          className="w-full h-full"
          src={mapSrc}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
