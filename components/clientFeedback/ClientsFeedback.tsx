"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Heading from "../Heading";
import Quote from "../svg/Quote";
import ClientCard from "./ClientCard";
import SwiperNavigationBtn from "./SwiperNavigationBtn";
import { clientFeedbackList } from "../data/clientData";

const ClientsFeedback = () => {
  const swiperNavigation = useSwiper();

  return (
    <div className="py-120 relative">
      <div className="container mx-auto space-y-20">
        <Heading text1="Clients" text2="Feedback" />

        <div className="w-[960px] mx-auto relative space-y-10">
          <Quote />

          <Swiper
            spaceBetween={56}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            // navigation={true}
            // pagination={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {clientFeedbackList &&
              clientFeedbackList.map((data, i) => (
                <SwiperSlide key={i}>
                  <ClientCard data={data} />
                </SwiperSlide>
              ))}

            {/* Custom Navigation Button Component */}
            <SwiperNavigationBtn />
            {/* Custom Navigation Button Component */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
