import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import AdobeXD from "../svg/AdobeXD";
import Figma from "../svg/Figma";
import Framer from "../svg/Framer";
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
        <div className="grid grid-cols-12 grid-rows-3 gap-4">
          <div className="rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-5 space-y-4">
            <div>My Process</div>

            <div className="grid grid-cols-4 gap-2">
              <ProcessCard title="Discover" step="Step 1" />
              <ProcessCard title="Define" step="Step 2" />
              <ProcessCard title="Develope" step="Step 3" />
              <ProcessCard title="Deliver" step="Step 4" />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-2">
            <span className="">
              <span className="text-[72px] font-bold leading-tight">5</span>{" "}
              years{" "}
              <span className="text-primary-default font-semibold"> + </span>
            </span>
            <div className="text-whiteAlpha-56 font-light">of Experience</div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-8 col-span-5">
            <Rating />

            <div className="content space-y-1">
              <p className="text-whiteAlpha-72">
                <span className="font-semibold text-lg text-white">
                  {" "}
                  Top 10%{" "}
                </span>{" "}
                of Talent on Upwork
              </p>
              <div className="text-whiteAlpha-56 font-light">
                I’ve collaborated with 20+ global destinations. And completed
                35+ projects with 100% Job Success record.
              </div>
            </div>

            <Upwork />
          </div>

          <div className="flex flex-col items-center justify-center gap-4 rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-8 col-span-3">
            <Image
              src={"/assets/author.jpg"}
              alt="UXJOY"
              width={72}
              height={72}
              className="rounded-full border-[8px] border-whiteAlpha-4"
            />

            <div className="text-center space-y-1">
              <p className="font-medium">Sohanur Rahman</p>
              <p className="text-whiteAlpha-56 text-sm">
                Product | UX/UI Designer
              </p>
            </div>

            <Link href="/" className="text-sm flex items-center gap-1">
              About Me <RiArrowRightUpLine size={16} />
            </Link>
          </div>

          <div className="flex flex-col justify-between rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-4">
            <div className="pill py-2 pl-2.5 pr-3 rounded-full bg-whiteAlpha-4 border border-whiteAlpha-4 inline-flex items-center gap-2">
              <svg
                widt
                h="14"
                hei
                ght="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7152 6.12488L12.4164 6.54564C12.5545 6.62853 12.5993 6.80768 12.5165 6.94581C12.4918 6.98682 12.4575 7.02118 12.4164 7.04585L6.9999 10.2957L1.58342 7.04585C1.4453 6.96296 1.4005 6.78382 1.48338 6.64568C1.50801 6.60462 1.54237 6.57026 1.58342 6.54564L2.28464 6.12488L6.9999 8.95405L11.7152 6.12488ZM11.7152 8.86655L12.4164 9.28731C12.5545 9.3702 12.5993 9.54934 12.5165 9.68748C12.4918 9.72848 12.4575 9.76284 12.4164 9.78752L7.30003 12.8573C7.11528 12.9681 6.88452 12.9681 6.69978 12.8573L1.58342 9.78752C1.4453 9.70463 1.4005 9.52549 1.48338 9.38735C1.50801 9.34628 1.54237 9.31193 1.58342 9.28731L2.28464 8.86655L6.9999 11.6957L11.7152 8.86655ZM7.30003 0.763305L12.4164 3.83313C12.5545 3.91601 12.5993 4.09517 12.5165 4.23329C12.4918 4.27435 12.4575 4.30871 12.4164 4.33333L6.9999 7.58322L1.58342 4.33333C1.4453 4.25046 1.4005 4.0713 1.48338 3.93317C1.50801 3.89212 1.54237 3.85776 1.58342 3.83313L6.69978 0.763305C6.88452 0.652466 7.11528 0.652466 7.30003 0.763305Z"
                  fill="white"
                />
              </svg>
              <p className="text-white text-xs flex-none"> Design Tools </p>
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
              <p className="text-whiteAlpha-56 text-sm">
                Primarily focused on the JavaScript ecosystem, but always eager
                to explore new technologies.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-5 row-span-2">
            {" "}
            6{" "}
          </div>

          <div className="rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-4">
            {" "}
            7{" "}
          </div>
          <div className="rounded-2xl bg-whiteAlpha-4 border border-whiteAlpha-4 p-6 col-span-3">
            {" "}
            8{" "}
          </div>

          {/* <div className="bg-primary-900 h-[200px] col-span-"> 4 </div>
          <div className="bg-primary-900 h-[200px] col-span-"> 5 </div>
          <div className="bg-primary-900 h-[200px] col-span-"> 6 </div>
          <div className="bg-primary-900 h-[200px] col-span-"> 7 </div>
          <div className="bg-primary-900 h-[200px] col-span-"> 8 </div> */}
          {/* <div className="bg-primary-900 h-[200px] col-span-4"> 5 </div>
          <div className="bg-primary-900 h-[200px] col-span-5 row-span-3">
            6
          </div>

          <div className="bg-primary-900 h-[200px] col-span-4"> 7 </div>
          <div className="bg-primary-900 h-[200px] col-span-3"> 8 </div> */}
          {/* <div className="bg-primary-900 h-[200px] col-span-3"> 9 </div> */}
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
