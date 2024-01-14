import { FC } from "react";

type TextColorProps = {
  bgDark?: boolean;
  text1: string;
  text2: string;
};

const Heading: FC<TextColorProps> = ({ bgDark, text1, text2 }) => {
  return (
    <div className="heading uppercase text-9xl leading-none font-extrabold">
      <h1
        className={`bg-gradient-to-b inline-block text-transparent bg-clip-text ${
          bgDark === true
            ? "from-slate-800 to-slate-950"
            : "from-slate-200 to-white"
        }`}
      >
        {text1}
      </h1>
      <h1 className={`${bgDark === true ? "text-white" : "text-slate-900"}`}>
        {text2}
      </h1>
    </div>
  );
};

export default Heading;
