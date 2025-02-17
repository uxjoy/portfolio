import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { educationHistory, workHistoryList } from "../../src/utils/data/aboutTextsData";
import Heading from "../Heading";
import AdobeXD from "../svg/AdobeXD";
import Figma from "../svg/Figma";
import Framer from "../svg/Framer";
import Illustrator from "../svg/Illustrator";
import Miro from "../svg/Miro";
import Photoshop from "../svg/Photoshop";
import Spline from "../svg/Spline";

const About = () => {
  return (
    <div className="bg-slate-400/ dark:bg-transparent py-12 md:py-120">
      <div className="container space-y-8 md:space-y-14">
        <Heading text1="info." text2="about me" bgDark />

        <div className="inline-grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="w-full p-5 md:p-6 bg-white border dark:bg-whiteAlpha-4 border-gray-100 dark:border-whiteAlpha-4 rounded-2xl flex items-center">
            <p className="text-gray-500 dark:text-whiteAlpha-64 dark:font-light text-sm md:text-lg leading-normal mb-0">
              {highlightedText(`✨ Strong commitment to collaboration and solutions-oriented
              problem-solving ✨`)}
              Use various web design software to develop
              {highlightedText(`customer-focused`)} websites and designs. Committed to{" "}
              {highlightedText(`high standards`)} of web design, user experience, usability and speed for multiple types
              of end-users.
            </p>
          </div>

          <div className="order-first md:order-none row-span-2 w-full h-[380px] md:h-[480px] p-6 text-gray-500 text-lg bg-white dark:bg-whiteAlpha-4 border border-gray-100 dark:border-whiteAlpha-4 rounded-2xl relative">
            <Image
              className="w-full h-full object-cover"
              src={"/assets/author_lg.webp"}
              alt="Author Image"
              fill
              priority={false}
              quality={100}
              loading="lazy"
            />

            <div className="text-white absolute bottom-6 space-y-2">
              <p className="bg-gray-950 inline-block text-sm px-3.5 py-2 rounded-lg bg bg-opacity-40 backdrop-blur-md border border-transparent">
                Hi 👋
              </p>
              <p className="bg-gray-950 text-sm px-3.5 py-2 rounded-lg bg bg-opacity-40 backdrop-blur-md border border-transparent">
                My name is Md. Sohanur Rahman
              </p>
            </div>
          </div>

          <div className="w-full p-6 text-gray-500 text-lg bg-white dark:bg-whiteAlpha-4 border border-gray-100 dark:border-whiteAlpha-4 rounded-2xl space-y-8 md:space-y-6">
            <div className="text-base flex justify-between items-center">
              <span className="uppercase text-gray-900 dark:text-white font-bold dark:font-medium">Experience</span>
              <span className="text-xs py-1 px-2.5 leading-base bg-primary-300 dark:font-semibold text-primary-950 rounded-full">
                5+ yrs
              </span>
            </div>

            <div className="list [&>*:first-child]:pt-0 [&>*:last-child]:pb-0  [&>*:last-child]:border-b-0 j">
              {workHistoryList.map(({ designation, company, url, duration }, i) => (
                <LinkComponent
                  className={"py-5 border-b border-gray-100 dark:border-opacity-5"}
                  key={i}
                  title={designation}
                  organization={company}
                  duration={duration}
                  url={url}
                />
              ))}
            </div>
          </div>

          {/* Eucation Card Start */}
          <div className="w-full p-6 text-gray-500 text-lg bg-white dark:bg-whiteAlpha-4 border border-gray-100 dark:border-whiteAlpha-4 rounded-2xl space-y-6 hidden md:block">
            <div className="text-base text-gray-900 dark:text-white uppercase font-bold dark:font-medium">
              Education
            </div>

            <LinkComponent
              title={educationHistory.title}
              organization={educationHistory.institution}
              duration={educationHistory.duration}
              url={educationHistory.url}
            />
          </div>

          {/* ================== */}

          <div className="w-full p-6 text-gray-500 text-lg bg-white dark:bg-whiteAlpha-4 border border-gray-100 dark:border-whiteAlpha-4 rounded-2xl space-y-6 md:hidden">
            <div className="text-base text-gray-900 dark:text-white uppercase font-bold dark:font-medium">
              Education
            </div>

            <LinkComponent
              title={educationHistory.title}
              organization={educationHistory.institution}
              duration={educationHistory.duration}
              url={educationHistory.url}
              isEducation
            />
          </div>
          {/* Eucation Card Start */}

          <div className="w-full p-6 text-gray-500 text-lg bg-white dark:bg-whiteAlpha-4 border border-gray-100 dark:border-whiteAlpha-4 rounded-2xl space-y-6">
            <div className="text-base text-gray-900 dark:text-white uppercase font-bold dark:font-medium">
              Design Tools
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// Highlighted Text
export const highlightedText = (text: string) => {
  return <span className="text-gray-900 dark:text-white dark:font-light"> {text} </span>;
};

type LinkComponentProps = {
  title: string;
  organization: string;
  duration: string;
  url: string;
  className?: string;
  isEducation?: boolean;
};

// Link Component
const LinkComponent: FC<LinkComponentProps> = ({ title, organization, duration, url, className, isEducation }) => {
  return (
    <>
      {isEducation ? (
        <Link
          href={url}
          target="_blank"
          className={`block group ease-in-out ${className} ${isEducation ? "space-y-3" : "space-y-1"}`}
        >
          <div className={`flex ${isEducation ? "flex-col justify-start gap-1" : "items-center justify-between"}`}>
            <h4 className="text-sm text-gray-900 dark:text-white/80 font-semibold dark:font-medium dark:group-hover:text-white duration-300">
              {title}
            </h4>

            <p className="text-xs flex items-center text-gray-600 dark:text-whiteAlpha-64 dark:font-light gap-0.5 group-hover:text-stone-400 group-hover:trangray-x-1 duration-300">
              <span className="group-hover:underline">{organization}</span>
              <RiArrowRightUpLine size={16} />
            </p>
          </div>

          <p className="text-[10px] md:text-[11px] leading-none text-gray-600 dark:text-whiteAlpha-64 font-light">
            {duration}
          </p>
        </Link>
      ) : (
        <Link href={url} target="_blank" className={`block space-y-1 group ease-in-out duration-200 ${className}`}>
          <div className="flex items-center justify-between">
            <h4 className="text-sm text-gray-900 dark:text-white/80 font-semibold dark:font-normal dark:group-hover:text-white duration-300">
              {title}
            </h4>
            <span className="text-[10px] md:text-[12px] leading-none text-gray-600 dark:text-whiteAlpha-64 dark:group-hover:text-primary-300 scale-100 group-hover:scale-105 font-light duration-300">
              {duration}
            </span>
          </div>

          <p className="text-xs flex items-center text-gray-600 dark:text-whiteAlpha-64 dark:font-light gap-0.5 group-hover:text-stone-400 group-hover:trangray-x-1 duration-300">
            <span className="group-hover:underline">{organization}</span>
            <RiArrowRightUpLine size={16} />
          </p>
        </Link>
      )}

      {/* <div className="divider w-full h-[1px] bg-white bg-opacity-5"></div> */}
    </>
  );
};
