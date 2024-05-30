import Image from "next/image";
import logo from "../../public/assets/icons8-google-wallet-64.svg";
import { Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <div className="bg-[#0D0D0D] text-white flex items-center justify-between py-8">
      <div className="flex flex-row space-x-3 mx-5">
        <div className="bg-[#181818] p-2 rounded-full">
          <YouTube />
          </div>
          <div className="bg-[#181818] p-2 rounded-full">
            <LinkedIn />
          </div>
          <div className="bg-[#181818] p-2 rounded-full">
            <Instagram />
          </div>
          <div className="bg-[#181818] p-2 rounded-full">
            <Twitter />
          </div>
      </div>

      <div className="flex items-center space-x-6 mx-5">
        <div className="flex space-x-3">
          <p className="font-bold">apps@3advance.com</p>
          <p className="font-bold">202.709.3238</p>
        </div>
        <Image src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
