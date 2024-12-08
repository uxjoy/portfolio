"use client";

import {
  RiDribbbleFill,
  RiLinkedinFill,
  RiMailOpenLine,
  RiTwitterFill,
} from "@remixicon/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import ThemeSwitch from "../ThemeSwitch";

const Navabar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 40 ? setTop(false) : setTop(true);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`navbar-wrapper md:px-8 sticky top-0 z-50 ease-in-out duration-300 border-b border-transparent ${
        !top
          ? "bg-white/50 dark:bg-white/5 border-gray-950/5 dark:border-white/5 py-4 md:py-6 backdrop-blur-lg drop-shadow-sm"
          : "py-6 md:py-10"
      }`}
      // className={`navbar-wrapper py-4 md:px-8 sticky top-0 backdrop-blur dark:backdrop-blur-lg z-50 drop-shadow-sm md:drop-shadow-none ease-in-out duration-300 ${
      //   top ? `md:bg-transaprent md:py-10` : "md:drop-shadow-sm md:py-6"
      // }`}
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"} aria-label="author-logo">
          {/* <Logo className="h-10 md:h-11 px-0 w-auto dark:bg-white" /> */}

          <div className="uppercase font-bold text-lg md:text-xl">
            <p className="leading-none">Sohanur</p>
            <p className="leading-none text-gray-400 dark:text-stone-400">
              🇧🇩 Rahman
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          {/* Available for work */}
          {/* <span className=""> */}
          <div className="available-for-work flex items-center gap-2 text-green-500 md:bg-transparent bg-green-500/10 py-2 pl-2.5 pr-3 border border-white/15 rounded-full">
            <span className="relative flex items-center justify-center h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="md:text-sm text-xs font-medium">
              Available for Work
            </span>
          </div>
          {/* </span> */}

          <div className=" md:block hidden">
            <ul className="flex items-center gap-2 md:gap-2.5 text-white pr-0.5">
              <li className="relative group">
                <Link
                  href={"https://www.linkedin.com/in/uxjoy"}
                  target="_blank"
                  className="p-2 block rounded-full bg-linkedin group"
                  aria-label="Linkedin link for more information"
                >
                  <RiLinkedinFill
                    size={18}
                    className="scale-100 group-hover:scale-90 ease-in-out duration-200"
                  />
                </Link>

                <SocialTooltip text="Linkedin" />
              </li>

              <li className="relative group">
                <Link
                  href={"https://dribbble.com/uxjoy_"}
                  target="_blank"
                  className="p-2 block rounded-full bg-dribbble group"
                  aria-label="Dribbble link for more information"
                >
                  <RiDribbbleFill
                    size={18}
                    className="scale-100 group-hover:scale-90 ease-in-out duration-200"
                  />
                </Link>

                <SocialTooltip text="Dribbble" />
              </li>

              <li className="relative group hidden md:block">
                <Link
                  href={"https://x.com/uxjoy_"}
                  target="_blank"
                  className="p-2 block rounded-full bg-twitter group"
                  aria-label="Twitter link for more information"
                >
                  <RiTwitterFill
                    size={18}
                    className="scale-100 group-hover:scale-90 ease-in-out duration-200"
                  />
                </Link>

                <SocialTooltip text="Twitter" />
              </li>

              <li className="relative group hidden">
                <Link
                  href={"mailto:sohanur.ux@gmail.com"}
                  target="_blank"
                  className="p-2 block rounded-full bg-gray-900 group"
                >
                  <RiMailOpenLine
                    size={18}
                    className="scale-100 group-hover:scale-90 ease-in-out duration-200"
                  />
                </Link>

                <span className="absolute left-1/2 -translate-x-1/2 top-0 text-white text-[9px] text-nowrap font-semibold uppercase bg-gray-900 px-1.5 py-0.5 rounded opacity-0 invisible group-hover:opacity-100 group-hover:-top-5 group-hover:visible ease-in-out duration-300 z-0">
                  Copy Email
                </span>
              </li>
              {/* <li>
              <Link
                href={"https://www.linkedin.com/in/uxjoy"}
                target="_blank"
                className="p-2 block rounded-full bg-behance group"
              >
                <RiBehanceFill size={20} className="scale-100 group-hover:scale-90 ease-in-out duration-200" />
              </Link>
            </li> */}
            </ul>
          </div>

          {/* <div className="hidden md:block">
            <ul className="flex flex-col items-center font-normal p-4 md:p-0 mt-4 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
              {menuItem.map(({ name, url }, i) => {
                return (
                  <li
                    key={i}
                    className="transform translate-y-0 hover:-translate-y-0.5 ease-in-out duration-200 text-base"
                  >
                    <Link
                      href={url}
                      target="_blank"
                      className="flex items-center justify-center p-2 text-gray-700 dark:text-white/70 hover:text-indigo-500"
                    >
                      {name}
                      <RiArrowRightUpLine size={22} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div> */}

          {/* Resume Button */}
          {/* <div className="hidden md:block">
            <ButtonLink name="My Resume" url={resumeURL} isIcon />
          </div> */}

          <div className="divider w-0.5 h-5 bg-slate-950/5 dark:bg-white/5 hidden md:block"></div>

          <div className="switch-button">
            <ThemeSwitch />
          </div>

          {/* <div className="md:hidden">
            <Link
              href={resumeURL}
              target="_blank"
              className={`group ml-2 h-10 pl-[16px] pr-[12px] gap-1 font-medium bg-slate-900 text-white rounded-full inline-flex items-center hover:bg-indigo-500 ease-in-out duration-300 text-xs`}
            >
              My Resume
              <RiArrowRightUpLine size={18} />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navabar;

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
