import { Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-16 py-3.5 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between max-w-full w-[749px] max-md:flex-wrap">
        <div className="flex overflow-hidden justify-center items-start bg-white rounded-lg border border-solid border-zinc-200">
          <Search size={25} color="#666" height={40} />
          <input type="text" className="w-full h-10" />
        </div>
        <div className="flex gap-5 justify-between my-auto text-sm leading-5 text-gray-300">
          <div>Categories</div>
          <div className="flex-auto">Website Builders</div>
        </div>
        <div className="self-center text-sm leading-5 text-gray-300">
          Today's deals
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
