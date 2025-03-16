import { resumeURL } from "@/utils/data/navbarData";
import { RiArrowRightUpLine, RiDriveFill } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="py-24 md:pt-14 md:pb-24 relative">
      <div className="container text-center space-y-4">
        <div className="hidden md:flex flex-col justify-center text-[32px] md:text-[64px] lg:text-[72px] leading-tight md:leading-[120%] font-semibold">
          <h1 className="flex gap-4 items-center justify-center w-full">
            <span>Hi 👋,</span>

            <span className="hidden md:block relative">
              <Image
                src="/assets/joy_header.png"
                loading="lazy"
                width={110}
                height={80}
                className="object-contain rounded-full border-4 border-bgColor"
                alt={"author image"}
              />

              <div className="shape absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full -z-10 w-[116px] h-[56px] bg-gradient-to-b from-sky-500 via-primary-300 to-sky-500"></div>
            </span>

            <span className="">I’m Joy</span>
          </h1>

          <h1 className="flex items-center justify-center gap-2 md:gap-4 mx-auto">
            a
            <span className="capitalize text-primary-default">
              product designer
            </span>
            who loves to
          </h1>

          <h1 className="text-primary-950 dark:text-white">
            create meaningful design
          </h1>
        </div>

        <div className="mobile-view text-4xl leading-tight font-semibold flex flex-col items-center justify-center space-y-6 md:hidden">
          <Image
            src="/assets/joy_header.png"
            loading="lazy"
            width={120}
            height={120}
            className="object-contain rounded-full border-4 border-bgColor"
            alt={"author image"}
          />

          <h1>
            Hi 👋, I’m Joy{" "}
            <span className="capitalize text-primary-default">
              product designer
            </span>{" "}
            create meaningful design
          </h1>
        </div>

        <div className="space-y-8">
          <p className="md:w-10/12 mx-auto lg:text-xl font-light text-gray-600 dark:text-whiteAlpha-64 lg:leading-relaxed">
            With over{" "}
            <span className="font-semibold text-primary-950 dark:font-medium dark:bg-gradient-to-r dark:from-primary-300  dark:to-sky-300 inline-block dark:text-transparent dark:bg-clip-text">
              5+ years of Product Design
            </span>{" "}
            expertise, I craft user-centric experiences that blend aesthetics
            and functionality. Driven by research, I create designs that enhance
            usability and impact.
          </p>

          <div className="actions flex items-center justify-center gap-3 w-full font-medium">
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
        </div>
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
    </div>
  );
};

export default HeroSection;
