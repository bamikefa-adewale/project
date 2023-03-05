import { HeadComponent } from "@/components/layouts/HeadComponent";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <HeadComponent
        title={
          "Signage Company In Nigeria - Goldfire Nigeria Limited | About Us Page"
        }
        content={
          "We are the leading branding and signage company in Nigeria. We design, manufacture, install and maintain signage and branding all over Nigeria"
        }
      />
      <main>
        <h2>About Us</h2>
      </main>
    </>
  );
};

export default AboutUs;
