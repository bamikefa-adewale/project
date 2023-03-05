import { SectionEight } from "@/components/HomeComponents/SectionEight";
import { SectionFive } from "@/components/HomeComponents/SectionFive";
import { SectionFour } from "@/components/HomeComponents/SectionFour";
import { SectionOne } from "@/components/HomeComponents/SectionOne";
import { SectionSeven } from "@/components/HomeComponents/SectionSeven";
import { SectionSix } from "@/components/HomeComponents/SectionSix";
import { SectionThree } from "@/components/HomeComponents/SectionThree";
import { SectionTwo } from "@/components/HomeComponents/SectionTwo";
import { HeadComponent } from "@/components/layouts/HeadComponent";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <HeadComponent
        title={
          "Signage Company In Nigeria - Goldfire Nigeria Limited | Home Page"
        }
        content={
          "We are the leading branding and signage company in Nigeria. We design, manufacture, install and maintain signage and branding all over Nigeria"
        }
      />
      {/* <!-- Hero Section --> */}
      <Slider />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </>
  );
}
