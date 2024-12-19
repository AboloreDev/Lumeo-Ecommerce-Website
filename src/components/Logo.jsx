import { Link } from "react-router-dom";
import LogoImage from "../image/logo-2.jpeg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-0 cursor-pointer">
      <img src={LogoImage} alt="Logo" className="w-28" />
    </Link>
  );
};

export default Logo;
