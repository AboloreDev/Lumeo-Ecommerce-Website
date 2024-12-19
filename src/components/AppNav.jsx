import Logo from "./Logo";
import NavIcons from "./NavIcons";
import NavigationLinks from "./NavigationLinks";

const AppNav = () => {
  return (
    <div className="flex justify-between items-center ">
      {/* Logo Components */}
      <Logo />
      {/* Navigation Links */}
      <NavigationLinks />
      {/* NavIcons */}
      <NavIcons />
    </div>
  );
};

export default AppNav;
