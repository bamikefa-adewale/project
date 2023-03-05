import Image from "next/image";
import React from "react";
import { CustomButton } from "../Ui/CustomButton";
import image from "../../../public/assests/men.jpg";

export const SectionTwo = () => {
  return (
    <section className="relative lg:p-0 p-4">
      <div className="containers mx-auto grid lg:grid-cols-2 grid-cols-1 lg:h-[600px] gap-6 relative z-[1000]">
        <div className=" justify-center items-center lg:hidden flex">
          <Image src={image} alt="Our Staff" />
        </div>
        <div className="flex justify-center items-center lg:mr-12">
          <div>
            <h2 className="font-semibold lg:text-3xl text-base lg:text-start text-center my-4">
              <span className="text-primary">More </span> Than A Signage{" "}
              <br className="lg:block hidden" /> Company
            </h2>
            <p className="font-normal text-black text-base my-4 text-justify">
              At Goldfire, we uphold your brand image through professional,
              well-designed signage that reflect your business vision and goals.
              With 2 decades worth of experience in helping small and large
              businesses grow, we are your top choice for a signage and branding
              company.
            </p>
            <p className="font-normal text-black text-base my-4 text-justify">
              Creativity and exclusivity are a part of our DNA. We offer fully
              customizable services to provide you with designs that are unique
              to you and your journey. With our client engagement processes, we
              work closely with you at every step of the way to bring your ideas
              to life. Whatever path you decide to take with us, be it signage
              production and installation, branding or simply our consultation
              services, we pledge to add value to the visibility of your brand.
            </p>
            <CustomButton text={"Learn More"} />
          </div>
        </div>
        <div className=" justify-center items-center lg:flex hidden">
          <Image src={image} alt="Our Staff" />
        </div>
      </div>
      <div className=" bg-[#F9F9F9] absolute top-0 left-0 h-full lg:w-[70%] w-full py-4"></div>
    </section>
  );
};
