/* eslint-disable no-unused-vars */

import { useState } from "react";
import CollectionItems from "../components/CollectionItems";
import FilterComponents from "../components/FilterComponents";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

function Collection() {
  const [filterProducts, setFilterProducts] = useState([]);

  return (
    <>
      <Link to="/">
        <button className="border-4 px-4 mb-6 py-4 font-bold flex items-center gap-4 hover:bg-black hover:text-white">
          <FaArrowLeftLong />
          <p>Back to Home</p>
        </button>
      </Link>
      <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-10">
        {/* Filter section */}
        <FilterComponents
          filterProducts={filterProducts}
          setFilterProducts={setFilterProducts}
        />
        {/* Collection Items */}
        <CollectionItems
          filterProducts={filterProducts}
          setFilterProducts={setFilterProducts}
        />
      </div>
    </>
  );
}

export default Collection;
