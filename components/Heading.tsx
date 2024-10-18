import { FC } from "react";

type TextColorProps = {
  bgDark?: boolean;
  text1: string;
  text2: string;
};

const Heading: FC<TextColorProps> = ({ bgDark, text1, text2 }) => {
  return (
    <div className="title">
      <div
        className={`bg-gradient-to-b inline-block text-transparent bg-clip-text from-gray-200 to-white dark:from-zinc-800 dark:to-zinc-950`}
      >
        {text1}
      </div>
      <div className="text-gray-900 dark:text-white">{text2}</div>
    </div>

    // <div className="title">
    //   <div
    //     className={`bg-gradient-to-b inline-block text-transparent bg-clip-text ${
    //       bgDark === true
    //         ? "from-slate-800 to-slate-950"
    //         : "from-slate-200 to-white"
    //     }`}
    //   >
    //     {text1}
    //   </div>
    //   <div className={`${bgDark === true ? "text-white" : "text-slate-900"}`}>
    //     {text2}
    //   </div>
    // </div>
  );
};

export default Heading;
