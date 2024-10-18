import { RiArrowLeftLine, RiArrowRightLine } from "@remixicon/react";
import { useSwiper } from "swiper/react";

const SwiperNavigationBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="md:absolute md:right-0 md:bottom-0 text-3xl flex justify-end gap-6 md:gap-0 z-10 text-gray-800">
      <button
        className=" md:w-14 md:h-14 flex items-center justify-center outline-none rounded-xl hover:text-indigo-500 ease-in-out duration-300 text-gray-400 dark:text-zinc-600"
        aria-label="prev"
        onClick={() => swiper.slidePrev()}
      >
        <RiArrowLeftLine size={32} />
      </button>

      <button
        className=" md:w-14 md:h-14 flex items-center justify-center outline-none rounded-xl dark:text-white hover:text-indigo-500 ease-in-out duration-300"
        aria-label="next"
        onClick={() => swiper.slideNext()}
      >
        <RiArrowRightLine size={32} />
      </button>
    </div>
  );
};

export default SwiperNavigationBtn;
