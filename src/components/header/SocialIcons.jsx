import { Facebook, Twitter, Instagram } from "lucide-react";

const SocialIcons = () => {
  return (
    <div className="flex space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <Twitter className="w-5 h-5 text-gray-600 hover:text-sky-500" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500" />
      </a>
    </div>
  );
};

export default SocialIcons;
