import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/ShopContext";
import { FaSearch } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  // bringing out the states from storeContext
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(StoreContext);

  const [visibility, setVisibility] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [location]);

  return showSearch && visibility ? (
    <div className="border text-center flex items-center max-w-2xl mx-auto gap-6 bg-slate-200 mb-10">
      <div className="items-center justify-center border inline-flex flex-1 px-4 py-4 cursor-pointer">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none text-sm w-full p-2"
          placeholder="Search Items"
        />
        <span className="ml-2">
          <FaSearch className="text-2xl" />
        </span>
      </div>
      <div className="text-2xl items-center text-center p-2 cursor-pointer">
        <FaTimes onClick={() => setShowSearch(!showSearch)} />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
