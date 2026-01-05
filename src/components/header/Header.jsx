import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import NavItem from "./NavItem";
import SocialIcons from "./SocialIcons";
import { menuLinks } from "./menuData";

import logo from "./../../assets/images/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/">
            <img src={logo} alt="logo" className="h-12" />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuLinks.map((item) => (
              <NavItem key={item.name} to={item.path} label={item.name} />
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:block">
            <SocialIcons />
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {menuLinks.map((item) => (
              <NavItem
                key={item.name}
                to={item.path}
                label={item.name}
                onClick={() => setOpen(false)}
              />
            ))}

            <SocialIcons />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
