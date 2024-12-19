import { useState, useEffect } from "react";
import image1 from "../image/carousel-1.jpeg";
import image2 from "../image/carousel-2.jpeg";
import image3 from "../image/carousel-3.jpeg";
import image4 from "../image/carousel-4.jpeg";
import image5 from "../image/carousel-5.jpeg";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { TbPoint } from "react-icons/tb";

function Hero() {
  const images = [image1, image2, image3, image4, image5];
  const texts = [
    "Own the streets with our latest streetwear collection. Style that speaks for you.",
    "Step into elegance. Discover dresses made to turn heads.",
    "Everyday comfort, elevated. Shop our casual wear now.",
    "Power up your wardrobe. Suits and formalwear for every occasion.",
    "Complete the look. Explore accessories that redefine your style.",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000); // 5000ms = 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images.length]);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToImage(imageIndex) {
    setCurrentIndex(imageIndex);
  }

  return (
    <div className="relative px-4 py-4 group">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-[400px] md:h-[600px] bg-center bg-cover duration-700 transition-all"
      >
        <div className="flex justify-start p-4 items-end h-full font-spectral text-white ">
          <h1 className=" bg-slate-700 px-6 py-4  md:text-2xl opacity-70 rounded-xl">
            {texts[currentIndex]}
          </h1>
        </div>
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-sm bg-slate-700 rounded-full p-2 text-white cursor-pointer">
        <HiArrowLeft size={10} onClick={prevSlide} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-sm bg-slate-700 rounded-full p-2 text-white cursor-pointer">
        <HiArrowRight size={10} onClick={nextSlide} />
      </div>
      <div className="flex justify-center">
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className="text-2xl cursor-pointer"
            onClick={() => goToImage(imageIndex)}
          >
            <TbPoint />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
