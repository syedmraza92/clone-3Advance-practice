"use client";

import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <div className="relative" style={{ height: "75vh" }}>
      {/* <!-- Video --> */}
      <div className="absolute inset-0 overflow-hidden h-full">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* <!-- Text container --> */}
      <div className="md:absolute md:-top-40 md:right-60 w-full h-full flex items-center justify-center z-10 flex-col">
        <div className=" space-y-4 md:space-y-7">
          <h2 className="text-white text-2xl md:text-2xl font-bold">
            3Advance is your
          </h2>
          <h1 className="text-white text-4xl md:text-8xl font-bold flex flex-row">
            <TypeAnimation
              sequence={[
                "Product",
                2000,
                "Designer",
                2000,
                "Tech",
                2000,
                "App",
                2000,
              ]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
            />
            <p>_Team</p>
          </h1>
          <h3 className="text-white text-xl md:text-xl ">
            Developing AI Powered Apps & Integrations.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Hero;
