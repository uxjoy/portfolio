import { FC } from "react";

type FeedbackDataProps = {
  data: { name: string; location: string; quote: string };
};

const ClientCard: FC<FeedbackDataProps> = ({ data }) => {
  return (
    <div className="space-y-4 md:space-y-10 text-gray-600 dark:text-zinc-400">
      {/* <QuoteIcon /> */}

      <p className="text-[13px] md:text-2xl font-light leading-normal">{data.quote}</p>

      <div className="space-y-1 md:space-y-1">
        <p className="text-sm md:text-xl font-semibold text-gray-900 dark:text-zinc-300 dark:font-medium">
          {data.name}
        </p>
        <p className=" text-xs md:text-base dark:text-zinc-500"> {data.location} </p>
      </div>
    </div>
  );
};

export default ClientCard;
