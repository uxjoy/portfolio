import { resumeURL } from "@/utils/data/navbarData";
import { RiArrowRightUpLine, RiDriveFill } from "@remixicon/react";
import Link from "next/link";

const BottomNav = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-black border-[1.2px] border-white dark:border-white/10 p-1.5 rounded-full shadow-xl backdrop-blur-md">
        <ul className="flex items-center gap-1 text-white pr-0.5">
          {/* Work */}
          <li>
            <Link
              href={"#home"}
              className="flex items-center gap-1.5 h-11 px-5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium ease-in-out duration-300"
              aria-label="Go to Work section"
            >
              {/* <RiLayoutGridLine size={18} /> */}
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"#work"}
              className="flex items-center gap-1.5 h-11 px-5 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium ease-in-out duration-300"
              aria-label="Go to Work section"
            >
              {/* <RiLayoutGridLine size={18} /> */}
              Work
            </Link>
          </li>

          <li>
            <Link
              href={"https://joy-icons.vercel.app/"}
              className="flex items-center gap- h-11 px-5 pr-3 rounded-full bg-white/10 hover:bg-white/20 text-sm font-medium ease-in-out duration-300"
              target="_blank"
            >
              {/* <RiLayoutGridLine size={18} /> */}
              Icons
              <RiArrowRightUpLine size={18} className="ml-1" />
            </Link>
          </li>

          {/* Resume */}
          <li>
            <Link
              href={resumeURL}
              target="_blank"
              className="flex items-center gap-2 justify-center h-11 pl-4 pr-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-800 hover:bg-primary-300  ease-in-out duration-300 text-sm text-nowrap group border border-white/25"
            >
              Resume
              <span className="w-8 h-8 grid items-center justify-center rounded-full bg-white dark:bg-zinc-950 text-slate-900 dark:text-white ease-in-out duration-300">
                <RiArrowRightUpLine size={20} className="group-hover:hidden" />
                <RiDriveFill size={20} className="hidden group-hover:block" />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BottomNav;
