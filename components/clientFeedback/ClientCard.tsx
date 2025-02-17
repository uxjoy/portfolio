import { RiDoubleQuotesR } from "@remixicon/react";
import { FC } from "react";

type FeedbackDataProps = {
  data: { name: string; location: string; quote: string };
};

const ClientCard: FC<FeedbackDataProps> = ({ data }) => {
  return (
    <div className="relative space-y-4 text-gray-600 dark:text-white/70 bg-white/5 border border-white/5 p-6 rounded-2xl overflow-hidden cursor-default group transform translate-y-0 hover:-translate-y-1.5  ease-in-out duration-300">
      <RiDoubleQuotesR size={32} color="#9AE66E" />

      <p className="font-light text-base leading-normal group-hover:text-primary-default">
        {data.quote}
      </p>

      <div className="space-y-1 md:space-y-1 pt-2">
        <p className="text-base font-semibold text-gray-900 dark:text-white dark:font-medium">
          {data.name}
        </p>
        <p className="text-sm dark:text-white/50"> {data.location} </p>
      </div>

      <div className="absolute -top-8 -right-6 w-12 h-12 bg-primary-default blur-3xl invisible group-hover:visible ease-in-out duration-200 delay-150"></div>
    </div>
  );
};

export default ClientCard;

{
  /* <div className="space-y-4 md:space-y-10 text-gray-600 dark:text-stone-400">
  <p className="text-[13px] md:text-2xl font-light leading-normal">
    {data.quote}
  </p>

  <div className="space-y-1 md:space-y-1">
    <p className="text-sm md:text-xl font-semibold text-gray-900 dark:text-stone-300 dark:font-medium">
      {data.name}
    </p>
    <p className=" text-xs md:text-base dark:text-stone-500">
      {" "}
      {data.location}{" "}
    </p>
  </div>
</div>; */
}
