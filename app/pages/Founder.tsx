import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

function Founder() {
  return (
    <div className="text-white flex justify-center items-center  ">
      <div className="max-w-screen-xl">
        <div className="flex justify-end my-4 space-x-3">
          <button className="border-2 border-gray-600 rounded-full px-8 py-2">
            <WestIcon style={{ color: "#ffffff" }} />
          </button>
          <button className="border-2 border-gray-600 rounded-full px-8 py-2">
            <EastIcon style={{ color: "#ffffff" }} />
          </button>
        </div>
        <div className="flex space-x-48 my-10">
          <div className="flex flex-row items-center space-x-2 mx-12">
            <div className="bg-[#2B2F3A] h-40 w-40 rounded-full flex items-center justify-center">
              <p className="text-white p-16 text-2xl">
                Tele<span className="font-bold">tour</span>
              </p>
            </div>
            <div>
              <h1 className="font-bold text-2xl">Ashley</h1>
              <p className="text-gray-500">Founder & CEO Teletour</p>
            </div>
          </div>
          <div className="bg-[#141414] p-8 rounded-xl">
            <p className="text-3xl font-bold leading-relaxed">
              "They are incredibly responsive, and more than anything, very
              attentive. They listen to what we’re saying as opposed to telling
              us what they think we want to hear. Genuinely, there’s nothing I
              would change about 3Advance." ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
