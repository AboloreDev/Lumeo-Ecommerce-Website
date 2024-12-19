/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(StoreContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productDuplicate = products.slice();

      productDuplicate = productDuplicate.filter(
        (item) => category === item.category
      );
      productDuplicate = productDuplicate.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productDuplicate.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="mt-10">
      <div className="text-center text-3xl ">Related Products</div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-y-6">
        {related.map((item, index) => (
          <ProductItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
