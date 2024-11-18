import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-4 bg-white">
        <div className="flex">
          <Image
            className="w-[5rem] h-[5rem] object-cover overflow-hidden"
            src="/images/danpheinternationallogo.jpg"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold underline text-black">
              Quick link 1
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-xl font-bold underline text-black">
              Quick link 2
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-xl font-bold underline text-black">
              Quick link 3
            </h2>
          </div>
          <div className="flex">
            <h2 className="text-xl font-bold underline text-black">
              Quick link 4
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
