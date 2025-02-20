/* eslint-disable @next/next/no-img-element */
import Divider from "../Divider";
import ImageSlider from "./ImageSlider";

const RecentExploration = () => {
  return (
    <div className="bg-slate-400/5 dark:bg-transparent pb-12 md:pb-120 relative space-y-9 md:space-y-24">
      <div className="container hidden md:block">
        <Divider
          starText="other projects"
          centerText="visual explorations"
          endText="side projects"
        />
      </div>

      <div className="space-y-2 md:space-y-2">
        {/* slide to right */}
        <ImageSlider duration="80" fromRight />

        {/* slide to left */}
        {/* <ImageSlider duration="120" fromLeft /> */}
      </div>
    </div>
  );
};

export default RecentExploration;
