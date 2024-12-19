/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { StoreContext } from "../context/ShopContext";

const FilterComponents = ({ filterProducts, setFilterProducts }) => {
  const [showFilter, setShowFilter] = useState(false);

  // sorting state
  const [sorting, setSorting] = useState("relevant");

  const {
    products,
    search,
    showSearch,
    category,
    setCategory,
    subCategory,
    setSubCategory,
  } = useContext(StoreContext);

  // ÷category toggle
  function handleCategoryToggle(e) {
    if (category.includes(e.target.value)) {
      setCategory((product) =>
        product.filter((item) => item !== e.target.value)
      );
    } else {
      setCategory((product) => [...product, e.target.value]);
    }
  }

  // sub category toggle
  function handleSubcategoryToggle(e) {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((product) =>
        product.filter((item) => item !== e.target.value)
      );
    } else {
      setSubCategory((product) => [...product, e.target.value]);
    }
  }

  // Applying filter for category and subcategory
  function applyFilter() {
    // create a duplicate of the whole products array
    let productsDuplicate = products.slice();

    if (showSearch && search) {
      productsDuplicate = productsDuplicate.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productsDuplicate = productsDuplicate.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsDuplicate = productsDuplicate.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(productsDuplicate);
  }

  // Filter for sorting of products
  function handleSort() {
    // use the filter products to duplicate the products
    let productDuplicate = filterProducts.slice();

    switch (sorting) {
      case "low-high":
        setFilterProducts(productDuplicate.sort((a, b) => a.price - b.price));

        break;
      case "high-low":
        setFilterProducts(productDuplicate.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
    }
  }

  // use effects to filter based on category
  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  // use Effect to filter based on sort after filter products
  useEffect(() => {
    handleSort();
  }, [sorting]);

  // filter handle
  function handleFilter() {
    setShowFilter(!showFilter);
  }

  return (
    <div className="min-w-40">
      <p className="uppercase cursor-pointer flex gap-2 items-center">
        Filters
        <IoMdArrowDropdown
          onClick={handleFilter}
          className={`md:hidden ${showFilter ? "rotate-360" : ""}`}
        />
      </p>
      {/* Categories */}
      <div
        className={`border border-gray-300 mt-6 py-4 px-2 ${
          showFilter ? "block" : "hidden"
        } md:block`}
      >
        <p className="text-md font-bold mb-3">Catrgories</p>
        <div className="flex flex-col gap-2 font-medium">
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"male"}
              onChange={handleCategoryToggle}
            />
            Men
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"female"}
              onChange={handleCategoryToggle}
            />
            Women
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"unisex"}
              onChange={handleCategoryToggle}
            />
            Unisex
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"shoes"}
              onChange={handleCategoryToggle}
            />
            Shoes
          </p>
        </div>
      </div>

      {/* SUb categories */}
      <div
        className={`border border-gray-300 mt-6 py-4 px-2 ${
          showFilter ? "" : "hidden"
        } md:block `}
      >
        <p className="text-md font-bold mb-3">Sub-categories</p>
        <div className="flex flex-col gap-2 font-medium">
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"topwear"}
              onChange={handleSubcategoryToggle}
            />
            Topwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"bottomwear"}
              onChange={handleSubcategoryToggle}
            />
            Bottomwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"footwear"}
              onChange={handleSubcategoryToggle}
            />
            Footwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"headwear"}
              onChange={handleSubcategoryToggle}
            />
            Headwear
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"casualwears"}
              onChange={handleSubcategoryToggle}
            />
            Casuals
          </p>
          <p className="flex gap-2">
            <input
              type="checkbox"
              value={"suits"}
              onChange={handleSubcategoryToggle}
            />
            Suits
          </p>
        </div>
      </div>
      {/* Sort Tag */}
      <select
        className={`border border-gray-300 mt-6 py-4 px-4 ${
          showFilter ? "" : "hidden"
        } md:block `}
        onChange={(e) => setSorting(e.target.value)}
      >
        <option value="relevance">Sort by: relevance</option>
        {/* <option value="top-sales">Sort by: top sales</option> */}
        <option value="low-high">Sort by: low to high</option>
        <option value="high-low">Sort by: high to low</option>
      </select>
    </div>
  );
};

export default FilterComponents;
