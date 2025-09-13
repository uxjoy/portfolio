import { appScreenData } from "@/utils/data/appScreenData";
import Image from "next/legacy/image";
import Marquee from "react-fast-marquee";

const AppScreen = () => {
  return (
    <div className="py-20 md:pt-0 md:pb-120 relative space-y-9 md:space-y-24">
      {/* <div className="flex justify-center">
        <div className="inline-block card-wrapper mx-auto rounded-full relative glowing-border overflow-hidden p-[1px]">
          <div className="card p-6 bg-slate-900 relative z-10 rounded-full py-4 px-5 h-full">
            Button CTA Details
          </div>
        </div>
      </div> */}

      <Marquee speed={50} pauseOnHover={false} play={true} autoFill={true} direction="left">
        {appScreenData.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 text-center ml-4 md:ml-6">
            <p className="text-sm font-light text-whiteAlpha-80">{item.title}</p>

            <Image
              src={item.img}
              alt={item.title}
              className="max-w-[172px] md:max-w-[240px] h-auto rounded-lg shadow-lg"
              width={240}
              height={532}
              loading="lazy"
              priority={false}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default AppScreen;
