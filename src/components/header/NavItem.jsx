import { NavLink } from "react-router-dom";

const NavItem = ({ to, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        isActive
          ? "text-orange-500 font-semibold"
          : "text-gray-700 hover:text-green-700 transition"
      }
    >
      {label}
    </NavLink>
  );
};

export default NavItem;
