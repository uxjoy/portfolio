import { destinationData } from "@/utils/data/destinationData";
import Image from "next/image";

const GlobalWork = () => {
  return (
    <div className="py-12 md:pt-120">
      <div className="container space-y-6 md:space-y-14">
        <div className="section-header text-center">
          <h1 className="text-[56px] font-bold flex flex-col leading-tight">
            <span> Collaborating Across </span>
            <span className="text-primary-default"> 20+ Global Destinations </span>
          </h1>
        </div>

        <div className="relative">
          <div className="flex justify-center">
            <span className="dark:hidden">
              <Image
                className="w-full md:w-11/12 h-auto dark:opacity-10"
                src={"/assets/Map.svg"}
                alt="map"
                loading="lazy"
                // layout="fill"
                // objectFit="contain"
                // sizes="100vw"
                // width={328}
                // height={164}
                width={0}
                height={0}
              />
            </span>

            <span className="hidden dark:block">
              <Image
                className="w-full md:w-11/12 h-auto"
                src={"/assets/Map_Dark.svg"}
                alt="map"
                loading="lazy"
                width={0}
                height={0}
              />
            </span>
          </div>

          <div className="p-5 bg-white shadow-2xl dark:bg-neutral-950 border border-gray-100 dark:border-transparent rounded-2xl text-gray-900 dark:text-white w-[288px] md:w-[340px] space-y-3 md:absolute z-10 top-20 right-0 md:mr-16 animate-mousePointer hover:animate-none mx-auto">
            <h4 className="text-lg font-semi">Global Work Network</h4>

            <ul className="grid grid-cols-2 gap-1.5 text-gray-700 dark:text-whiteAlpha-56 text-sm font-light cursor-default">
              {destinationData.map((cities, i) => (
                <li
                  key={i}
                  className="transform translate-x-0 hover:translate-x-2 ease-in-out duration-300 hover:text-primary-300 dark:hover:text-primary-default"
                >
                  {cities}
                </li>
              ))}
            </ul>

            <span className="w-5 h-5 bg-white dark:bg-neutral-950 border border-transparent border-b-gray-100 dark:border-b-transparent border-r-gray-100 dark:border-r-transparent absolute rotate-45 -bottom-2.5 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 rounded-br"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalWork;
