/* eslint-disable react/prop-types */

import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute overflow-hidden bg-white transition-all duration-700 right-0 top-0 z-40 ${
        isOpen ? "w-1/2 h-screen opacity-90" : "w-0"
      }`}
    >
      <div className="flex flex-col i text-gray-950 ">
        <div className="text-4xl mt-10 flex items-end justify-end p-4">
          <FaTimes onClick={() => setIsOpen(!isOpen)} />
        </div>
        <div className="flex flex-col space-y-8 items-center justify-center mt-10 font-bold uppercase">
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/"
            className="hover:text-slate-500"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/collection"
            className="hover:text-slate-500"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/about"
            className="hover:text-slate-500"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(!isOpen)}
            to="/contact"
            className="hover:text-slate-500"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
