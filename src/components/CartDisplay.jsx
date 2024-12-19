import { useContext } from "react";
import { IoTrashBin } from "react-icons/io5";
import { StoreContext } from "../context/ShopContext";

/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
const CartDisplay = ({ cart, size, quantity }) => {
  const { quantityUpdate, currency } = useContext(StoreContext);

  //   deleting and updating quantity of the cart
  function updateItemCartQuantity(e) {
    const value = e?.target?.value;

    if (value === undefined) {
      // Deleting the ite
    } else if (value === "" || value === "0") {
      // Prevent invalid quantity updates
      return;
    } else {
      // Updating quantity
      quantityUpdate(cart.id, size, Number(value));
    }
  }

  function onDeleteItemFromCart() {
    quantityUpdate(cart.id, size, 0); // Remove the item from the cart
  }

  return (
    <div className="py-6 text-stone-900 grid gap-4 space-x-16 md:space-x-4  grid-cols-3 font-semibold items-center border-b border-b-black">
      <div className="flex items-start gap-4">
        {/* cart image */}
        <img className="w-16 md:w-24" src={cart.image[0]} alt="Image" />
        <div>
          {/* Item name */}
          <p>{cart.name}</p>
          <div className="flex items-center gap-4">
            {/* cart price */}
            <p>
              {currency}
              {cart.price}
            </p>
            {/* item-size */}
            <p className="border px-2 border-orange-700">{size}</p>
            {/* quantity incrrement */}
            <p className="">x{quantity}</p>
          </div>
        </div>
      </div>
      {/* Input  quantity*/}
      <div className="w-full md:max-w-28 text-center ">
        <input
          className="w-1/2 md:max-w-28 text-center border border-slate-700 outline-none"
          type="number"
          min={1}
          defaultValue={quantity}
          onChange={updateItemCartQuantity}
        />
      </div>
      {/* delete icon */}
      <div className="w-6 md:w-8 flex items-end justify-end ">
        <IoTrashBin
          className="text-2xl hover:text-red-600"
          onClick={onDeleteItemFromCart}
        />
      </div>
    </div>
  );
};

export default CartDisplay;
