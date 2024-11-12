import React from "react";
import Country from "./Country";
import Services from "./Services";

const BodySection = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex mx-auto max-w-[1366px]">
          <Country />
          <Services />
        </div>
      </div>
    </>
  );
};

export default BodySection;
