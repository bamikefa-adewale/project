import { clients } from "@/constant/clients";
import { responsive } from "@/constant/responsiveSlider";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import ob from "../../../public/assests/11.jpg";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { CustomButton } from "../Ui/CustomButton";
export const SectionEight = () => {
  console.log(ob);
  return (
    <section className="containers mx-auto py-12 lg:px-0 px-4">
      <h2 className="font-medium text-primary text-base lg:text-start text-center">
        NOW TRENDING
      </h2>
      <p className="text-black font-semibold lg:text-3xl text-base lg:text-start text-center my-3">
        Explore Recently Completed Projects By A'Lor Consults Limited
      </p>
      <div className="py-4">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          transitionDuration={500}
        >
          {clients.map((client) => (
            <div key={client.id} className="mx-4 relative rounded-sm group">
              <Image
                src={client.thumb}
                alt="hello"
                className="group-hover:scale-110 duration-200 w-full"
              />
              <div className="absolute top-0 left-0 p-4 header w-full h-full flex justify-end items-end text-gray-100 flex-col cursor-pointer group-hover:w-full">
                <Link href={`/${client.slug}`}>
                  <p className="font-semibold text-xl leading-[28px]">
                    {client.signage}
                  </p>
                  <p className="my-3 font-normal text-base">
                    {client.content.substring(0, 80)}...
                  </p>
                  <Link
                    href={`/${client.slug}`}
                    className="flex items-center hover:text-primary hover:font-semibold"
                  >
                    View More Project{" "}
                    <BsArrowRight fontSize={20} className="ml-3" />
                  </Link>
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="flex justify-center items-center">
          <CustomButton text={"View More Projects"} />
        </div>
      </div>
    </section>
  );
};
