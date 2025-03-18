"use client";

import { resumeURL } from "@/utils/data/navbarData";
import { RiArrowRightUpLine, RiDriveFill } from "@remixicon/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import UseAnimations from "react-useanimations";
import dribbble from "react-useanimations/lib/dribbble";
import linkedin from "react-useanimations/lib/linkedin";
import twitter from "react-useanimations/lib/twitter";

const BottomNav = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 400 ? setTop(false) : setTop(true);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`bg-slate-500/20 border-[1.2px] border-white/20 dark:border-white/10 p-2.5 w-fit mx-auto rounded-full shadow-xl backdrop-blur-sm sm:hidden ${
        top && "hidden"
      }`}
    >
      <ul className="flex items-center gap-2.5 text-white pr-0.5">
        <li>
          <Link
            href={resumeURL}
            target="_blank"
            className="flex items-center space-x-reverse gap-2.5 justify-center h-11 md:h-14 pl-4 md:pl-7 pr-1.5 md:pr-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-800 hover:bg-primary-300 dark:hover:text-white ease-in-out duration-300 text-sm md:text-base text-nowrap group border border-white/25"
          >
            My Resume
            <span className="w-8 h-8 md:w-9 md:h-9 grid items-center justify-center rounded-full bg-white dark:bg-zinc-950 text-slate-900 dark:text-white ease-in-out duration-300">
              <RiArrowRightUpLine size={20} className="group-hover:hidden" />
              <RiDriveFill size={20} className="hidden group-hover:block" />
            </span>
          </Link>
        </li>
        <li className="relative group">
          <Link
            href={"https://www.linkedin.com/in/uxjoy"}
            target="_blank"
            className="p-2 block rounded-full bg-linkedin group border border-white/25"
            aria-label="Linkedin link for more information"
          >
            {/* <RiLinkedinFill
              size={20}
              className="scale-100 group-hover:scale-90 ease-in-out duration-200"
            /> */}
            <UseAnimations
              animation={linkedin}
              size={24}
              strokeColor="white"
              autoplay={true}
              loop={true}
            />
          </Link>

          <SocialTooltip text="Linkedin" />
        </li>

        <li className="relative group">
          <Link
            href={"https://dribbble.com/uxjoy_"}
            target="_blank"
            className="p-2 block rounded-full bg-dribbble group border border-white/25"
            aria-label="Dribbble link for more information"
          >
            {/* <RiDribbbleFill
              size={20}
              className="scale-100 group-hover:scale-90 ease-in-out duration-200"
            /> */}

            <UseAnimations
              animation={dribbble}
              size={24}
              strokeColor="white"
              autoplay={true}
              loop={true}
            />
          </Link>

          <SocialTooltip text="Dribbble" />
        </li>

        <li className="relative group">
          <Link
            href={"https://x.com/uxjoy_"}
            target="_blank"
            className="p-2 block rounded-full bg-twitter group border border-white/25"
            aria-label="Twitter link for more information"
          >
            {/* <RiTwitterFill
              size={20}
              className="scale-100 group-hover:scale-90 ease-in-out duration-200"
            /> */}

            <UseAnimations
              animation={twitter}
              size={24}
              strokeColor="white"
              autoplay={true}
              loop={true}
            />
          </Link>

          <SocialTooltip text="Twitter" />
        </li>

        {/* <li className="relative group hidden">
          <Link
            href={"mailto:sohanur.ux@gmail.com"}
            target="_blank"
            className="p-3 block rounded-full bg-gray-900 group"
          >
            <RiMailOpenLine
              size={20}
              className="scale-100 group-hover:scale-90 ease-in-out duration-200"
            />
          </Link>

          <span className="absolute left-1/2 -translate-x-1/2 top-0 text-white text-[9px] text-nowrap font-semibold uppercase bg-gray-900 px-1.5 py-0.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:-top-5 group-hover:visible ease-in-out duration-300 z-0">
            Copy Email
          </span>
        </li> */}
      </ul>
    </div>
  );
};

export default BottomNav;

type Props = {
  text: string;
};

const SocialTooltip: FC<Props> = ({ text }) => {
  return (
    <span className="absolute left-1/2 -translate-x-1/2 top-0 text-white text-[9px] text-nowrap font-medium uppercase bg-gray-900 dark:bg-white/10 px-1.5 py-0.5 rounded opacity-0 dark:border-[0.5px] dark:border-white/15 invisible group-hover:opacity-100 group-hover:-top-[22px] group-hover:visible ease-in-out duration-300 z-0">
      {text}
    </span>
  );
};
