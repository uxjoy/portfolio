"use client";
import { useSwiper } from "swiper/react";
import { clientFeedbackList } from "../../src/utils/data/clientData";
import Heading from "../Heading";
import ClientCard from "./ClientCard";

const ClientsFeedback = () => {
  const swiperNavigation = useSwiper();

  return (
    <div className="py-12 md:py-120">
      <div className="container space-y-8 md:space-y-20">
        <Heading text1="Clients" text2="Feedback" />

        <div className="columns-3 gap-6 space-y-6 w-full">
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
