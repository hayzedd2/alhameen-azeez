import React from "react";
import { MdSpeed } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";
import man from "../images/pngwing.com.png";

const About = () => {
  return (
    <section id="about" className="py-10">
      <div className="arsenal max-w-[78rem] mx-auto flex items-center  justify-center md:items-end  py-10 md:flex-wrap  flex-wrap gap-10 md:gap-10 lg:gap-0">
        <div className="flex flex-col items-center md:items-center lg:items-start gap-3 basis-[100%] md:basis-[100%] lg:basis-[50%] md:text-left text-center">
          <div className=" bg-[#E5E5E5] flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-[50%] mb-8 ">
            <img src={man} alt="" className="rounded-[50%] bg-[#E5E5E5]" />
          </div>
          <div className="skills flex md:gap-8 gap-4 text-center md:text-left md:justify-start md:items-start items-center justify-center">
            <div className="flex flex-col gap-4 bg-[#E7E7E7] items-center justify-center rounded-xl md:px-5 px-4 py-4">
              <div className="p-2 rounded-[50%] object-contain md:w-14 md:h-14 w-12 h-12 bg-[#D1D1D1] flex items-center justify-center">
                <MdSpeed className="text-[1.45rem] md:text-[1.65rem]" />
              </div>
              <div className="px-3 rounded-xl py-1 bg-[#D1D1D1]">
                <p className="font-josefin text-xs">Speed</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#E7E7E7] items-center justify-center rounded-xl md:px-5 px-4 py-4">
              <div className="p-2 rounded-[50%] object-containmd:w-14 md:h-14 w-12 h-12 bg-[#D1D1D1] flex items-center justify-center">
                <FaAward className="text-[1.45rem] md:text-[1.65rem]" />
              </div>
              <div className="px-3 rounded-xl py-1 bg-[#D1D1D1]">
                <p className="font-josefin text-xs">Excellence</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 bg-[#E7E7E7] items-center justify-center rounded-xl md:px-5 px-4 py-4">
              <div className="p-2 rounded-[50%] object-contain md:w-14 md:h-14 w-12 h-12 bg-[#D1D1D1] flex items-center justify-center">
                <IoDiamondOutline className="text-[1.45rem] md:text-[1.65rem]" />
              </div>
              <div className="px-3 rounded-xl py-1 bg-[#D1D1D1]">
                <p className="font-josefin text-xs">Quality</p>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt:20">
            <h3 className="font-josefin text-[1.2rem]  leading-relaxed">
              Abeg <span className="text-[#7e7e7e]">consider</span> me, make{" "}
              <span className="text-[#7e7e7e]">Sapa</span> <br /> no humble me{" "}
              <span className="text-[1.3rem]">.</span>
            </h3>
            <p className="font-josefin text-sm mt-6 font-[800]">
              - Alhameen .
              <span className="text-[#7e7e7e]"> Your future Team Member.</span>
            </p>
          </div>
        </div>
        <div className=" basis-[100%] md:basis-[100%] lg:basis-[50%]">
          <div className="md:py-10 px-6 py-6 md:px-12 rounded-none md:rounded-[2rem] bg-[#F9F9F9]">
            <h1 className="font-josefin text-[1.3rem] font-[700]">About Me</h1>
            <ul className="mt-3 md:mt-6 flex flex-col gap-8 md:gap-10">
              <li className="flex items-start  gap-2 ">
                <p className="font-josefin  text-[0.95rem] md:text-[1.15rem]  leading-normal md:leading-[1.8]">
                  I'm <strong className="">Azeez Alhameen</strong>, a passionate
                  and innovative frontend developer eager to contribute my
                  skills to your next project. With a deep-rooted love for
                  crafting user-friendly and visually stunning web applications,
                  I bring creativity and expertise to every project I undertake
                  .
                </p>
              </li>
              <li className="flex items-start  gap-2">
                <p className="font-josefin text-[0.95rem] md:text-[1.15rem] leading-normal md:leading-[1.8]">
                  What sets me apart as a frontend developer is my commitment to
                  user-centered design and my ability to collaborate effectively
                  within cross-functional teams.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
