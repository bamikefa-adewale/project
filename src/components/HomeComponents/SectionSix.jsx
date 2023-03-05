import { lists } from "@/constant/cards";
import React from "react";

export const SectionSix = () => {
  return (
    <section className="containers mx-auto grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-12 py-6 lg:p-0 px-4">
      {lists.map((list) => (
        <div
          className={`p-9 shw  cursor-pointer hover:-translate-y-2 transition ease-in-out duration-200 ${
            list.active
              ? "bg-white text-black hover:text-black"
              : "bg-primary hover:bg-white hover:text-black text-white"
          } `}
          key={list.id}
        >
          <h2
            className={`font-medium text-3xl my-4 ${
              list.active ? " text-primary hover:text-black" : ""
            }`}
          >
            {list.title}
          </h2>
          <p>{list.content}</p>
        </div>
      ))}
    </section>
  );
};
