import { projectList } from "../../src/utils/data/projectListData";
import Heading from "../Heading";
import ProjectCard from "./ProjectCard";

const SelectedWork = () => {
  return (
    <div className="py-12 md:py-120 relative" id="work">
      <div className="container space-y-8 md:space-y-0">
        <Heading text1="Selected" text2="work" bgDark />

        <div className="xl:px-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-28 lg:[&>*:first-child]:pt-24 [&>*:first-child]:pt-4">
            {projectList.map(({ url, title, tag, imageURL }, i) => (
              <ProjectCard
                key={i}
                url={url}
                title={title}
                tag={tag}
                imageURL={imageURL}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedWork;
