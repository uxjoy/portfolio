import { RiShining2Fill } from "@remixicon/react";
import { marqueeTexts } from "../../src/utils/data/marqueeTextData";

const Marquee = () => {
  return (
    <div className="relative flex overflow-x-hidden text-base uppercase font-semibold dark:font-medium space-x-4 bg-gradient-to-r from-sky-300  via-primary-300 to-sky-300 text-primary-950">
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
    </div>
  );
};

export default Marquee;

// Marquee Text
