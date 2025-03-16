import { RiArrowRightUpLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ProjectCardProps = {
  url: string;
  title: string;
  description: string;
  tag: string;
  imageURL: string;
  bgColor?: string;
  commingSoon?: boolean;
};

const ProjectCard: FC<ProjectCardProps> = ({ url, title, description, tag, imageURL, bgColor, commingSoon }) => {
  return (
    <Link
      href={url}
      className={`relative space-y-6 group ease-in-out duration-300 p-1 pt-7 rounded-3xl overflow-hidden w-full block`}
      style={{ background: bgColor }}
    >
      <div className="leading-tight px-4 md:px-5 group-hover:pl-4 duration-300 relative z-10">
        <div className="flex items-center justify-between">
          {commingSoon === true ? (
            <div className="bg-neutral-950 text-white p-1.5 px-2.5 rounded-full text-xs">Comming Soon</div>
          ) : (
            <RiArrowRightUpLine size={28} />
          )}
        </div>

        <div className="space-y-2">
          <div className="text-xl md:text-xl font-medium group-hover:underline pt-5">{title}</div>

          <p className="text-sm text-gray-600 dark:text-white font-light leading-snug">{description}</p>
        </div>
      </div>

      <div className="relative w-full h-[320px] lg:h-[460px] bg-slate-50 rounded-[20px] overflow-hidden">
        {/* {commingSoon && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-950 text-white p-3 px-4 rounded-full z-50 border-[2px] border-white shadow-2xl">
            Comming Soon
          </div>
        )} */}

        <Image
          className="object-cover w-full h-full group-hover:scale-110 duration-300"
          src={imageURL}
          alt={title}
          fill
          priority={false}
          quality={80}
          loading="lazy"
        />
      </div>

      <div className=" absolute -top-[120px] -left-[120px] bgGradientBlur w-[250px] h-[250px] rounded-full z-0"></div>
    </Link>
  );
};

export default ProjectCard;
