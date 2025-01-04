import { getDribbbleShots } from "@/utils/getDribbbleShots";
import { FC } from "react";
import Marquee from "react-fast-marquee";
import ShotsCard from "./ShotsCard";

type ImageSliderProps = {
  fromLeft?: boolean;
  fromRight?: boolean;
  duration?: string;
};

const ImageSlider: FC<ImageSliderProps> = async ({ fromLeft, fromRight, duration }) => {
  const shots = await getDribbbleShots();

  const halfLength = Math.ceil(shots.length / 2);
  const shotsRow1 = shots.slice(0, halfLength);
  const shotsRow2 = shots.slice(halfLength);

  // style
  const styles: any = {
    duration: {
      "--time": `${duration}s`,
    },
  };

  return (
    <>
      <Marquee speed={50} pauseOnHover={true} play={true} direction="left">
        {shotsRow1 &&
          shotsRow1.map((shot) => (
            <ShotsCard key={shot.id} title={shot.title} imgURL={shot.images.two_x} url={shot.html_url} />
          ))}
      </Marquee>

      <Marquee speed={60} pauseOnHover={true} play={true} direction="right">
        {shotsRow2 &&
          shotsRow2.map((shot) => (
            <ShotsCard key={shot.id} title={shot.title} imgURL={shot.images.two_x} url={shot.html_url} />
          ))}
      </Marquee>

      {/* <div className="scroll relative flex w-full overflow-hidden" style={styles.duration}>
        <div
          className={`flex items-center justify-center whitespace-nowrap ${
            fromRight === true ? "fromRight" : fromLeft === true ? "fromLeft" : ""
          }`}
        >
          {shotsRow1 &&
            shotsRow1.map((shot) => (
              <ShotsCard key={shot.id} title={shot.title} imgURL={shot.images.two_x} url={shot.html_url} />
            ))}
        </div>

        <div
          className={`flex items-center justify-center whitespace-nowrap ${
            fromRight === true ? "fromRight" : fromLeft === true ? "fromLeft" : ""
          }`}
        >
          {shotsRow2 &&
            shotsRow2.map((shot) => (
              <ShotsCard key={shot.id} title={shot.title} imgURL={shot.images.two_x} url={shot.html_url} />
            ))}
        </div>
      </div> */}
    </>
  );
};

export default ImageSlider;
