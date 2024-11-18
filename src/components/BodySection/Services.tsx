import React from "react";

const Services = () => {
  return (
    <>
      <div className="overflow-hidden w-full my-14">
        <h1 className="text-3xl text-black text-center w-full my-5 font-bold">
          Our Services
        </h1>
        <div className="flex w-full md:w-[90%] lg:w-[80%] lg:pl-3 justify-between mx-auto flex-wrap gap-6">
          <div className="flex flex-col text-black gap-6">
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> Translation
            </div>
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> Notary
            </div>
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> Property
              Valuation
            </div>
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> Travel and
              Health Insurance
            </div>
          </div>
          <div className="flex flex-col text-black gap-6">
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> All
              Document Services
            </div>
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> All
              Countries Applicaiton Services
            </div>
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> Online form
              Fill Up for Passport
            </div>
            <div className="flex gap-2 text-2xl items-end">
              <span className="text-primary text-3xl">&#9650;</span> And Many
              More ...
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
