import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroBanner = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto relative z-0">
      <Carousel autoPlay={true} showStatus={false} showIndicators={false} infiniteLoop={true} showThumbs={false} showArrows={false}>
        <div>
          <img src="https://wallpapercave.com/wp/wp2183986.jpg" alt="" className="aspect-[16/10] lg:h-[70vh] md:aspect-auto object-cover" />
          <p className="absolute w-[30%] bg-secondary text-secondary-content p-4 left-0 bottom-12">Shop Now</p>
        </div>
        <div>
          <img src="https://www.kindpng.com/picc/m/1-18288_nike-shoes-hd-png-transparent-png.png"  alt="" className="aspect-[16/10] lg:h-[70vh] md:aspect-auto object-cover" />
          <p className="absolute w-[30%] bg-secondary text-secondary-content p-4 left-0 bottom-12">Shop Now</p>
        </div>
        <div>
          <img src="https://images4.alphacoders.com/108/1085299.jpg"  alt="" className="aspect-[16/10] lg:h-[70vh] md:aspect-auto object-cover" />
          <p className="absolute w-[30%] bg-secondary text-secondary-content p-4 left-0 bottom-12">Shop Now</p>
        </div>
      </Carousel>
      <div className="heading py-8 md:px-5 px-2">
        <h1 className="text-3xl text-center pb-2">Cushioning for your miles</h1>
        <p className="text-lg lg:max-w-[45vw] text-center mx-auto">A lightweight Nike ZoomX midsole is combined with increased stack hide to help provide cushioning during extended streteches of running</p>
      </div>
    </div>
  );
};

export default HeroBanner;
