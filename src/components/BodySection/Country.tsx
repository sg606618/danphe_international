"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Country {
  name: {
    common: string;
  };
  cca2: string;
  flags: {
    svg: string;
  };
}

const Country: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/region/europe"
        );
        const data: Country[] = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <div className="overflow-hidden w-full my-14">
      <h1 className="text-3xl text-black text-center w-full my-5 font-bold">
        Service Countries
      </h1>
      <div className="flex items-center space-x-4 animate-scroll">
        {countries.map((country) => (
          <a
            key={country.cca2}
            href="#"
            // href={`https://en.wikipedia.org/wiki/${country.name.common}`} Uncomment if needed
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-300"
          >
            <div className="flex items-center space-x-4 animate-scroll">
              <div className="w-32 h-32 overflow-hidden">
                <Image
                  src={country.flags.svg}
                  alt={`${country.name.common} Flag`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Country;
