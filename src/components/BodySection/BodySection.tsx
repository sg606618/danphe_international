import React from "react";
import Country from "./Country";
import Services from "./Services";
import Connect from "./Connect";

const BodySection = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex flex-col mx-auto max-w-[1366px]">
          <Country />
          <Services />
          <Connect />
        </div>
      </div>
    </>
  );
};

export default BodySection;
