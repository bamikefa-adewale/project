import { routes } from "@/constant/Navlink";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/assests/logo1.png";

const Navbar = ({ active }) => {
  return (
    <header className={`w-full header  text-white fixed top-0 left-0 z-[2000]`}>
      <nav className="containers mx-auto flex justify-between items-center py-3 lg:px-0 px-4">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="A'Lor Consults Limited"
            height={50}
            width={50}
          />
        </Link>
        <ul className="gap-4 lg:flex hidden">
          {routes.map((route) => (
            <li
              key={route.link}
              className={`group ${
                route.name === active ? "border-primary border-b" : ""
              } `}
            >
              <Link
                href={route.link}
                className={`group-hover:border-b group-hover:border-primary`}
              >
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
