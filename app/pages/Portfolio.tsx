import Image from "next/image";
import picture1 from "../../public/assets/soccer-hero.jpeg";
import Carousal from "../components/Carousal";

function Portfolio() {
  return (
    <div className="flex justify-center">
      <Carousal />
    </div>
  );
}

export default Portfolio;
