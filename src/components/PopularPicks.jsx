/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/ShopContext";
// import PopularPicksItem from "./PopularPicksItem";
import PopularPicksTitle from "./PopularPicksTitle";
import ProductItem from "./ProductItem";

const PopularPicks = () => {
  // Getting products from contextAPI
  const { products } = useContext(StoreContext);
  // state for popular picks
  const [popularPicks, setPopularPicks] = useState([]);

  //   using useEffect to effectively load out the data
  useEffect(() => {
    const popular = products.filter((item) => item.bestSeller === true);

    setPopularPicks(popular.slice(0, 6));
  }, [products]);

  return (
    <div className="my-10">
      <PopularPicksTitle />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10">
        {popularPicks.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularPicks;
