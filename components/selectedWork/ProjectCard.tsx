import { RiArrowRightUpLine } from "@remixicon/react";
import Link from "next/link";
import { FC } from "react";

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  tag: string;
  imageURL: string;
  featured?: boolean;
  commingSoon?: boolean;
  light?: boolean;
};

const ProjectCard: FC<ProjectCardProps> = ({
  url,
  title,
  description,
  tag,
  imageURL,
  featured = false,
  commingSoon = false,
  light = false,
}) => {
  return (
    <Link
      href={url}
      aria-disabled={commingSoon}
      className="group block w-full rounded-[24px] duration-300 ease-in-out"
    >
      <div
        className={`relative w-full overflow-clip rounded-[24px] bg-neutral-100 shadow-[0px_0px_4px_0px_rgba(0,0,0,0.04),0px_8px_8px_-8px_rgba(0,0,0,0.04),0px_12px_16px_0px_rgba(0,0,0,0.04)] ${
          featured ? "h-[320px] md:h-[620px]" : "h-[280px] md:h-[460px]"
        }`}
      >
        {/* <Image
          className="object-cover duration-300 group-hover:scale-[1.03]"
          src={imageURL}
          alt={title}
          fill={true}
          priority={false}
          quality={100}
          loading="lazy"
          sizes={
            featured
              ? "100vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          }
        /> */}
        <img
          className="object-cover object-center w-full h-full duration-300 group-hover:scale-[1.03]"
          src={imageURL}
          alt={title}
        />
      </div>

      <div
        className={`flex w-full flex-col items-start gap-8 px-5 pb-5 pt-7 ${
          featured ? "md:px-6" : ""
        }`}
      >
        <div className="flex w-full flex-col items-start gap-2">
          <p className="bg-gradient-to-r from-lime-500 from-20% to-indigo-500 to-70% bg-clip-text text-[20px] leading-7 text-transparent">
            {tag}
          </p>
          <h3
            className={`w-full text-[26px] leading-10 md:text-[32px] ${
              light ? "text-slate-900" : "text-white"
            }`}
          >
            {title}
          </h3>
          <p
            className={`w-full font-normal leading-6 ${
              light ? "text-slate-500" : "text-neutral-400"
            } ${featured ? "text-base md:text-lg md:leading-7" : "text-base"}`}
          >
            {description}
          </p>
        </div>

        <div
          className={`flex items-center gap-0.5 text-lg font-medium ${
            light ? "text-slate-900" : "text-white"
          }`}
        >
          {commingSoon ? (
            <span className="rounded-full bg-neutral-950 px-3 py-1.5 text-xs text-white">
              Coming Soon
            </span>
          ) : (
            <>
              View Details
              <RiArrowRightUpLine
                size={24}
                className="duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
