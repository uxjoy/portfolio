"use client";
import { RiStarFill } from "@remixicon/react";
import { useSwiper } from "swiper/react";
import { clientFeedbackList } from "../../src/utils/data/clientData";
import ClientCard from "./ClientCard";

const ClientsFeedback = () => {
  const swiperNavigation = useSwiper();

  return (
    <div className="py-12 md:py-120">
      <div className="container space-y-4">
        {/* <Heading text1="Clients" text2="Feedback" /> */}

        <div className="flex items-center justify-center font-light gap-3">
          <p className="text-yellow-500 flex items-center gap-2">
            <RiStarFill size={18} /> <span className="text-white mt-0.5 font-medium">5.0</span>
          </p>
          <div className="line w-0.5 h-4 bg-whiteAlpha-8"></div>
          <p className="mt-0.5 text-whiteAlpha-72 font-extralight text-sm md:text-base">Top 10% of Talent on Upwork</p>
        </div>

        <div className="section-header text-center">
          <h1 className="mainTitle">
            <span>Look at some of the </span>
            <span className="text-primary-default">impact I've made for others</span>
          </h1>
        </div>

        <div className="sm:columns-2 lg:columns-3 space-y-3 md:space-y-5 lg:space-y-6 gap-4 md:gap-5 lg:gap-6 w-full pt-6 md:pt-10">
          {clientFeedbackList &&
            clientFeedbackList.map((data, i) => (
              <div className="w-full break-inside-avoid" key={i}>
                <ClientCard data={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
