/* eslint-disable react/jsx-no-undef */
"use client";

import { selectedWorks } from "@/utils/data/projectListData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProjectCard from "./ProjectCard";

const SelectedWork = () => {
  // const targetRef = useRef(null);
  // const { scrollYProgress } = useScroll({ target: targetRef });
  // const x = useTransform(scrollYProgress, [0.05, 1], ["0%", "-40%"]);

  const settings = {
    rewind: true,
    gap: "1.5rem",
    perMove: 1,
    // padding: "30%",
    type: "loop",
    infinite: true,
    focus: "left",
    pagination: false,
    // pauseOnHover: true,
    autoplay: true,
    // keyboard: true,
    // isActive: true,
    // pauseOnFocus: true,
    // slidefocus: true,
    wheel: false,
    wheelSleep: 1,
    wheelMinThreshold: 1,
    releaseWheel: true,

    width: "100%",
    // snap: true,
    // slideFocus: true,
    // height: "600px",
    // trimSpace: false,
    // rewindByDrag: true,
    // loading: "lazy",
    perPage: 3,
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
        // height: "300px",
        arrows: false,
        perPage: 1,
      },
      // 640: {
      //   gap: "1rem",
      //   height: "380px",
      //   padding: "10%",
      // },
      // 768: {
      //   gap: "1.5rem",
      //   height: "320px",
      //   padding: "10%",
      // },
      1024: {
        gap: "1.5rem",
        // height: "400px",
        perPage: 2,
      },
      // 1280: {
      //   gap: "1.5rem",
      //   height: "500px",
      //   padding: "10%",
      // },
      // 1440: {
      //   gap: "1.5rem",
      //   height: "580px",
      //   padding: "20%",
      // },
      // 1920: {
      //   gap: "1.5rem",
      //   height: "720px",
      //   padding: "20%",
      // },
    },
  };

  return (
    <div className="h-[400v]" id="work">
      {/* <div className="h-[400v]" id="work" ref={targetRef}> */}
      <div className="horizontalScrol h-[100v] sticky top-0 flex items-center justify-start overflow-hidden">
        {/* <motion.div
          className="projects_list grid grid-cols-[3fr_3fr_3fr_3fr_3fr] gap-3 md:gap-6"
          style={{ x }}
        >
          {projectList.map(({ url, title, tag, imageURL, brandColor }, i) => (
            <div className="project w-[320px] md:w-[409px]" key={i}>
              <ProjectCard
                url={url}
                title={title}
                tag={tag}
                imageURL={imageURL}
                bgColor={brandColor}
              />
            </div>
          ))}
        </motion.div> */}

        <div className="container">
          <Splide options={settings} tag="div" aria-label="React Splide Example">
            {selectedWorks.map(({ url, title, description, tag, imageURL, brandColor }, i) => (
              <SplideSlide className="project w-[320px] md:w-[409px]" key={i}>
                <ProjectCard
                  url={url}
                  title={title}
                  description={description}
                  tag={tag}
                  imageURL={imageURL}
                  bgColor={brandColor}
                />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
