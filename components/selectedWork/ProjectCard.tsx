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
};

const ProjectCard: FC<ProjectCardProps> = ({
  url,
  title,
  description,
  tag,
  imageURL,
  bgColor,
}) => {
  return (
    <Link
      href={url}
      className={`relative space-y-6 group ease-in-out duration-300 p-1 pt-7 rounded-3xl overflow-hidden w-full block`}
      style={{ background: bgColor }}
    >
      <div className="leading-tight px-5 group-hover:pl-4 duration-300 relative z-10">
        <RiArrowRightUpLine size={28} />

        <div className="space-y-2">
          <div className="text-xl md:text-xl font-medium group-hover:underline pt-5">
            {title}
          </div>

          <p className="text-sm text-gray-600 dark:text-white font-light leading-snug">
            {description}
          </p>
        </div>
      </div>

      <div className="relative w-full h-[300px] lg:h-[460px] bg-slate-50 rounded-2xl md:rounded-[20px] overflow-hidden">
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
