/* eslint-disable react/jsx-no-undef */
"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";

const FeaturedProjects = () => {
  const settings = {
    rewind: true,

    perMove: 1,
    type: "loop",
    infinite: true,
    focus: "center",
    pagination: true,
    pauseOnHover: true,
    autoplay: false,
    keyboard: true,
    isActive: true,
    pauseOnFocus: true,
    slidefocus: true,

    // width: "100%",
    // snap: true,
    // slideFocus: true,
    // height: "600px",
    // trimSpace: false,
    // rewindByDrag: true,
    // loading: "lazy",
    // perPage: 3,
    // start: 3,
    // moveBy: 1,
    // cover: true,
    // overflow: "visible",
    // interval: 5000,
    // drag: true,
    // isnavigation: true,
    // isNavigation: true,
    // arrows: true,
    // fixedwidth: 900,
    // fixedheight: 600,
    breakpoints: {
      425: {
        gap: "0.5rem",
        height: "300px",
        arrows: false,
      },
      640: {
        gap: "1rem",
        height: "380px",
        padding: "10%",
      },
      768: {
        gap: "1.5rem",
        height: "400px",
        padding: "10%",
      },
      1024: {
        gap: "1.5rem",
        height: "500px",
        padding: "10%",
      },
      1280: {
        gap: "1.5rem",
        height: "500px",
        padding: "10%",
      },
      1440: {
        gap: "1.5rem",
        height: "580px",
        padding: "20%",
      },
      1920: {
        gap: "1.5rem",
        height: "620px",
        padding: "20%",
      },
      2560: {
        gap: "2rem",
        height: "1000px",
        padding: "20%",
      },
    },
  };

  return (
    <div className="py-24 md:pt-0 md:pb-24 relative">
      <Splide options={settings} tag="div" aria-label="React Splide Example">
        <SplideSlide className="relative h-[500px] rounded-2xl md:rounded-[20px] overflow-hidden">
          <div className="image-card w-full h-full">
            <Image
              className="object-cover my-wh group-hover:scale-110 duration-300"
              src={"/assets/featured/st_flight.webp"}
              alt={"title"}
              fill
              priority={false}
              quality={100}
              loading="lazy"
            />
          </div>
        </SplideSlide>
        <SplideSlide className="relative h-[500px] rounded-2xl md:rounded-[20px] overflow-hidden">
          <div className="image-card w-full h-full">
            <Image
              className="object-cover my-wh group-hover:scale-110 duration-300"
              src={"/assets/featured/st_hotel.webp"}
              alt={"title"}
              fill
              priority={false}
              quality={100}
              loading="lazy"
            />
          </div>
        </SplideSlide>
        <SplideSlide className="relative h-[500px] rounded-2xl md:rounded-[20px] overflow-hidden">
          <div className="image-card w-full h-full">
            <Image
              className="object-cover my-wh group-hover:scale-110 duration-300"
              src={"/assets/featured/st_shop.webp"}
              alt={"title"}
              fill
              priority={false}
              quality={100}
              loading="lazy"
            />
          </div>
        </SplideSlide>
      </Splide>

      {/* <Splide aria-label="My Favorite Images">
        <SplideSlide>
          <div className="relative w-[900px h-[600px] rounded-2xl md:rounded-[20px] overflow-hidden bg-black">
            <Image
              className="object-cover w-full h-full group-hover:scale-110 duration-300 bg-black opacity-25"
              src={"/assets/featured/ShareTrip_1.jpg"}
              alt={"title"}
              fill
              priority={false}
              quality={80}
              loading="lazy"
            />
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative w-[900px h-[600px] rounded-2xl md:rounded-[20px] overflow-hidden bg-black">
            <Image
              className="object-cover w-full h-full group-hover:scale-110 duration-300 bg-black opacity-25"
              src={"/assets/featured/ShareTrip_1.jpg"}
              alt={"title"}
              fill
              priority={false}
              quality={80}
              loading="lazy"
            />
          </div>
        </SplideSlide>
      </Splide> */}

      {/* <div className="relative w-[900px h-[600px] rounded-2xl md:rounded-[20px] overflow-hidden bg-black">
          <Image
            className="object-cover w-full h-full group-hover:scale-110 duration-300 bg-black opacity-25"
            src={"/assets/featured/ShareTrip_1.jpg"}
            alt={"title"}
            fill
            priority={false}
            quality={80}
            loading="lazy"
          />
        </div> */}
    </div>
  );
};

export default FeaturedProjects;
