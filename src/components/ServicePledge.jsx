import ServicePledgeTitle from "./ServicePledgeTitle";
import { GrStatusGood } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
const ServicePledge = () => {
  return (
    <div className="space-y-8">
      <ServicePledgeTitle />
      <div className="flex flex-col md:flex-row text-center md:justify-between items-center space-y-10 space-x-6 ">
        <div className="space-y-2 flex justify-center items-center flex-col">
          <GrStatusGood className="text-5xl" />
          <h1 className="font-bold text-2xl">Commitment to Quality</h1>
          <p className="text-xl text-gray-700">
            At Lumeo, we pledge to deliver only the highest quality products and
            services, ensuring excellence in every interaction.
          </p>
        </div>
        <div className="space-y-2 flex justify-center items-center flex-col">
          <RiCustomerService2Fill className="text-5xl" />
          <h1 className="font-bold text-2xl">Customer-Centered Approach</h1>
          <p className="text-xl text-gray-700">
            Your satisfaction is our priority. We are dedicated to understanding
            and exceeding your expectations at every step.
          </p>
        </div>
        <div className="space-y-2 flex justify-center items-center flex-col">
          <GiBrain className="text-5xl" />
          <h1 className="font-bold text-2xl">Sustainability and Innovation</h1>
          <p className="text-xl text-gray-700">
            We are committed to sustainable practices and innovative solutions
            that create value for you and our planet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePledge;
