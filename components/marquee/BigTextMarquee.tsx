import { marqueeTexts } from "@/utils/data/marqueeTextData";
import { RiShining2Fill } from "@remixicon/react";
import MarqueeAnimation from "react-fast-marquee";

const BigTextMarquee = () => {
  return (
    <>
      <div className={`leading-none -space-y-4 opacity-[3%]`}>
        <div className="text-5xl md:text-8xl uppercase font-semibold space-x-4 text-gray-200 dark:text-primary-50 overflow-hidden">
          <MarqueeAnimation speed={50} pauseOnHover={false} play={true} direction="left" className="overflow-hidden">
            {marqueeTexts.map((text, i) => {
              return (
                <h1 key={i} className="flex items-center gap-4">
                  <span className="pl-4">{text}</span>
                  <RiShining2Fill size={40} />
                </h1>
              );
            })}
          </MarqueeAnimation>

          <MarqueeAnimation
            speed={50}
            pauseOnHover={false}
            play={true}
            direction="right"
            className="!ml-0 overflow-hidden"
          >
            {marqueeTexts.map((text, i) => {
              return (
                <h1 key={i} className="flex items-center !gap-4">
                  <span className="pl-4">{text}</span>
                  <RiShining2Fill size={40} />
                </h1>
              );
            })}
          </MarqueeAnimation>
        </div>
      </div>
    </>
  );
};

export default BigTextMarquee;
