import { responsive } from "@/constant/responsiveSlider";
import { rowImages } from "@/constant/SliderImages";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";

export const SectionFour = () => {
  return (
    <section className="lg:py-12 py-6 bg-primary lg:px-0 px-4">
      <div className="containers mx-auto">
        <p className="text-white font-normal lg:text-sm my-4 lg:text-start text-center text-base">
          OUR WORK
        </p>
        <p className="font-semibold lg:text-[40px] lg:leading-[48px] text-white lg:w-[700px] w-full lg:text-start text-center">
          Eye-catching signs that convey your message and make the best
          first-impression!
        </p>
      </div>
      <div className="py-12">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1000}
          transitionDuration={500}
        >
          {rowImages.map((img, i) => (
            <div key={i} className="mx-2 p-1 bg-white group item">
              <Image
                src={img}
                alt="slider"
                className="group-hover:scale-110 duration-200 w-full"
              />
              <div className="absolute top-0 left-0 hover:bg-black w-full h-full hover:opacity-40 cursor-pointer"></div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
