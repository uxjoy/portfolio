import { FC } from "react";

type FeedbackDataProps = {
  data: { name: string; location: string; quote: string };
};

const ClientCard: FC<FeedbackDataProps> = ({ data }) => {
  return (
    <div className="space-y-10 text-slate-600">
      {/* <QuoteIcon /> */}

      <p className="text-2xl font-light leading-normal"> {data.quote} </p>

      <div className="space-y-1.5">
        <h5 className="text-xl font-semibold text-slate-900"> {data.name} </h5>
        <p> {data.location} </p>
      </div>
    </div>
  );
};

export default ClientCard;
