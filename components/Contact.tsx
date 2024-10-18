import { RiArrowRightUpLine, RiCopyrightLine } from "@remixicon/react";
import Link from "next/link";
import { calendlyLink } from "../src/utils/data/heroBannerData";
import { menuItem } from "../src/utils/data/navbarData";

const Contact = () => {
  return (
    <div className="contact-wrapper text-center pt-12 pb-[88px] md:pt-120 md:pb-100 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="inner-content space-y-10 md:space-y-120">
          <div className="content space-y-6 md:space-y-14">
            <div className="h2 text-gray-300 dark:text-stone-600 font-bold lh-12 leading-none">
              Write a <span className="text-gray-900 dark:text-stone-300"> message, </span>
              <br />
              and <span className="text-indigo-500"> let’s discuss </span> with
              <br />
              <span className="text-gray-900 dark:text-stone-300">your project. </span>
            </div>

            <p className="text-base md:text-32 font-semibold text-gray-900 dark:text-green-500">sohanur.ux@gmail.com</p>

            <div className="hidden md:block">
              {/* <ButtonLink name="Book a Call" url={calendlyLink} isIcon={true} isLarge /> */}

              <Link
                href={calendlyLink}
                className="flex items-center space-x-reverse gap-2.5 justify-center h-14 pl-7 pr-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-800 hover:bg-indigo-500 dark:hover:text-white dark:font-semibold ease-in-out duration-300 group w-[180px] mx-auto"
              >
                Book a Call
                <span className="w-9 h-9 grid items-center justify-center rounded-full bg-white dark:bg-zinc-950 text-slate-900 dark:text-white ease-in-out duration-300">
                  <RiArrowRightUpLine size={24} />
                  {/* <RiDriveFill size={20} className="hidden group-hover:block" /> */}
                </span>
              </Link>
            </div>

            <div className="sm:hidden">
              {/* <ButtonLink name="Book a Call" url={calendlyLink} isIcon={true} /> */}

              <Link
                href={calendlyLink}
                className="flex items-center space-x-reverse gap-2.5 justify-center h-14 pl-7 pr-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-800 hover:bg-indigo-500 dark:hover:text-white ease-in-out duration-300 group"
              >
                Book a Call
                <span className="w-9 h-9 grid items-center justify-center rounded-full bg-white dark:bg-zinc-950 text-slate-900 dark:text-white ease-in-out duration-300">
                  <RiArrowRightUpLine size={24} />
                  {/* <RiDriveFill size={20} className="hidden group-hover:block" /> */}
                </span>
              </Link>
            </div>
          </div>

          {/* Copyright section start */}
          <div className="copyright flex items-center justify-between text-xs md:text-base text-gray-600 dark:text-white">
            <div className="flex items-center text-gray-60 mx-auto md:mx-0">
              <RiCopyrightLine size={18} />
              2024 Portfolio by Sohanur Rahman
            </div>

            <div className="hidden md:block">
              <ul className="font-medium flex items-center space-x-6">
                {menuItem.map(({ name, url }, i) => {
                  return (
                    <li key={i} className="transform trangray-y-0 hover:-trangray-y-0.5 ease-in-out duration-200">
                      <Link
                        href={url}
                        target="_blank"
                        className="flex items-center justify-center hover:text-indigo-500 leading-5"
                      >
                        {name}
                        <RiArrowRightUpLine size={22} />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {/* Copyright section end */}
        </div>

        {/* Plane SVG Start */}
        <div className="absolute top-0 right-0 hidden md:block">
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
              <path
                d="M137.5 12.5L68.75 81.25"
                stroke="#6366F1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M137.5 12.5L93.75 137.5L68.75 81.25L12.5 56.25L137.5 12.5Z"
                stroke="#6366F1"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
        {/* Plane SVG End */}
      </div>

      <div
        className="watermark uppercase text-[66px] md:text-264 font-extrabold text-gray-100 dark:opacity-[4%]  absolute z-0 -bottom-2 md:-bottom-10
       m-auto left-0 right-0 leading-none"
      >
        contact
      </div>
    </div>
  );
};

export default Contact;
