import Image from "next/legacy/image";
import Link from "next/link";
import { FC } from "react";

type ShotsCardProps = {
  title: string;
  imgURL: string;
  url: string;
};

const ShotsCard: FC<ShotsCardProps> = ({ title, imgURL, url }) => {
  return (
    <Link href={url} target="_blank">
      <Image
        className="max-w-[180px] md:max-w-[380px] scale-95 rounded-xl md:rounded-2xl hover:scale-95 duration-300 ease-in-out"
        src={imgURL}
        alt={title}
        quality={100}
        width={400}
        height={300}
        priority={false}
        objectFit="cover"
        // sizes="width: 100%, height: 100%"
        loading="lazy"
      />
    </Link>
  );
};

export default ShotsCard;
