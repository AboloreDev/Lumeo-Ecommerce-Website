/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/ShopContext";

const PopularPicksItem = ({ item }) => {
  // destructure the item
  const { image, name, price, id } = item;

  //    currency from contextAPI
  const { currency } = useContext(StoreContext);

  return (
    <Link
      to={`/product/${id}`}
      className="px-4 py-2 rounded-xl space-y-2 flex flex-col items-center justify-center"
    >
      <div className="overflow-hidden">
        <img
          className="hover:scale-90 transition ease-in-out w-full h-40 md:h-60 object-contain "
          src={image[0]}
          alt="Product Image"
        />
      </div>
      <div className=" ">
        <h1 className="text-sm md:text-xl">{name}</h1>
        <p className="text-slate-400 text-xs">
          {currency} {price}
        </p>
      </div>
    </Link>
  );
};

export default PopularPicksItem;
