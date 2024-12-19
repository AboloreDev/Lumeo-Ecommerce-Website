import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/ShopContext";
import CartDisplay from "../components/CartDisplay";
import CartTotal from "../components/CartTotal";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Loader from "../components/Loader"; // Import the Loader component

const Cart = () => {
  const { products, cartItems, setOrders } = useContext(StoreContext);

  // State array to store cart data
  const [cartData, setCartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  // use navigate hook
  const navigate = useNavigate();

  function onHandleChecoutClick() {
    setOrders(cartData);
    navigate("/order-now");
  }

  useEffect(() => {
    const tempData = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    // Simulate loading (replace with actual loading if necessary)
    setTimeout(() => {
      setCartData(tempData);
      setIsLoading(false); // Set loading to false when cart data is ready
    }, 1000); // Simulate a 1-second load
  }, [cartItems]);

  return (
    <div className="mt-10">
      {/* Back Button */}
      <Link to="/collection">
        <button className="border-4 px-4 py-4 font-bold flex items-center gap-4 hover:bg-black hover:text-white mb-10">
          <FaArrowLeftLong />
          <p>Back</p>
        </button>
      </Link>

      {/* Loader */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (
        <>
          {/* Cart Title */}
          <div className="font-bold text-left">
            Your <span className="text-gray-500">Cart</span>
          </div>

          {/* Conditional Message: No Items in Cart */}
          {cartData.length === 0 ? (
            <div className="text-center text-gray-500 mt-5">
              No items in cart. Start shopping!
            </div>
          ) : (
            <div>
              {/* Products Display */}
              {cartData.map((item, index) => {
                const productsData = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <CartDisplay
                    cart={productsData}
                    key={index}
                    size={item.size}
                    quantity={item.quantity}
                  />
                );
              })}
            </div>
          )}

          {/* Displaying the Cart Total */}
          {cartData.length > 0 && (
            <div className="flex justify-end my-20">
              <div className="w-full md:w-[450px]">
                <CartTotal cartData={cartData} />
                <div className="w-full text-end mt-6">
                  <button
                    onClick={onHandleChecoutClick}
                    className="bg-black text-white hover:bg-slate-500 font-semibold px-6 py-2 uppercase"
                  >
                    Proceed to checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
