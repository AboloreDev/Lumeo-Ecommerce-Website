/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { StoreContext } from "../context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { currency, addToCart } = useContext(StoreContext);

  const { name, description, sizes, price, id } = product;

  const [itemSize, setItemSize] = useState("");

  function handleAddItems() {
    addToCart(id, itemSize);
  }

  return (
    <div className="space-y-6">
      <h1 className="font-bold text-2xl mt-2">{name}</h1>
      <div className="flex items-center gap-1 mt-2">
        {/* star rating */}
        <p></p>
      </div>
      <p className="text-lg md:text-xl font-medium text-slate-500">
        {currency}
        {price}
      </p>
      <p className="text-slate-500 text-xl font-semibold ">{description}</p>
      <div className="flex flex-col gap-4">
        <p className="text-lg">
          {itemSize ? `You selected: ${itemSize} ` : "Select Size"}
        </p>
        <div className="flex gap-8 text-xl font-bold overflow-x-scroll overflow-">
          {sizes.map((size, index) => (
            <button
              onClick={() => setItemSize(size)}
              className={`border-2 border-black px-4 py-2  hover:bg-black hover:text-white ${
                itemSize === size ? "border-red-400 bg-red-400" : ""
              }`}
              key={index}
            >
              {size}
            </button>
          ))}
        </div>
        {/* Button */}
        <button
          className="bg-black text-white px-4 py-4"
          onClick={handleAddItems}
        >
          ADD TO CART
        </button>
        <hr />
        {/* end of line */}
        <div className="flex flex-col text-slate-400">
          <p>All Products are Original</p>
          <p>Products can be returned within 7 days</p>
          <p>Payment on Delivery is Available</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
