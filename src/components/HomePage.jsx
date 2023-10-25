import React from "react";
import { AiOutlineFire, AiOutlineHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi"
const HomePage = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center py-5 overflow-hidden">
      <div className="flex flex-col gap-2 text-center justify-center items-center max-w-[54rem] px-3 md:px-0 relative ">
        {/* <div className="bg-[#515151] p-2 rounded-full  absolute left-[2rem] top-[-9rem] md:left-[-2.5rem] md:top-[-9rem]">
          <BiLogoGithub className=" text-white text-[1.2rem] md:text-[1.5rem]" />
        </div>
        <div className="bg-[#515151] p-2 rounded-full  absolute  right-4  top-[-12rem] md:right-8 md:top-[-10rem]">
          <BiLogoReact className=" text-white text-[1.2rem] md:text-[1.5rem]" />
        </div>
        <div className="bg-[#515151] p-2 rounded-full   absolute left-[1.2rem] bottom-[-6rem] md:left-0 md:bottom-[-12rem]">
          <BiLogoJavascript className=" text-white text-[1.2rem] md:text-[1.5rem]" />
        </div>
        <div className="bg-[#515151] p-2  rounded-full  absolute  right-[-14rem] bottom-[-5rem]">
          <BiLogoCss3 className=" text-white text-[1.5rem]" />
        </div>
        <div className="bg-[#515151] p-2 rounded-full  absolute right-2  bottom-[2rem] md:right-0 md:bottom-[-4rem]">
          <BiLogoTailwindCss className=" text-white text-[1.2rem] md:text[1.5rem]" />
        </div> */}
        <h1 className="font-josefin text-[1.4rem] md:text-[2.3rem] font-[600] text-white ">
          Hi, I am Azeez Alhameen
        </h1>
        <h3 className="font-josefin text-[1.5rem] md:text-[2.6rem] font-[600] text-white">
          A Front-end Web Developer .
        </h3>
        <p className="font-josefin leading-normal md:text-base text-[0.9rem] md:leading-relaxed text-[#7e7e7e] mt-3">
          {" "}
          I'm dedicated to turning your creative ideas into interactive web
          experiences. With a strong focus on user-centered design and
          cutting-edge technologies, I'm committed to bringing your vision to
          life on the digital canvas.
        </p>
        <button className="p-2 font-josefin rounded-lg bg-[#515151] mt-10 flex items-end justify-center gap-2">
          <div className=" bg-white p-2 rounded-full">
            <AiOutlineFire className="  text-base" />
          </div>
          <p className="text-white">Let's Work</p>
        </button>
      </div>
    </section>
  );
};

export default HomePage;
