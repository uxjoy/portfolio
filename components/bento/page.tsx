import { dribbbleLink, figmaPortfolioLink, linkedinLink, twitterLink } from "@/utils/data/aboutTextsData";
import {
  RiArrowRightUpLine,
  RiCloseLine,
  RiDribbbleLine,
  RiEarthLine,
  RiGithubFill,
  RiHtml5Fill,
  RiJavascriptFill,
  RiLinkedinFill,
  RiNextjsFill,
  RiReactjsFill,
  RiTailwindCssFill,
  RiTwitterLine,
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import Pill from "../Pill";
import AdobeXD from "../svg/AdobeXD";
import Figma from "../svg/Figma";
import FigmaLine from "../svg/FigmaLine";
import Framer from "../svg/Framer";
import Google from "../svg/Google";
import Illustrator from "../svg/Illustrator";
import Miro from "../svg/Miro";
import Photoshop from "../svg/Photoshop";
import Rating from "../svg/rating";
import Spline from "../svg/Spline";
import Upwork from "../svg/Upwork";
import ProcessCard from "./ProcessCard";

const BentoGrid = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col md:grid grid-cols-12 grid-rows-3 gap-3 md:gap-5">
          {/* Process */}
          <div className="rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-4 space-y-4">
            <div>My Process</div>

            <div className="grid grid-cols-3 gap-2">
              <ProcessCard title="Discover" step="Step 1" />
              {/* <ProcessCard title="Define" step="Step 2" /> */}
              <ProcessCard title="Develope" step="Step 2" />
              <ProcessCard title="Deliver" step="Step 4" />
            </div>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center justify-center rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-3">
            <p>
              <span className="text-[72px] font-bold leading-tight">5</span> years{" "}
              <span className="text-primary-default font-semibold"> + </span>
            </p>
            <div className="text-whiteAlpha-56 font-light">of Experience</div>
          </div>

          {/* Upwork */}
          <div className="flex flex-col justify-between sm:gap-4 rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-5">
            <Rating />

            <div className="content space-y-1">
              <p className="text-whiteAlpha-72">
                <span className="font-medium text-lg text-white pr-1"> Top 10% </span> of Talent on Upwork
              </p>
              <div className="text-whiteAlpha-56 text-sm font-light leading-relaxed">
                I’ve collaborated with 20+ global destinations. And completed 35+ projects with 100% Job Success record.
              </div>
            </div>

            <Upwork />
          </div>

          {/* About */}
          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-3">
            <Image
              src={"/assets/author.jpg"}
              alt="UXJOY"
              width={72}
              height={72}
              className="rounded-full border-[8px] border-whiteAlpha-4"
            />

            <div className="text-center space-y-1">
              <p className="font-medium">Sohanur Rahman</p>
              <p className="text-whiteAlpha-56 text-sm">Product | UX/UI Designer</p>
            </div>

            <Link href="/" className="text-sm flex items-center gap-1">
              About Me <RiArrowRightUpLine size={16} />
            </Link>
          </div>

          {/* Design */}
          <div className="flex flex-col gap-5 rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-4">
            <div className="inline-block">
              <Pill text="Design Tools" />
            </div>

            <div className="flex gap-3">
              <Figma />
              <Framer />
              <AdobeXD />
              <Illustrator />
              <Photoshop />
              <Miro />
              <Spline />
            </div>

            <div className="space-y-1">
              <p className="font-medium">Design Stacks I'm familiar with</p>
              <p className="text-whiteAlpha-56 text-sm font-light">
                Skilled in various tools and frameworks to create seamless, effective UX/UI.
              </p>
            </div>
          </div>

          {/* Social Presence */}
          <div className="flex flex-col gap-5 relative rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-5 row-span-2">
            <div className="inline-block">
              <Pill text="UXJoy" />
            </div>

            <div className="space-y-1">
              <p className="font-medium">Find the social presence</p>
              <p className="text-whiteAlpha-56 text-sm font-light leading-relaxed">
                Connect with me across platforms to explore my work, industry insights, and creative projects.
              </p>
            </div>

            <div className="bg-black/20 w-full h-full border border-whiteAlpha-8 rounded-2xl shadow-lg">
              <div className="header flex items-center justify-between p-4 border-b border-whiteAlpha-8">
                <span className="flex items-center gap-3">
                  <Google />
                  <p>
                    uxjoy <span className="text-primary-default font-medium">|</span>
                  </p>
                </span>

                <RiCloseLine size={24} className="opacity-[16%]" />
              </div>

              <div className="list py-2 text-sm">
                <Link
                  href={"/"}
                  target="_blank"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 group hover:gap-3.5 hover:bg-whiteAlpha-2 ease-in-out duration-300"
                >
                  <RiEarthLine size={22} className="opacity-[48%]" />
                  <p className="text-whiteAlpha-72 font-extralight"> uxjoy.dev | Sohanur Rahman (Joy) </p>
                </Link>

                <Link
                  href={figmaPortfolioLink}
                  target="_blank"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 group hover:gap-3.5 hover:bg-whiteAlpha-2 ease-in-out duration-300"
                >
                  <FigmaLine />
                  <p className="text-whiteAlpha-72 font-extralight"> figma.portfolio.uxjoy </p>
                </Link>

                <Link
                  href={linkedinLink}
                  target="_blank"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 group hover:gap-3.5 hover:bg-whiteAlpha-2 ease-in-out duration-300"
                >
                  <RiLinkedinFill size={22} className="opacity-[48%]" />
                  <p className="text-whiteAlpha-72 font-extralight"> linkedin.com/in/uxjoy </p>
                </Link>

                <Link
                  href={dribbbleLink}
                  target="_blank"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 group hover:gap-3.5 hover:bg-whiteAlpha-2 ease-in-out duration-300"
                >
                  <RiDribbbleLine size={22} className="opacity-[48%]" />
                  <p className="text-whiteAlpha-72 font-extralight"> dribbble.com/uxjoy_ </p>
                </Link>

                <Link
                  href={twitterLink}
                  target="_blank"
                  className="flex items-center gap-2.5 px-3.5 py-2.5 group hover:gap-3.5 hover:bg-whiteAlpha-2 ease-in-out duration-300"
                >
                  <RiTwitterLine size={22} className="opacity-[48%]" />
                  <p className="text-whiteAlpha-72 font-extralight"> x.com/uxjoy_ </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Development */}
          <div className="flex flex-col gap-5 rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-4">
            <div className="inline-block">
              <Pill text="Development" />
            </div>

            <div className="flex gap-5">
              <RiReactjsFill size={40} />
              <RiTailwindCssFill size={40} />
              <RiNextjsFill size={40} />
              <RiJavascriptFill size={40} />
              <RiGithubFill size={40} />
              <RiHtml5Fill size={40} />
              {/* <RiCss3Fill size={40} /> */}
            </div>

            <div className="space-y-1">
              <p className="font-medium">Tech Stacks I'm familiar with</p>
              <p className="text-whiteAlpha-56 text-sm font-light">
                Proficient in multiple technologies to build and enhance product experiences.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="relative min-h-[226px] rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-3 overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-bgColor/80 before:z-10 before:bg-blend-multiply">
            <Image src={"/assets/location.jpg"} alt="UXJOY" layout="fill" objectFit="cover" />

            <div className="flex flex-col items-center justify-center gap-8 pt-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full h-full">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#5DBD25" fillOpacity="0.8" />
                <rect x="0.5" y="0.5" width="43" height="43" rx="21.5" stroke="white" strokeOpacity="0.24" />
                <path
                  d="M27.3033 26.4698L22 31.7731L16.6967 26.4698C13.7678 23.5408 13.7678 18.7921 16.6967 15.8632C19.6256 12.9343 24.3743 12.9343 27.3033 15.8632C30.2323 18.7921 30.2323 23.5408 27.3033 26.4698ZM22 24.4998C23.8409 24.4998 25.3333 23.0074 25.3333 21.1665C25.3333 19.3256 23.8409 17.8332 22 17.8332C20.1591 17.8332 18.6667 19.3256 18.6667 21.1665C18.6667 23.0074 20.1591 24.4998 22 24.4998ZM22 22.8332C21.0795 22.8332 20.3333 22.087 20.3333 21.1665C20.3333 20.246 21.0795 19.4998 22 19.4998C22.9205 19.4998 23.6667 20.246 23.6667 21.1665C23.6667 22.087 22.9205 22.8332 22 22.8332Z"
                  fill="white"
                />
              </svg>

              <div className="text-center space-y-1 w-full">
                <p className="font-medium text-lg">Dhaka, Bangladesh</p>
                <p className="text-whiteAlpha-64 text-sm">23.8041° N, 90.4152° E</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
