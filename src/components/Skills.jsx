import React from "react";
import { MdPhoneIphone } from "react-icons/md";
import { IoFlash } from "react-icons/io5";
import { AiOutlineApi, AiOutlineHtml5 } from "react-icons/ai";
import { BsGithub, BsGlobe, BsLinkedin } from "react-icons/bs";
import {LiaReact} from 'react-icons/lia'
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoReact,
  BiLogoDjango,
  BiLogoHtml5,
} from "react-icons/bi";
const Skills = () => {
  const skillsArr = [
    {
      specialskill: "Responsive Design",
      skillIcon: <MdPhoneIphone />,
      aboutSkill:
        "I excel in  crafting websites that seamlessly adapt to any screen size or device. ",
    },
    {
      specialskill: "Performance Optimization",
      skillIcon: <IoFlash />,
      aboutSkill:
        "I excel in optimizing web performance, including page speed and loading times. ",
    },
    {
      specialskill: "Web Accessibility",
      skillIcon: <BsGlobe />,
      aboutSkill:
        "Knowledge of accessibility standards to make websites usable for people with disabilities. ",
    },
    {
      specialskill: "API integration",
      skillIcon: <AiOutlineApi />,
      aboutSkill:
        "Knowledge of how to fetch , work and display data from APIs. ",
    },
  ];
  const technologyObj = [
    {
      skillName: "HTML",
      skillIcon: <BiLogoHtml5 />,
    },

    {
      skillName: "CSS",
      skillIcon: <BiLogoCss3 />,
    },
    {
      skillName: "Javascript",
      skillIcon: <BiLogoJavascript />,
    },
    {
      skillName: "Tailwind-Css",
      skillIcon: <BiLogoTailwindCss />,
    },
    {
      skillName: "React",
      skillIcon: <LiaReact />,
    },
    {
      skillName: "Django",
      skillIcon: <BiLogoDjango />,
    },
    {
      skillName: "Git and Github",
      skillIcon: <BsGithub />,
    },
  ];
  return (
    <section className="skills py-0 pb-10 md:py-20 overflow-x-hidden px-0 md:px-6">
      <div className=" mx-auto   max-w-[78rem]">
        <div className="skills-heading w-full flex flex-col items-center justify-center gap-2">
          <h1 className="font-josefin font-[700] text-[1.5rem] md:text-[2rem]">
            My Special Skills
          </h1>
          <p className="font-josefin text-xs text-[#7e7e7e]">
            Things that make me your guy
          </p>
        </div>
        <div className="skills-flex scroll-container flex gap-6 md:gap-10 mt-10  overflow-auto ov-auto px-5 md:px-0">
          {skillsArr.map((skill) => {
            return (
              <div className="bg-black rounded-[1.5rem] w-[448px] min-w-[320px] md:min-w-[448px] py-10 md:px-10 px-5  md:flex-none text-white">
                <div className="bg-[#333333] w-14 h-14 rounded-full flex items-center justify-center">
                  <i className="text-[1.6rem]">{skill.skillIcon}</i>
                </div>
                <div>
                  <h3 className="mt-5 font-josefin text-white font-[700]">
                    {skill.specialskill}
                  </h3>
                  <p className="text-sm font-josefin text-[#7e7e7e] max-w-[20rem] mt-2">
                    {skill.aboutSkill}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="arsenal mt-20 max-w-[68rem] mx-auto">
          <div className="arsenal-heading w-full flex flex-col items-center justify-center gap-1">
            <h1 className="font-josefin font-[700] text-[1.5rem] md:text-[2rem]">
              My Arsenal
            </h1>
            <p className="font-josefin text-xs text-[#7e7e7e]">
              My stack and all that.
            </p>
          </div>
          <div className="arsenal-skills flex gap-4 md:justify-between mt-10 px-5 flex-wrap justify-center">
            {technologyObj.map((tech) => {
              return (
                <div className="flex flex-col items-center justify-center">
                  <div className="bg-[#E7E7E7] w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
                    <i className="text-[1.4rem] md:text-[1.8rem]">{tech.skillIcon}</i>
                  </div>
                  <p className="mt-3 font-josefin text-base font-[700] hidden md:block">{tech.skillName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
