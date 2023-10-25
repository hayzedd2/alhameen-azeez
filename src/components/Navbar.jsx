import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-black">
      <nav className="max-w-[78rem] grid grid-cols-2 mx-auto justify-between items-center gap-3 py-7 bg-black text-white">
        <div className="logo flex ">
          <h1 className="font-josefin font-semibold text-[2.1rem]">HaYz</h1>
        </div>
        <div className="links-2 ">
          <ul className="font-josefin flex items-center justify-between ">
            <li>Portfolio</li>
            <li><a href="#about">About Me</a></li>
            <li>Special Skills</li>
            <li>Arsenal</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
