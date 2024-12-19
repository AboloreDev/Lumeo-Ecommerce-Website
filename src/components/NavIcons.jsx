import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { StoreContext } from "../context/ShopContext";

const NavIcons = () => {
  const { setShowSearch, getTotalCartCount } = useContext(StoreContext);
  // mebile menu state
  const [isOpen, setIsOpen] = useState(false);

  // const [isVisible, setIsVisible] = useState(false);

  function handleOpenMobileMenu() {
    setIsOpen(!isOpen);
  }
  function handleCloseMobileMenu() {
    setIsOpen(isOpen);
  }

  function handleOpenSearchBar() {
    setShowSearch(true);
  }

  // /totalcount
  const totalCount = getTotalCartCount();

  return (
    <div className="flex gap-10 items-center text-lg cursor-pointer">
      {/* Search icon */}
      <FaSearch onClick={handleOpenSearchBar} />
      {/* user */}
      <div className="group relative z-50 bg-white">
        <Link to="/login">
          <FaUserAlt className="w-5" />
        </Link>

        <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10  bg-white">
          <div className="flex flex-col gap-6 w-40 py-4 px-6 text-gray-600 z-10  bg-white">
            <p className="hover:text-stone-50 cursor-pointer p-2 hover:bg-slate-800">
              My Profile
            </p>
            <p className="hover:text-stone-50  cursor-pointer p-2 hover:bg-slate-800">
              Orders
            </p>
            <p className="hover:text-stone-50 cursor-pointer p-2  hover:bg-slate-800">
              Logout
            </p>
          </div>
        </div>
      </div>
      {/* cart */}
      <Link to="/cart" className="relative">
        <FaShoppingCart className="w-5" />
        <p className="absolute left-[14px] top-[10px] text-center w-6  text-sm bg-red-600 rounded-2xl text-white">
          {totalCount}
        </p>
      </Link>
      {/* menu bar */}
      <div className="flex md:hidden">
        <FaBars className="text-2xl" onClick={handleOpenMobileMenu} />
      </div>
      {/* SIDEBAR */}
      <Sidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onHandleCloseMobileMenu={handleCloseMobileMenu}
      />
    </div>
  );
};

export default NavIcons;
