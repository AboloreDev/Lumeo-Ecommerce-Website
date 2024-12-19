import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <ul className="hidden md:flex gap-10 text-lg text-stone-800 uppercase font-bold">
      <NavLink
        to="/"
        className="hover:border-b-stone-800 duration-500 transition-all"
      >
        Home
      </NavLink>
      <NavLink to="/collection">Collection</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </ul>
  );
};

export default NavigationLinks;
