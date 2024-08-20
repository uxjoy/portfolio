"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonLink from "../Button";
import { menuItem, resumeURL } from "../data/navbarData";
import { Logo } from "../svg/Logo";

const Navabar = () => {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <div
      className={`navbar-wrapper py-3 md:px-8 sticky top-0 bg-white  z-50  drop-shadow-sm md:drop-shadow-none ease-in-out duration-300 ${
        !top ? `md:drop-shadow-sm  md:py-4` : "md:bg-slate-50 md:py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"} aria-label="author-logo">
          <Logo className="h-10 md:h-11 px-0 w-auto" />
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0">
              {menuItem.map(({ name, url }, i) => {
                return (
                  <li
                    key={i}
                    className="transform translate-y-0 hover:-translate-y-0.5 ease-in-out duration-200 text-base"
                  >
                    <Link
                      href={url}
                      target="_blank"
                      className="flex items-center justify-center py-2 px-3 text-slate-600 hover:text-indigo-500"
                    >
                      {name}
                      <RiArrowRightUpLine size={22} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <ButtonLink name="My Resume" url={resumeURL} isIcon />
          </div>

          <div className="md:hidden">
            <Link
              href={resumeURL}
              target="_blank"
              className={`group ml-2 h-10 pl-[16px] pr-[12px] gap-1 font-medium bg-slate-900 text-white rounded-full inline-flex items-center hover:bg-indigo-500 ease-in-out duration-300 text-xs`}
            >
              My Resume
              <RiArrowRightUpLine size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
