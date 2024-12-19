import { useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal";
import PaymentMethod from "../components/PaymentMethod";

const PlaceOrder = () => {
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();
    navigate("/orders");
  }
  return (
    <form
      onSubmit={onSubmitForm}
      className="flex flex-col justify-between md:flex-row gap-4 pt-5 min-h-screen"
    >
      {/* Text Left side */}
      <div className="flex flex-col gap-4 w-full md:w-1/2">
        <div className="text-xl my-5 uppercase">User Delivery Info</div>
        {/* Form details */}
        <div className="flex flex-col space-y-6">
          <input
            className="border border-gray-500 px-4 py-2"
            type="text"
            placeholder="First Name..."
            required
          />
          <input
            className="border border-gray-500 px-4 py-2"
            type="text"
            placeholder="Last Name..."
            required
          />
          <input
            className="border border-gray-500 px-4 py-2"
            type="number"
            placeholder="Phone number..."
            required
          />
          <input
            className="border border-gray-500 px-4 py-2"
            type="text"
            placeholder="Address..."
            required
          />
          <div className="flex flex-col md:flex-row gap-4">
            <input
              className="border border-gray-500 px-4 py-2"
              type="text"
              placeholder="City..."
              required
            />
            <input
              className="border border-gray-500 px-4 py-2"
              type="text"
              placeholder="State..."
              required
            />
            <input
              className="border border-gray-500 px-4 py-2"
              type="number"
              placeholder="ZIP Code..."
              required
            />
          </div>
          <input
            className="border border-gray-500 px-4 py-2"
            type="text"
            placeholder="Country..."
            required
          />
        </div>
      </div>

      {/* Right hand side */}
      <div className="mt-10">
        {/* displaying the cart total */}
        <div className="mt-10 min-w-96">
          <CartTotal />
        </div>
        <PaymentMethod />
        {/* place order button  */}
        <div className="w-full text-end mt-6">
          <button
            // type="submit"
            className="uppercase bg-black text-white px-6 py-4 text-xm font-bold hover:bg-gray-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
