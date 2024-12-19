import { Link } from "react-router-dom";
import ChooseUs from "../components/ChooseUs";
import AboutImage from "../image/carousel-2.jpeg";
import { FaArrowLeftLong } from "react-icons/fa6";

function About() {
  return (
    <div className="mt-10">
      <Link to="/">
        <button className="border-4 px-4 py-4 font-bold flex items-center gap-4 hover:bg-black hover:text-white">
          <FaArrowLeftLong />
          <p>Back to Home</p>
        </button>
      </Link>
      {/* Title */}
      <div className="uppercase text-center font-bold text-2xl">
        About <span className="text-gray-600">Us</span>
      </div>

      {/* About us details */}

      <div className="flex flex-col md:flex-row space-y-8 space-x-8 mt-10 ">
        {/* About image */}
        <img
          src={AboutImage}
          alt="About Image"
          className=" rounded-xl w-full md:w-1/2"
        />
        {/* About Text */}
        <div className="flex flex-col gap-6 text-xl text-slate-500">
          <p>
            Lumeo is more than a brand; its a commitment to excellence,
            innovation, and customer satisfaction. We believe in creating
            products that not only meet your needs but inspire confidence and
            elevate your everyday experiences. Our journey began with a simple
            idea: to deliver quality solutions with style and functionality at
            their core.
          </p>
          <p>
            Driven by a passion for sustainability and thoughtful design, we
            strive to make a positive impact—both in the lives of our customers
            and the world around us. At Lumeo, every product tells a story of
            innovation, care, and craftsmanship.
          </p>
          <p className="font-bold text-black">Our Mission</p>
          <p>
            Join us as we continue to build a community of trust, style, and
            purpose. With Lumeo, you’re not just choosing a product; you’re
            choosing a partner for life.
          </p>
        </div>
      </div>

      {/* WHy choose us */}
      <ChooseUs />
    </div>
  );
}

export default About;
