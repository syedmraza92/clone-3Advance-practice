"use client";

import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import demo1 from '../../public/assets/demo1.jpeg'
import demo2 from '../../public/assets/demo2.jpeg'
import demo3 from '../../public/assets/demo3.jpeg'
import demo4 from '../../public/assets/demo4.png'
import demo5 from '../../public/assets/demo5.jpeg'
import demo6 from '../../public/assets/demo6.jpeg'
import demo7 from '../../public/assets/demo7.jpeg'
import demo8 from '../../public/assets/demo8.jpeg'
import demo9 from '../../public/assets/demo9.jpeg'
import demo10 from '../../public/assets/demo10.jpeg'
import demo11 from '../../public/assets/demo11.jpeg'


function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="slider-container container relative">
      {/* Left overlay */}
      <div className="absolute left-0 top-0 h-full bg-black opacity-100 w-96 z-10"></div>
      {/* Right overlay */}
      <div className="absolute right-0 top-0 h-full bg-black opacity-100 w-96 z-10"></div>
    <Slider {...settings} className="">
    <div className="p-12 flex justify-center">
        <Image src={demo1} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo2} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo3} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo4} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo5} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo6} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo7} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo8} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo9} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo10} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
      <div className="p-12 flex justify-center">
        <Image src={demo11} alt="picture" className="max-w-full max-h-full rounded-2xl" />
      </div>
    </Slider>
  </div>
  );
}

export default CenterMode;
