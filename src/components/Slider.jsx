import React, { useState, useEffect } from "react";
import hero from "../../public/assests/desktop/image-hero.jpg";
import Navbar from "./layouts/Navbar";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/mobinet/image/upload/v1677753171/image-hero_wofebx.jpg",
    "https://res.cloudinary.com/mobinet/image/upload/v1677753914/SeguraPay2/filipe-marques-pAoOSyIHoNA-unsplash_mpslyb.jpg",
    "https://res.cloudinary.com/mobinet/image/upload/v1677753171/image-hero_wofebx.jpg",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000); // set the interval time for image change

    return () => clearTimeout(timer);
  }, [activeIndex]);
  return (
    <main
      className="carousel"
      style={{
        backgroundImage: `url(${images[activeIndex]})`,
        height: "600px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar active={"Home"} />
    </main>
  );
};

export default Slider;
