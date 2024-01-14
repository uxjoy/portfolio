import Heading from "../Heading";
import ProjectCard from "./ProjectCard";
import { projectList } from "../data/projectListData";

const SelectedWork = () => {
  return (
    <div className="bg-slate-950 py-120 relative">
      <div className="container mx-auto">
        <Heading text1="Selected" text2="work" bgDark />

        <div className="px-28 text-white">
          <div className="grid grid-cols-2 gap-24 [&>*:first-child]:pt-24">
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
