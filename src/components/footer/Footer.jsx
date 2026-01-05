// components/footer/Footer.jsx
import FooterAbout from "./FooterAbout";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FooterAbout />
          <FooterLinks />
          <FooterContact />
          <FooterSocial />
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10"></div>

        {/* Bottom */}
        <div className="text-center text-sm py-6">
          © {new Date().getFullYear()} Foodies Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
