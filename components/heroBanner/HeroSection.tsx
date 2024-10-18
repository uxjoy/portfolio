import { resumeURL } from "@/utils/data/navbarData";
import { RiArrowRightUpLine, RiDriveFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import MousePointer from "../MousePointer";

const HeroSection = () => {
  return (
    <div className="pt-14 pb-24 relative">
      <div className="container text-center space-y-4">
        <div className="flex flex-col text-[100px] leading-[110%] uppercase font-bold mx-auto dark:text-stone-600">
          <p>Hi 👋, I’m Joy ✨</p>
          <p className="flex items-center justify-center gap-4 mx-auto">
            <span>creative</span>
            <span>
              <Image
                src="/assets/joy_header.png"
                loading="lazy"
                alt="author-image"
                width={120}
                height={88}
                className="rounded-full object-contain"
              />
            </span>
            <span className="text-indigo-500 dark:text-white">product</span>
          </p>
          <p className="text-indigo-500 dark:text-white">designer</p>
        </div>

        <div className="space-y-8">
          <p className="w-10/12 mx-auto text-xl font-light text-gray-600 dark:text-white/60 leading-[160%]">
            With over{" "}
            <span className="font-semibold text-gray-900 dark:text-amber-400 dark:font-medium">
              5 years of Product Design
            </span>{" "}
            expertise, I specialize in creating seamless and impactful user journeys. My focus is to craft designs that
            not only look stunning
          </p>

          <div className="actions flex items-center justify-center gap-3 w-full">
            <Link
              href={"#work"}
              className="flex items-center justify-center h-14 min-w-[174px] px-3 space-x-3 rounded-full bg-slate-100 dark:bg-zinc-900 hover:bg-slate-200 dark:hover:bg-zinc-800 dark:border dark:border-zinc-800 ease-in-out duration-300"
            >
              See my Work
            </Link>

            <Link
              href={resumeURL}
              className="flex items-center space-x-reverse gap-2.5 justify-center h-14 pl-7 pr-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-800 hover:bg-indigo-500 dark:hover:text-white ease-in-out duration-300 group"
            >
              My Resume
              <span className="w-9 h-9 grid items-center justify-center rounded-full bg-white dark:bg-zinc-950 text-slate-900 dark:text-white ease-in-out duration-300">
                <RiArrowRightUpLine size={24} className="group-hover:hidden" />
                <RiDriveFill size={20} className="hidden group-hover:block" />
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="mouse-pointer absolute top-[164px] md:top-64 md:left-1/2 z-10 ml-40 md:ml-64 pl-4 pt-2">
        <MousePointer fill="#F43F5E" text="sohanur.ux@gmail.com" />
      </div>

      <div className="mouse-pointer absolute top-[164px] md:top-72 md:right-1/2 z-10 mr-40 md:mr-72 pt-2">
        <MousePointer fill="#10B981" text="Sohanur Rahman (Joy)" positionRight />
      </div>
    </div>
  );
};

export default HeroSection;
