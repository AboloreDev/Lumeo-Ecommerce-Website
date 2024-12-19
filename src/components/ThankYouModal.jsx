/* eslint-disable react/prop-types */

import { FaCheckCircle } from "react-icons/fa";

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render if modal is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-1/3 p-8 shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Icon */}
        <div className="flex flex-col items-center text-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">Thank You for Your Order!</h2>
          <p className="text-gray-600">
            Your order has been placed successfully. You can track it from the
            orders page or continue shopping.
          </p>

          {/* Actions */}
          <div className="mt-6">
            <button
              className="bg-black text-white hover:bg-gray-800 px-6 py-2 rounded-md mr-2"
              onClick={onClose}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;
