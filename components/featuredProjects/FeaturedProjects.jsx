/* eslint-disable react/jsx-no-undef */
"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const FeaturedProjects = () => {
  const settings = {
    rewind: true,
    gap: "1.5rem",
    perMove: 1,
    type: "loop",
    infinite: true,
    focus: "center",
    pagination: true,
    padding: "20%",
    pauseOnHover: true,
    autoplay: true,
    keyboard: true,
    isActive: true,
    pauseOnFocus: true,
    slidefocus: true,

    width: "100%",
    height: "600px",
    snap: true,
    slideFocus: true,
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
      640: {
        // width: 1640,
        height: "1200px",
      },
      768: {
        // width: 768,
        height: "1200px",
      },
      1024: {
        // width: 1024,
        height: "1200px",
      },
      1400: {
        // width: 1024,
        height: "1200px",
      },
    },
  };

  return (
    <div className="py-24 md:pt-0 md:pb-24 relative">
      <Splide options={settings} tag="div" aria-label="React Splide Example">
        <SplideSlide className="relative h-[600p] rounded-2xl md:rounded-[20px] overflow-hidden">
          <Image
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            src={"/assets/featured/ShareTrip_1.jpg"}
            alt={"title"}
            fill
            priority={false}
            quality={80}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide className="relative h-[600p] rounded-2xl md:rounded-[20px] overflow-hidden">
          <Image
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            src={"/assets/featured/ShareTrip_2.jpg"}
            alt={"title"}
            fill
            priority={false}
            quality={80}
            loading="lazy"
          />
        </SplideSlide>
        <SplideSlide className="relative h-[600p] rounded-2xl md:rounded-[20px] overflow-hidden">
          <Image
            className="object-cover w-full h-full group-hover:scale-110 duration-300"
            src={"/assets/featured/ShareTrip_3.jpg"}
            alt={"title"}
            fill
            priority={false}
            quality={80}
            loading="lazy"
          />
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
