import { resumeURL } from "@/utils/data/navbarData";
import { RiArrowRightUpLine, RiDriveFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import MousePointer from "../MousePointer";

const HeroSection = () => {
  return (
    <div className="py-24 md:pt-14 md:pb-24 relative">
      <div className="container text-center space-y-4">
        {/* <span className="w-full flex items-center justify-center">
          <Image
            src="/assets/joy_header.png"
            loading="lazy"
            alt="author-image"
            width={100}
            height={72}
            className="rounded-full object-contain"
          />
        </span> */}

        <div className="flex flex-col justify-center text-[32px] md:text-[64px] lg:text-[100px] leading-tight md:leading-[110%] uppercase font-extrabold md:font-bold mx-aut">
          {/* <p className="flex items-center justify-center w-full">
            Hi 👋, I’m Joy <span className="hidden md:block">✨</span>
          </p> */}

          <p className="flex items-center justify-center w-full ">
            <span className="bg-gradient-to-b from-primary-950/60 dark:from-stone-400 to-black/0 inline-block text-transparent bg-clip-text">
              Hi
            </span>
            <span className="ml-1 md:ml-4"> 👋 </span>
            <span className="bg-gradient-to-b from-primary-950/60 dark:from-stone-400 to-black/0 inline-block text-transparent bg-clip-text">
              , I’m Joy
            </span>
            <span className="hidden md:block">✨</span>
          </p>
          <p className="flex items-center justify-center gap-2 md:gap-4 mx-auto">
            <span className="bg-gradient-to-b from-primary-950/60 dark:from-stone-400 to-black/0 inline-block text-transparent bg-clip-text">
              creative
            </span>
            <span className="hidden md:block">
              <Image
                src="/assets/joy_header.png"
                loading="lazy"
                alt="author-image"
                width={120}
                height={88}
                className="rounded-full object-contain"
              />
            </span>
            <span className="text-primary-950 dark:text-white">product</span>
          </p>
          <p className="text-primary-950 dark:text-white">designer</p>
        </div>

        <div className="space-y-8">
          <p className="md:w-10/12 mx-auto lg:text-xl font-light text-gray-600 dark:text-stone-400 leading-tight md:leading-[160%]">
            With over{" "}
            <span className="font-semibold text-primary-950 dark:font-medium dark:bg-gradient-to-r dark:from-primary-300  dark:to-sky-300 inline-block dark:text-transparent dark:bg-clip-text">
              5 years of Product Design
            </span>{" "}
            expertise, I specialize in creating seamless and impactful user
            journeys. My focus is to craft designs that not only look stunning
          </p>

          <div className="actions flex items-center justify-center gap-3 w-full font-medium">
            <Link
              href={"#work"}
              className="flex items-center justify-center h-12 md:h-14 min-w-[152px] md:min-w-[174px] px-2 md:px-3 space-x-3 rounded-full bg-gray-100 dark:bg-zinc-900 hover:bg-gray-200 dark:font-light dark:hover:bg-zinc-800 border border-slate-200/80 dark:border-zinc-800 ease-in-out duration-300 text-sm md:text-base text-nowrap"
            >
              See my Work
            </Link>

            <Link
              href={resumeURL}
              target="_blank"
              className="flex items-center space-x-reverse gap-2.5 justify-center h-12 md:h-14 pl-6 md:pl-7 pr-1.5 md:pr-2.5 rounded-full bg-primary-950 dark:bg-white text-white hover:text-primary-950 dark:text-primary-950 hover:bg-primary-300 dark:hover:text-primary-950 ease-in-out duration-300 text-sm md:text-base text-nowrap group"
            >
              My Resume
              <span className="w-8 h-8 md:w-9 md:h-9 grid items-center justify-center rounded-full bg-white dark:bg-primary-950 text-primary-950 dark:text-white ease-in-out duration-300">
                <RiArrowRightUpLine
                  size={24}
                  className="hidden group-hover:block"
                />
                <RiDriveFill size={20} className=" group-hover:hidden" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mouse-pointer absolute top-[164px] md:top-64 md:left-1/2 z-10 ml-40 md:ml-64 pl-4 pt-2 hidden md:block">
        <MousePointer fill="#F43F5E" text="sohanur.ux@gmail.com" />
      </div>

      <div className="mouse-pointer absolute top-[164px] md:top-72 md:right-1/2 z-10 mr-40 md:mr-72 pt-2 hidden md:block">
        <MousePointer
          fill="#10B981"
          text="Sohanur Rahman (Joy)"
          positionRight
        />
      </div>
    </div>
  );
};

export default HeroSection;
