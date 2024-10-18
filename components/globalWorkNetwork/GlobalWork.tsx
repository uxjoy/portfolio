import Image from "next/image";
import { cityCount, destinationData } from "../../src/utils/data/destinationData";

const GlobalWork = () => {
  return (
    <div className="py-12 md:py-120">
      <div className="container relative space-y-6 md:space-y-4">
        <div className="p-5 bg-zinc-900 border dark:border-zinc-700/50 rounded-2xl text-white w-[288px] md:w-80 space-y-2 md:absolute z-10 top-0 right-0 md:mr-16 animate-mousePointer hover:animate-none mx-auto">
          <h4 className="text-lg font-semi">Global Work Network</h4>

          <ul className="grid grid-cols-2 text-zinc-400 leading-normal md:leading-loose font-light">
            {destinationData.map((cities, i) => (
              <li
                key={i}
                className="transform translate-x-0 hover:translate-x-2 ease-in-out duration-300 hover:text-indigo-400 hover:font-semi"
              >
                {cities}
              </li>
            ))}
          </ul>

          <span className="w-5 h-5 bg-zinc-900 border border-transparent dark:border-b-zinc-700/50 dark:border-r-zinc-700/50 absolute rotate-45 -bottom-2.5 left-1/2 md:left-6 transform -translate-x-1/2 md:translate-x-0 rounded-br"></span>
        </div>

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

        <div className="text-gray-400/80 dark:text-zinc-700 mx-auto text-center text-[28px] md:text-[56px] font-extrabold leading-tight uppercase">
          <h4> Collaborating </h4>
          <h4>
            Across <span className="text-gray-900 dark:text-white"> {cityCount}+ Global </span>
          </h4>
          <h4 className="text-gray-900 dark:text-white"> Destinations </h4>
        </div>
      </div>
    </div>
  );
};

export default GlobalWork;
