import React from "react";

export const CustomButton = ({ text }) => {
  return (
    <button className="py-3 px-5 bg-primary rounded-sm font-normal text-white text-sm shw hover:bg-black transform  transition-all duration-200 my-4">
      {text}
    </button>
  );
};
