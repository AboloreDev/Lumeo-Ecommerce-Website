import { Link } from "react-router-dom";
import LogoImage from "../image/logo-2.jpeg";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-10 mt-20">
        {/* Logo */}
        <div className="text-center flex flex-col justify-center items-center ">
          <img src={LogoImage} alt="Logo" className="w-40" />
          <div>
            <p className="text-xl text-center">
              Crafted with care to provide you the best experience.
              <span className="flex gap-2 items-center justify-center">
                Follow us on:
                <Link to="https://www.x.com/abolorreeeee">
                  <FaTwitter />
                </Link>
                <Link to="https://www.github.com/aboloreDev">
                  <FaGithub />
                </Link>
              </span>
            </p>
          </div>
        </div>
        {/* Nav Links */}
        <ul className="uppercase space-y-2 flex flex-col items-center">
          <div className="font-bold text-2xl">Company</div>
          <li className="text-gray-600">Home</li>
          <li className="text-gray-600">Collection</li>
          <li className="text-gray-600">Contact</li>
          <li className="text-gray-600">About Us</li>
        </ul>
        {/* contact */}
        <div className="uppercase text-center">
          <h1 className="text-xl font-bold">Stay Connected</h1>
          <p>+234 7054439826</p>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
