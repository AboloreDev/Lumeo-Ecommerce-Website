import { Link, NavLink, useParams } from "react-router-dom";
import { StoreContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import ProductDisplay from "../components/ProductDisplay";
import RelatedProducts from "../components/RelatedProducts";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from "../components/Loader";

const Product = () => {
  const { productId } = useParams();

  const { products, productsData, setProductsData } = useContext(StoreContext);

  // State for image
  const [images, setImages] = useState("");
  const [isLoading, setIsLoading] = useState(true); // State for loading

  const fetchProducts = async () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      const product = products.find((item) => item.id === productId);
      if (product) {
        setProductsData(product);
        setImages(product.image[0]);
      }
      setIsLoading(false); // Stop loading after 3 seconds
    }, 3000); // Timeout for 3 seconds
  };

  useEffect(() => {
    fetchProducts();
  }, [productId]);

  if (isLoading) {
    return <Loader />; // Show a loading message
  }

  return productsData ? (
    <div className="mt-10 px-4 ">
      <Link to="/collection">
        <button className="border-4 px-4 py-4 mb-6 font-bold flex items-center gap-4 hover:bg-black hover:text-white">
          <FaArrowLeftLong />
          <p>Back </p>
        </button>
      </Link>
      <div className="flex gap-12 md:gap-12 flex-col md:flex-row">
        {/* Sidebar with smaller images */}
        <div className="flex-1 flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex md:flex-col overflow-x-auto md:overflow-y-scroll space-x-6 md:justify-normal md:w-[19%] w-full">
            {productsData.image.map((image, index) => (
              <img
                onClick={() => setImages(image)}
                src={image}
                alt="Product Image"
                key={index}
                className="cursor-pointer w-[24%] md:w-full md:mb-3 flex-shrink-0"
              />
            ))}
          </div>
          {/* Main image */}
          <div className="w-full md:w-[80%]">
            <img src={images} className="w-full h-auto " />
          </div>

          {/* Product data */}
        </div>
        {/* Main product display */}
        <div className="flex-1">
          <ProductDisplay product={productsData} key={productsData.id} />
        </div>
      </div>

      {/* Reviews section */}

      <ul className="flex  mt-10">
        <li className="border border-black px-4 py-2">
          {" "}
          <NavLink>Description</NavLink>
        </li>
        <li className="border border-black px-4 py-2">
          <NavLink>Reviews</NavLink>
        </li>
      </ul>
      <div className="flex flex-col border border-slate-500 px-4 py-2">
        <p>
          The e-commerce website is a feature-rich, user-friendly platform
          designed to deliver a seamless online shopping experience for
          customers while providing robust management tools for store owners.
          Built with a modern and responsive design, the website caters to a
          wide variety of product categories, enabling businesses to sell
          everything from clothing, electronics, and home decor to beauty
          products, groceries, and more.
        </p>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <p>Product not found.</p>
  );
};

export default Product;
