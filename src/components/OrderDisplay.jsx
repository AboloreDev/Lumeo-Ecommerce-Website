/* eslint-disable react/prop-types */
const OrderDisplay = ({ order, currency, product }) => {
  // destructuring the order
  const { size, name, quantity } = order;

  //   setting the date;
  const today = new Date();

  // Get the individual components
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(today.getDate()).padStart(2, "0");

  // Format the date (e.g., YYYY-MM-DD)
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className="flex flex-col md:flex-row justify-between border-b-2 border-gray-400 py-4">
      <div className="items-start flex gap-4">
        {/* order image */}
        <div>
          <img className="w-20" src={product.image[0]} alt="Order Image" />
        </div>
        <div>
          <p className="font-medium text-xl">{name}</p>
          <div className="flex items-center gap-4 text-base text-gray-500">
            <p className="text-sm">
              {currency} {product.price}
            </p>
            <p>Quantity: {quantity}</p>
            <p>Size : {size}</p>
          </div>
          <p className="mt-2">
            Date: <span>{formattedDate}</span>
          </p>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-between font-bold ">
        <div className="flex items-center gap-2 ">
          <p className="min-w-3 h-3 rounded-full bg-green-500"></p>
          <p className="">Ready to Ship</p>
        </div>

        {/* Track order button */}
        <div className="items-center justify-center text-center flex ">
          <button className=" px-4 py-2 bg-black text-white font-semibold hover:bg-slate-500">
            Track Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDisplay;
