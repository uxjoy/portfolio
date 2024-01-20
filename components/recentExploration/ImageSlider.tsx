import { FC } from "react";
import ShotsCard from "./ShotsCard";
import { getDribbbleShots } from "./getShots";

type ImageSliderProps = {
  fromLeft?: boolean;
  fromRight?: boolean;
  duration?: string;
};

const ImageSlider: FC<ImageSliderProps> = async ({
  fromLeft,
  fromRight,
  duration,
}) => {
  // get dribbble shots
  const shots = await getDribbbleShots();

  // style
  const styles: any = {
    duration: {
      "--time": `${duration}s`,
    },
  };

  return (
    <div
      className="scroll relative flex w-full overflow-hidden"
      style={styles.duration}
    >
      <div
        className={`flex items-center justify-center whitespace-nowrap ${
          fromRight === true
            ? "fromRight"
            : "" || fromLeft === true
            ? "fromLeft"
            : ""
        }`}
      >
        {shots.map((shot, i) => (
          <ShotsCard
            key={i}
            title={shot.title}
            imgURL={shot.images.two_x}
            url={shot.html_url}
          />
        ))}
      </div>

      <div
        className={`flex items-center justify-center whitespace-nowrap ${
          fromRight === true
            ? "fromRight"
            : "" || fromLeft === true
            ? "fromLeft"
            : ""
        }`}
      >
        {shots.map((shot, i) => (
          <ShotsCard
            key={i}
            title={shot.title}
            imgURL={shot.images.two_x}
            url={shot.html_url}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
