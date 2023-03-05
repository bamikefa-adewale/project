import React from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

export const SectionOne = () => {
  return (
    <section className="mx-auto containers lg:py-12 py-4">
      <div className="flex justify-center items-center">
        <div className="text-center lg:w-1/2 w-full p-4">
          <h4 className="text-primary font-medium lg:text-xs text-sm my-3">
            AWARD WINNING SIGNAGE COMPANY
          </h4>
          <h2 className="font-semibold text-3xl text-black my-4">
            Bring Your Brand To Life With Nigeria’s Foremost Signage Company
          </h2>
          <p className="font-normal text-base ">
            We are Goldfire, an award-winning and leading branding and signage
            company based in Lagos, Nigeria. At Goldfire Nigeria Limited, we
            have earned a reputation for dependability and excellence in every
            aspect of our trade.
          </p>
          <div className="flex justify-center items-center my-4">
            <RxDoubleArrowDown
              fontSize={50}
              className="text-primary font-bold"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
