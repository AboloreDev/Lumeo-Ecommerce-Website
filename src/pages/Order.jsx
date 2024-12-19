import { useContext, useState, useEffect } from "react";
import { StoreContext } from "../context/ShopContext";
import OrderDisplay from "../components/OrderDisplay";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import ThankYouModal from "../components/ThankYouModal"; // Import the modal component
import Loader from "../components/Loader"; // Import a Loader component

const Order = () => {
  const { currency, orders, products } = useContext(StoreContext);

  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(true);

  // State for loader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timeout = setTimeout(() => {
      setIsLoading(false); // Set loading to false after data is "loaded"
    }, 2000);

    return () => clearTimeout(timeout); // Cleanup the timeout
  }, []);

  if (isLoading) {
    return <Loader />; // Render the loader while loading
  }

  return (
    <div className="mt-10">
      <ThankYouModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <Link to="/cart">
        <button className="border-4 px-4 py-4 mb-6 font-bold flex items-center gap-4 hover:bg-black hover:text-white">
          <FaArrowLeftLong />
          <p>Back</p>
        </button>
      </Link>

      <div className="uppercase text-2xl mb-6 font-bold">
        Here is your order
      </div>

      {/* Orders */}
      <div>
        {orders.map((order, index) => {
          // Find product details
          const product = products.find((prod) => prod.id === order.id);

          if (!product) return null; // In case product is not found
          return (
            <OrderDisplay
              key={index}
              order={order}
              currency={currency}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Order;
