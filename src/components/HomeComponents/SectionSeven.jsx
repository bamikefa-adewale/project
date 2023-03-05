import { responsive } from "@/constant/responsiveSlider";
import { testimonials } from "@/constant/testimonials";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import stars from "../../../public/assests/star.svg";
export const SectionSeven = () => {
  return (
    <section className="testimonial lg:py-12 py-6 lg:px-0 px-4">
      <div className="containers mx-auto">
        <h4 className="font-semibold text-base text-white my-3 lg:text-start text-center">
          TESTIMONIALS
        </h4>
        <p className="font-medium lg:text-4xl lg:leading-[48px] text-base text-white lg:text-start text-center">
          We are very fortunate to have formed{" "}
          <span className="bg-primary px-4">excellent partnerships</span>,
          relationships and true friendships with many of our clients. Here’s a
          few words from some of our esteemed clients.
        </p>
        <div className="py-6">
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            transitionDuration={500}
          >
            {testimonials.map((testimonial) => (
              <div
                className="mx-2 p-9 bg-white group item rounded-sm"
                key={testimonial.id}
              >
                <div className="flex gap-1 my-4">
                  <Image src={stars} alt="Stars" width={20} height={20} />
                  <Image src={stars} alt="Stars" width={20} height={20} />
                  <Image src={stars} alt="Stars" width={20} height={20} />
                  <Image src={stars} alt="Stars" width={20} height={20} />
                  <Image src={stars} alt="Stars" width={20} height={20} />
                </div>
                <p className="font-medium text-sm text-black">
                  {testimonial.title}
                </p>
                <div className="my-4 font-normal text-sm text-black">
                  <p className="my-1">{testimonial.name}</p>
                  <span>{testimonial.position}</span>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
