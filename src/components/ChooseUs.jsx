import NewsLetter from "./NewsLetter";

const ChooseUs = () => {
  return (
    <div className="mt-20 md:mt-10">
      {/* Choose us text */}
      <div className="font-bold text-2xl uppercase">
        Why Choose <span className="text-gray-500 font-bold">Us</span>
      </div>

      {/* Choose us box */}
      <div className="grid grid-cols-1 md:grid-cols-3 mt-10 ">
        <div className="flex flex-col border border-gray-300 rounded-xl px-6 py-6 space-y-4">
          <h1 className="font-bold text-2xl">Unmatched Quality</h1>
          <p className="text-lg text-gray-500">
            Our products are crafted with the highest standards, combining
            durability, style, and functionality to ensure you get the best
            every time.
          </p>
        </div>
        <div className="flex flex-col border border-gray-300 rounded-xl px-6 py-6 space-y-4">
          <h1 className="font-bold text-2xl">Customer-Centric Approach</h1>
          <p className="text-lg text-gray-500">
            Our satisfaction is our priority. We listen, innovate, and go the
            extra mile to deliver exceptional service and solutions tailored to
            your needs.
          </p>
        </div>
        <div className="flex flex-col border border-gray-300 rounded-xl px-6 py-6 space-y-4">
          <h1 className="font-bold text-2xl">Sustainability and Innovation</h1>
          <p className="text-lg text-gray-500">
            We are committed to creating sustainable products that make a
            difference, using innovative practices to positively impact you and
            the planet.
          </p>
        </div>
      </div>

      {/* NewsLetter */}
      <NewsLetter />
    </div>
  );
};

export default ChooseUs;
