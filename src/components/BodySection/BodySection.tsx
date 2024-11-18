import React from "react";
import Country from "./Country";
import Services from "./Services";
import Connect from "./Connect";
import Map from "./Map";

const BodySection = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="flex flex-col mx-auto max-w-[1366px]">
          <Country />
          <Services />
          <Connect />
          <Map />
        </div>
      </div>
    </>
  );
};

export default BodySection;
