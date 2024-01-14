import { useSwiper } from "swiper/react";

const SwiperNavigationBtn = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute right-0 bottom-0 text-3xl flex z-10 bg-white text-slate-800">
      <button
        className="w-14 h-14 flex items-center justify-center bg-white outline-none rounded-xl hover:text-indigo-500 ease-in-out duration-300 text-slate-400"
        onClick={() => swiper.slidePrev()}
      >
        <i className="ri-arrow-left-line"></i>
      </button>

      <button
        className="w-14 h-14 flex items-center justify-center bg-white outline-none rounded-xl hover:text-indigo-500 ease-in-out duration-300"
        onClick={() => swiper.slideNext()}
      >
        <i className="ri-arrow-right-line"></i>
      </button>
    </div>
  );
};

export default SwiperNavigationBtn;
