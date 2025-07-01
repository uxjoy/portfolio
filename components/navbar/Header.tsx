import {
  RiDribbbleFill,
  RiLinkedinFill,
  RiMailOpenLine,
  RiTwitterXFill,
} from "@remixicon/react";
import Link from "next/link";
import { Logo } from "../svg/Logo";

const Header = () => {
  return (
    <div className="navbar-wrapper py-6 md:py-8">
      <div className="container flex items-center justify-between">
        <Link href={"/"} aria-label="author-logo">
          <Logo className="h-10 md:h-11 px-0 w-auto dark:bg-white" />
        </Link>

        <div className="flex items-center gap-2 md:gap-5">
          <div className="available-for-work flex items-center gap-2 text-green-500 md:bg-transparent bg-green-500/10 py-2 pl-2.5 pr-3 border border-white/5 rounded-full">
            <span className="relative flex items-center justify-center h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="md:text-sm text-xs font-medium">
              Available for Work
            </span>
          </div>

          <div className="md:block hidden">
            <ul className="flex items-center gap-2 md:gap-2.5 text-white pr-0.5">
              <li className="relative group">
                <Link
                  href={"https://www.linkedin.com/in/uxjoy"}
                  target="_blank"
                  className="p-2 block rounded-full bg-linkedin group"
                  aria-label="Linkedin link for more information"
                >
                  {/* <UseAnimations
                      animation={linkedin}
                      size={20}
                      strokeColor="white"
                      autoplay={true}
                      loop={true}
                    /> */}
                  <RiLinkedinFill size={16} />
                </Link>

                {/* <SocialTooltip text="Linkedin" /> */}
              </li>

              <li className="relative group">
                <Link
                  href={"https://dribbble.com/uxjoy_"}
                  target="_blank"
                  className="p-2 block rounded-full bg-dribbble group"
                  aria-label="Dribbble link for more information"
                >
                  {/* <UseAnimations
                      animation={dribbble}
                      size={20}
                      strokeColor="white"
                      autoplay={true}
                      loop={true}
                    /> */}
                  <RiDribbbleFill size={16} />
                </Link>

                {/* <SocialTooltip text="Dribbble" /> */}
              </li>

              <li className="relative group hidden md:block">
                <Link
                  href={"https://x.com/uxjoy_"}
                  target="_blank"
                  className="p-2 block rounded-full bg-twitter group"
                  aria-label="Twitter link for more information"
                >
                  {/* <UseAnimations
                      animation={twitter}
                      size={20}
                      strokeColor="white"
                      autoplay={true}
                      loop={true}
                    /> */}

                  <RiTwitterXFill size={16} />
                </Link>

                {/* <SocialTooltip text="Twitter" /> */}
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
