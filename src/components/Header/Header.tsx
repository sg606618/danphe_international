"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "./Navbar";

const header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="w-full bg-[white] px-2 py-3">
        <div className="w-100 justify-between flex gap-3 max-w-[1366px] mx-auto">
          <Image
            className="w-[5rem]"
            src="/images/danpheinternationallogo.jpg"
            alt="Danphe International Logo"
            priority
            width={200}
            height={200}
          />
          <div className="flex flex-col w-[100%] items-end justify-around">
            <div className="flex gap-3 text-primary font-bold w-[fit-content]">
              <p>
                <a href="mailto: danphe2022@gmail.com">danphe2022@gmail.com</a>
              </p>
              <p>
                <a href="tel: 9841661139">9841661139</a>
              </p>
            </div>
            {/* <hr className="w-full h-[1px] bg-secondary border-none my-2" /> */}
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

export default header;
