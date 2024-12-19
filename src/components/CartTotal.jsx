/* eslint-disable react/prop-types */
import { useContext } from "react";
import { StoreContext } from "../context/ShopContext";

const CartTotal = () => {
  const { getTotalCartAmount, currency, deliveryFee } =
    useContext(StoreContext);

  const totalPrice = getTotalCartAmount() + deliveryFee;

  return (
    <div className="w-full">
      <div className="text-2xl font-bold">
        <p>
          Cart <span className="text-gray-500">Total</span>{" "}
        </p>
      </div>

      {/*  */}

      <div className="flex flex-col space-y-4 mt-6">
        <div className="flex justify-between border-b">
          <p>SubTotal</p>
          <p>
            {currency} {getTotalCartAmount()}.00
          </p>
        </div>

        <div className="flex justify-between border-b">
          <p>Shipping Fee</p>
          <p>
            {currency} {deliveryFee}.00
          </p>
        </div>

        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>
            {currency} {totalPrice}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
