/* eslint-disable react/jsx-no-undef */
"use client";

import { featuredProjects } from "@/utils/data/projectListData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import * as motion from "motion/react-client";
import Image from "next/image";

// import "photoswipe/dist/photoswipe.css";

const FeaturedProjects = () => {
  const settings = {
    rewind: true,

    perMove: 1,
    type: "loop",
    infinite: true,
    focus: "center",
    pagination: false,
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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.75,
        // delay: 1,
        // scale: { type: "spring", visualDuration: 0.4, bounce: 0.2 },
      }}
      className="py-24 md:pt-0 md:pb-24 relative"
    >
      <Splide options={settings} tag="div" aria-label="React Splide Example">
        {featuredProjects.map(({ title, imageURL }, i) => (
          <SplideSlide
            className="relative h-[500px] rounded-2xl md:rounded-[20px] overflow-hidden"
            key={i}
          >
            <div className="flex gap-1.5 items-center bg-black/20 p-1 pr-2 md:p-2 md:pr-3.5 rounded-full backdrop-blur-sm absolute bottom-3 md:bottom-7 left-3 md:left-7 z-50 text-xs sm:text-sm">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.94172 14.4926C1.53528 14.5704 1.30349 14.6356 1.16695 14.6928C0.422324 13.2921 0 11.696 0 10.0016C0 4.47992 4.47567 0 9.99921 0C14.0557 0 17.5454 2.41703 19.114 5.88535L18.9029 5.90917L12.8507 4.79117C12.8094 4.78164 12.7681 4.79911 12.7379 4.83088C12.7094 4.86263 12.6983 4.90392 12.711 4.94521L13.0301 6.06797C13.0444 6.12196 13.0936 6.15531 13.1476 6.15849L16.6088 6.17754L15.9753 6.2506C15.9721 6.2506 15.9704 6.25378 15.9704 6.25378L12.9698 6.74765C11.063 7.1415 9.83885 7.35589 9.32126 7.38288C9.37049 7.30507 9.407 7.2336 9.43875 7.16532C9.52131 7.10179 9.6261 7.03351 9.75471 6.95411C10.1421 6.85882 10.2008 6.6079 10.2008 6.46657V6.39829C10.2008 6.303 10.1612 6.20613 10.0881 6.11243L10.0643 6.08385C10.0421 6.05526 10.0056 6.03779 9.96904 6.03779H9.92935C9.79122 6.03779 9.64199 6.06161 9.46257 6.12038C9.40383 6.14738 9.34985 6.17436 9.29746 6.20136C9.18472 6.04574 8.918 5.94251 8.43058 5.86469C8.42106 5.86151 8.39882 5.86151 8.38931 5.86469C7.8225 5.92504 7.43033 6.00763 7.216 6.10767C6.74288 6.21407 6.06176 6.49199 5.18694 6.93346C3.67707 7.82436 2.94356 8.63586 2.94356 9.41242C2.94356 9.6141 3.01342 9.83325 3.15472 10.0572C3.36111 10.4034 3.79296 10.6686 4.48201 10.8687C5.08533 10.9862 5.69183 11.0878 6.26975 11.1736C6.91435 11.3149 7.27315 11.5484 7.33667 11.866C7.32872 11.8803 7.32397 11.8977 7.32397 11.9168V11.9978C7.32397 12.047 7.29697 12.1899 7.05882 12.4599C6.72224 12.7886 6.38882 13.0253 6.06335 13.1586L5.26157 13.5461C4.39151 13.8956 3.27061 14.2115 1.94172 14.4926ZM19.3285 6.39988C19.2221 6.48721 18.9775 6.5809 18.4489 6.73178C18.444 6.73178 18.4267 6.73654 18.4218 6.73654C18.044 6.78736 17.6646 6.84136 17.285 6.90011L13.581 7.9784C13.1889 8.83278 12.8523 9.6014 12.5824 10.2636L12.5601 10.3033C12.5379 10.3367 12.4363 10.5368 11.8727 11.9279C11.7044 12.2757 11.5774 12.5742 11.4884 12.814C11.4694 12.8696 11.3964 13.0428 11.0503 13.8272L10.493 15.1199C10.4882 15.1278 10.4834 15.1374 10.4787 15.1438C10.231 15.4708 10.104 15.5281 10.004 15.5407C9.99603 15.5424 9.98492 15.5424 9.97539 15.5424C9.95633 15.5424 9.9357 15.5407 9.92458 15.5344C9.75947 15.4708 9.68325 15.3851 9.68325 15.2708C9.68325 14.9325 9.95793 14.1528 10.5454 12.8172C11.1169 11.4578 11.7853 9.84119 12.5284 8.00699C12.5316 8.00222 12.5379 7.98793 12.5411 7.98317C12.5903 7.89582 12.6363 7.80054 12.6792 7.70049C11.1677 7.98317 10.258 8.14197 9.97381 8.17056L9.49115 8.23885C9.45146 8.23885 9.41811 8.23408 9.39112 8.22456L9.19583 8.23885C8.98944 8.23885 8.83068 8.20232 8.6989 8.14356C8.48139 8.37065 8.22418 8.61363 7.91776 8.88676C7.43828 9.23932 7.26204 9.28538 7.1525 9.28538H7.10646C6.78575 9.24885 6.60315 9.06622 6.60315 8.79783C6.60315 8.66921 6.67619 8.58346 7.13821 8.30396C7.72565 7.81642 8.05429 7.4861 8.23847 7.26378C8.28451 7.07321 8.38136 6.89853 8.5306 6.73496C8.51154 6.73019 8.48932 6.73018 8.47028 6.72225C7.87172 6.76036 7.07946 7.00969 6.1205 7.46069C5.84583 7.56233 5.37271 7.85453 4.70588 8.33095C4.27244 8.72003 3.98825 9.07893 3.87076 9.39336C3.84694 9.49024 3.839 9.52993 3.83742 9.54422C3.83742 9.82372 4.38517 10.0603 5.33936 10.1842C6.84449 10.4177 7.20647 10.6051 7.34778 10.7242C7.73042 10.9433 8.01461 11.2943 8.1829 11.75L8.19243 11.7993L8.1956 12.1883C8.1956 13.3556 6.44281 14.3021 2.67682 15.1643L1.75439 15.3422C1.74644 15.3454 1.73215 15.3454 1.72581 15.3454C1.69882 15.3454 1.67183 15.3407 1.64801 15.3326L1.56228 15.3422H1.54799C3.32143 18.1404 6.44281 20 10.0008 20C12.7618 20 15.2608 18.8789 17.0724 17.07C18.8792 15.2596 20 12.7585 20 9.99682C19.9985 8.73114 19.7618 7.51628 19.3285 6.39988Z"
                  fill="white"
                />
              </svg>

              {title}
            </div>

            <div className="image-card w-full h-full relative">
              <Image
                className="object-cover my-wh group-hover:scale-110 duration-300"
                src={imageURL}
                alt={title}
                fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            </div>
          </SplideSlide>
        ))}
      </Splide>

      {/* <Gallery>
        <Item
          original="https://picsum.photos/1024/768?image=2"
          thumbnail="https://picsum.photos/200/300?image=2"
          width="1024"
          height="768"
        >
          {({ ref, open }) => <img ref={ref} onClick={open} src="https://picsum.photos/200/300?image=2" />}
        </Item>
        <Item
          original="https://picsum.photos/1024/768?image=3"
          thumbnail="https://picsum.photos/200/300?image=3"
          width="1024"
          height="768"
        >
          {({ ref, open }) => <img ref={ref} onClick={open} src="https://picsum.photos/200/300?image=3" />}
        </Item>
      </Gallery> */}

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
    </motion.div>
  );
};

export default FeaturedProjects;
