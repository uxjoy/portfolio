/* eslint-disable @next/next/no-img-element */
import ImageSlider from "./ImageSlider";

const RecentExploration = () => {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900/40 pb-12 pb-16 md:pb-120 relative space-y-8 md:space-y-20">
      {/* <div className="container">
        <div className="md:px-20 text-center">
          <div className="h2 text-slate-800 font-extrabold leading-tight">
            My Recent {highlightedText("Visual Explorations")}
          </div>
        </div>
      </div> */}
      <div className="container">
        <div className="divider w-full flex items-center gap-4 text-center">
          <span className="w-full h-[1px] bg-gray-200 dark:bg-stone-800"></span>
          <span className="text-nowrap text-lg dark:font-light w-auto text-gray-400 dark:text-stone-700">
            My recent visual Explorations
          </span>
          <span className="w-full h-[1px] bg-gray-200 dark:bg-stone-800"></span>
        </div>
      </div>

      <div className="space-y-2 md:space-y-2">
        {/* slide to right */}
        <ImageSlider duration="80" fromRight />

        {/* slide to left */}
        <ImageSlider duration="120" fromLeft />
      </div>
    </div>
  );
};

export default RecentExploration;
