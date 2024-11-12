import React from "react";

const navbar = () => {
  const menuItems = ["HOME", "ABOUT", "SERVICES", "BLOGS", "CONTACT"];
  return (
    <>
      <div className="flex justify-around text-black font-bold text-lg w-full">
        {menuItems.map((item) => (
          <span key={item} className="relative group">
            <a
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="group-hover:text-gray-600"
            >
              {item}
            </a>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        ))}
      </div>
    </>
  );
};

export default navbar;
