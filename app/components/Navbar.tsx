import Image from "next/image";
import Button from "./Button";
import SmallMenuButton from "./smallMenuButton";
import logo from "../../public/assets/icons8-google-wallet-64.svg";

const Navbar = () => {

  const navItems = ["✨AI", "Services", "Portfolio", "Podcasts", "About"];


  return (
    <nav className="w-full z-10 flex justify-between items-center p-2 bg-black">
      <div className="mx-5">
        <Image src={logo} alt="logo" />
      </div>

      <div className="hidden lg:flex flex-row items-center space-x-8 font-bold">
        {navItems.map((item, index) => (
          <a key={index} href={`#${item.toLowerCase().replace(/ /g, "-")}`} className="text-white hover:text-gray-400">
            {item}
          </a>
        ))}
      </div>

      <div className="flex flex-row items-center space-x-2 mx-5">
        <Button text="Contact Us" />
        <SmallMenuButton/>
      </div>
    </nav>
  );
};

export default Navbar;
