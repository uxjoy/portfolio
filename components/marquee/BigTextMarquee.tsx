import { RiShining2Fill } from "@remixicon/react";
import { marqueeTextsBig } from "../data/marqueeTextData";

const BigTextMarquee = () => {
  return (
    <div className="leading-none -space-y-4">
      <div className="relative flex overflow-x-hidden text-5xl md:text-8xl uppercase font-semibold space-x-4 text-slate-200">
        <div className="py-4 animate-slidtoleft whitespace-nowrap flex items-center gap-4 ">
          {marqueeTextsBig.map((text, i) => {
            return (
              <span key={i} className="flex items-center gap-4">
                {text}
                <RiShining2Fill size={40} />
              </span>
            );
          })}
        </div>

        <div className="absolute top-0 py-4 animate-slidtoleft2 whitespace-nowrap flex items-center gap-4">
          {marqueeTextsBig.map((text, i) => {
            return (
              <span key={i} className="flex items-center gap-4">
                {text}
                <RiShining2Fill size={40} />
              </span>
            );
          })}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden text-5xl md:text-8xl uppercase font-semibold space-x-4 text-slate-200">
        <div className="py-4 animate-slidetoright whitespace-nowrap flex items-center gap-4 ">
          {marqueeTextsBig.map((text, i) => {
            return (
              <span key={i} className="flex items-center gap-4">
                {text}
                <RiShining2Fill size={40} />
              </span>
            );
          })}
        </div>

        <div className="absolute top-0 py-4 animate-slidetoright2 whitespace-nowrap flex items-center gap-4">
          {marqueeTextsBig.map((text, i) => {
            return (
              <span key={i} className="flex items-center gap-4">
                {text}

                <RiShining2Fill size={40} />
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BigTextMarquee;
