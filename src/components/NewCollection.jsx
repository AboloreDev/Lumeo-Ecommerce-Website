import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/ShopContext";
import CollectionTitle from "./CollectionTitle";
import ProductItem from "./ProductItem";

const NewCollection = () => {
  const { products } = useContext(StoreContext);

  // states for products
  const [latestArrival, setLatestArrival] = useState([]);

  // using useEffects to load out first 10 products
  useEffect(() => {
    setLatestArrival(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      {/* Title for latest Arrival */}
      <CollectionTitle />

      {/* Loading out latest products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 gap-10">
        {latestArrival.map((item, id, image) => (
          <ProductItem key={id} item={item} image={image} />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
