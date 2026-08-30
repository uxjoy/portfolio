import { resumeURL } from "@/utils/data/navbarData";
import { RiArrowRightUpLine, RiDriveFill } from "@remixicon/react";
import * as motion from "motion/react-client";
import Link from "next/link";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        // delay: 0.1,
        // scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
      }}
      className="py-8 pb-0 md:pt-14 md:pb-24 relative"
    >
      <div className="container text-center space-y-10">
        <div className="max-w-3xl space-y-4 mx-auto">
          <label className="uppercase text-lg"> Hire your next</label>

          <h1 className="text-4xl md:text-[72px] md:leading-[1.1]">
            Design Partner from{" "}
            <span className="font-[family-name:var(--font-instrument-serif)] font-normal italic">
              Strategy to Execution
            </span>
          </h1>

          <p className="md:text-lg font-extralight text-white/80">
            I partner with product teams and founders to design clear, scalable
            user experiences that support business growth, technical
            feasibility, and long-term product decisions.
          </p>
        </div>

        <div className="actions flex items-center justify-center gap-3 w-full font-medium ">
          <Link
            href={"#work"}
            className="flex items-center justify-center h-12 md:h-14 min-w-[152px] md:min-w-[174px] px-2 md:px-3 space-x-3 rounded-full bg-gray-100 dark:bg-whiteAlpha-6 hover:bg-gray-200 dark:font-light dark:hover:bg-whiteAlpha-8 dark:hover:text-primary-default border border-slate-200/80 dark:border-whiteAlpha-4 ease-in-out duration-300 text-sm md:text-base text-nowrap"
          >
            See my Work
          </Link>

          <Link
            href={resumeURL}
            target="_blank"
            className="flex items-center space-x-reverse gap-2.5 justify-center h-12 md:h-14 pl-6 md:pl-7 pr-1.5 md:pr-2.5 rounded-full bg-primary-950 dark:bg-primary-default text-white hover:text-primary-950 dark:text-primary-950 hover:bg-primary-300 dark:hover:text-primary-950 ease-in-out duration-300 text-sm md:text-base text-nowrap group font-semibold"
          >
            My Resume
            <span className="w-8 h-8 md:w-9 md:h-9 grid items-center justify-center rounded-full bg-white dark:bg-primary-950 text-primary-950 dark:text-primary-default ease-in-out duration-300">
              <RiArrowRightUpLine
                size={24}
                className="hidden group-hover:block"
              />
              <RiDriveFill size={20} className=" group-hover:hidden" />
            </span>
          </Link>
        </div>

        <p className="font-extralight text-white/80">
          🇦🇺 🇦🇹 🇧🇩 🇭🇷 🇩🇪 Designing across 10+ countries 🇮🇳 🇬🇧 🇪🇸 🇺🇸 🇬🇧
        </p>
      </div>

      {/* <div className="mouse-pointer absolute top-[164px] md:top-64 md:left-1/2 z-10 ml-40 md:ml-64 pl-4 pt-2 hidden md:block">
        <MousePointer fill="#F43F5E" text="sohanur.ux@gmail.com" />
      </div>

      <div className="mouse-pointer absolute top-[164px] md:top-72 md:right-1/2 z-10 mr-40 md:mr-72 pt-2 hidden md:block">
        <MousePointer
          fill="#10B981"
          text="Sohanur Rahman (Joy)"
          positionRight
        />
      </div> */}
    </motion.div>
  );
};

export default HeroSection;
