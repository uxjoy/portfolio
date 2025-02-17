"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { projectList } from "../../src/utils/data/projectListData";
import ProjectCard from "./ProjectCard";

const SelectedWork = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0.05, 1], ["0%", "-40%"]);

  return (
    <div className="h-[400vh]" id="work" ref={targetRef}>
      <div className="horizontalScroll h-[100vh] sticky top-0 flex items-center justify-start overflow-hidden">
        <motion.div
          className="projects_list grid grid-cols-[3fr_3fr_3fr_3fr_3fr] gap-6"
          style={{ x }}
        >
          {projectList.map(({ url, title, tag, imageURL, brandColor }, i) => (
            <div className="project w-[409px]" key={i}>
              <ProjectCard
                url={url}
                title={title}
                tag={tag}
                imageURL={imageURL}
                bgColor={brandColor}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SelectedWork;
