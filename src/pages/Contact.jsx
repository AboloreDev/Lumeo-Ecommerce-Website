import NewsLetter from "../components/NewsLetter";
import image from "../image/carousel-2.jpeg";

function Contact() {
  return (
    <div className="mt-10">
      <div className="text-center text-2xl uppercase font-bold">
        <h1 className="text-gray-400">
          Contact <span className="text-black">Us</span>
        </h1>
      </div>

      {/* details */}
      <div className="flex flex-col-reverse md:flex-row gap-6 items-center mt-10">
        <div className="w-1/2">
          <img src={image} alt="Contact Image" />
        </div>

        <div className="flex flex-col space-y-6 items-start justify-center">
          <h1 className="font-bold text-xl">Our Store</h1>
          <p>54709 Willms Station Suite 350, Washington, USA</p>

          <p>Tel:07054439826</p>

          <p>Learn more about our teams and job openings.</p>

          <button className=" border px-6 py-4 ">Explore</button>
        </div>
      </div>

      <NewsLetter />
    </div>
  );
}

export default Contact;
