import { RiArrowRightUpLine, RiCopyrightLine } from "@remixicon/react";
import Link from "next/link";
import { calendlyLink } from "../src/utils/data/heroBannerData";
import { menuItem } from "../src/utils/data/navbarData";

const Email = () => (
  <span className="flex items-center justify-center gap-1 w-full relative group">
    <p className="text-base md:text-32 font-medium text-gray-900 dark:text-primary-50 underlin underline-offset-4">
      sohanur.ux@gmail.com
    </p>
  </span>
);

const BookCallButton = ({ className }: any) => (
  <Link
    href={calendlyLink}
    className={`inline-flex items-center space-x-reverse gap-2.5 justify-center h-12 md:h-14 pl-6 md:pl-7 pr-1.5 md:pr-2.5 rounded-full ${className} ease-in-out duration-300 text-sm md:text-base text-nowrap group`}
  >
    Book a Call
    <span className="w-9 h-9 grid items-center justify-center rounded-full bg-white dark:bg-primary-950 text-primary-950 dark:text-primary-default group-hover:dark:text-primary-300 ease-in-out duration-300 rotate-45 group-hover:rotate-0">
      <RiArrowRightUpLine size={24} />
    </span>
  </Link>
);

const Contact = () => {
  return (
    <div className="contact-wrapper text-center pt-12 pb-[88px] md:pt-16 md:pb-100 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="inner-content space-y-10 md:space-y-120">
          <div className="content space-y-7 md:space-y-14">
            <h1 className="text-3xl md:text-7xl text-gray-300 dark:text-white leading-tight font-bold space-y-4">
              Write a <span className="text-gray-900 dark:text-white"> message, </span>
              <br />
              and <span className="text-primary-300"> let’s discuss </span> with
              <br />
              <span className="text-gray-900 dark:text-white">your project. </span>
            </h1>

            <Email />

            <div className="hidden md:block">
              <BookCallButton className="bg-primary-950 text-white dark:bg-primary-default dark:text-primary-950 hover:bg-primary-300 hover:text-primary-950 font-medium" />
            </div>

            <div className="sm:hidden">
              <BookCallButton className="bg-primary-900 dark:bg-white text-white dark:text-primary-950 hover:bg-primary-300" />
            </div>
          </div>

          <div className="copyright flex items-center justify-between text-xs md:text-base text-gray-600 dark:text-white/70 font-medium dark:font-light ">
            <div className="flex gap-1 items-center text-gray-60 mx-auto md:mx-0">
              <RiCopyrightLine size={18} /> 2024 Portfolio by ✨ Sohanur Rahman ✨
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-6">
                {menuItem.map(({ name, url }, i) => (
                  <li key={i} className="transform trangray-y-0 hover:-trangray-y-0.5 ease-in-out duration-200">
                    <Link
                      href={url}
                      target="_blank"
                      className="flex items-center justify-center hover:text-primary-300 leading-5"
                    >
                      {name}
                      <RiArrowRightUpLine size={22} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 hidden md:block">
          <span className="dark:hidden opacity-25">
            <PlaneSVG color="#000000" />
          </span>
          <span className="hidden dark:block opacity-[3%]">
            <PlaneSVG color="#ffffff" />
          </span>
        </div>
      </div>
      <div
        className="watermark uppercase text-[66px] md:text-264 font-extrabold text-gray-100 dark:opacity-[2%]  absolute z-0 -bottom-2 md:-bottom-10
       m-auto left-0 right-0 leading-none"
      >
        contact
      </div>
    </div>
  );
};

const PlaneSVG = ({ color }: any) => (
  <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.1">
      <path d="M137.5 12.5L68.75 81.25" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M137.5 12.5L93.75 137.5L68.75 81.25L12.5 56.25L137.5 12.5Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default Contact;
