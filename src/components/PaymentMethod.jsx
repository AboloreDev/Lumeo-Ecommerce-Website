import { useState } from "react";
import { FaStripe } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

function PaymentMethod() {
  // state
  const [paymentMethod, setPaymentMethod] = useState("cash-payment");

  return (
    /* displaying payment method */

    <div className="mt-10">
      <div className="font-bold uppercase text-2xl">Payment Method</div>

      <div className="flex gap-3 flex-col md:flex-row">
        <div
          onClick={() => setPaymentMethod("stripe")}
          className="flex items-center gap-4 border p-4 cursor-pointer"
        >
          <p
            className={`min-w-4 h-4 border rounded-full ${
              paymentMethod === "stripe" ? "bg-green-500" : ""
            }`}
          ></p>
          <FaStripe className="text-6xl h-4 mx-4" />
        </div>
        <div
          onClick={() => setPaymentMethod("razor-pay")}
          className="flex items-center gap-4 border p-4 cursor-pointer"
        >
          <p
            className={`min-w-4 h-4 border rounded-full ${
              paymentMethod === "razor-pay" ? "bg-green-500" : ""
            }`}
          ></p>
          <SiRazorpay className="text-2xl h-4 mx-4" />
        </div>
        <div
          onClick={() => setPaymentMethod("cash-payment")}
          className="flex items-center gap-4 border p-4 cursor-pointer"
        >
          <p
            className={`min-w-4 h-4 border rounded-full ${
              paymentMethod === "cash-payment" ? "bg-green-500" : ""
            }`}
          ></p>
          <p>Cash Payment</p>
        </div>
      </div>
    </div>
  );
}

export default PaymentMethod;
