import Link from "next/link";
import { FC } from "react";

type ButtonProps = {
  name: string;
  url: string;
  isIcon?: boolean;
};

const ButtonLink: FC<ButtonProps> = ({ url, name, isIcon }) => {
  return (
    <Link
      href={url}
      className={`group h-12 ${
        isIcon === true ? "pl-[18px] pr-[10px]" : "px-6"
      } ml-2 font-normal bg-slate-900 text-white rounded-full flex items-center space-x-3 hover:bg-indigo-500 ease-in-out duration-300`}
    >
      <span> {name} </span>

      {isIcon === true && (
        <span className="rounded-full bg-white h-7 w-7 flex item-center justify-center">
          <i className="ri-arrow-right-up-line text-[20px] font-semibold text-slate-900 group-hover:text-indigo-500 -mt-[1px]  ease-in-out duration-300" />
        </span>
      )}
    </Link>
  );
};

export default ButtonLink;
