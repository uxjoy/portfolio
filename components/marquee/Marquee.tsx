import { marqueeTexts } from "@/utils/data/marqueeTextData";
import { RiShining2Fill } from "@remixicon/react";
import MarqueeAnimation from "react-fast-marquee";

const Marquee = () => {
  return (
    <>
      <div className="py-4 md:py-6 flex items-center gap-4 text-base uppercase font-semibold dark:font-medium space-x-4 bg-gradient-to-r from-sky-300  via-primary-300 to-sky-300 text-primary-950">
        <MarqueeAnimation speed={50} pauseOnHover={false} play={true} direction="left">
          {marqueeTexts.map((text, i) => {
            return (
              <p key={i} className="flex items-center gap-4">
                <span className="pl-4">{text}</span>
                <RiShining2Fill size={14} />
              </p>
            );
          })}
        </MarqueeAnimation>
      </div>

      {/* <div className="relative flex overflow-x-hidden text-base uppercase font-semibold dark:font-medium space-x-4 bg-gradient-to-r from-sky-300  via-primary-300 to-sky-300 text-primary-950">
      <div className="py-4 md:py-6 animate-marquee whitespace-nowrap flex items-center gap-4">
        {marqueeTexts.map((text, i) => {
          return (
            <p key={i} className="flex items-center gap-4">
              {text}
              <RiShining2Fill size={14} />
            </p>
          );
        })}
      </div>

      <div className="absolute top-0 py-4 md:py-6 animate-marquee2 whitespace-nowrap flex items-center gap-4">
        {marqueeTexts.map((text, i) => {
          return (
            <p key={i} className="flex items-center gap-4">
              {text}
              <RiShining2Fill size={14} />
            </p>
          );
        })}
      </div>
    </div> */}
    </>
  );
};

export default Marquee;

// Marquee Text
