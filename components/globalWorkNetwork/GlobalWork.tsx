import MapSvg from "../svg/mapSvg";
import { cityCount, destinationData } from "../data/destinationData";

const GlobalWork = () => {
  return (
    <div className="py-120">
      <div className="container mx-auto relative">
        <div className="flex justify-center">
          <MapSvg />
        </div>

        <div className="p-5 bg-slate-950 rounded-2xl text-white w-80 space-y-2 absolute top-0 right-0 mr-16 animate-mousePointer">
          <h4 className="text-lg font-semi">Global Work Network</h4>

          <ul className="grid grid-cols-2 text-sm text-slate-400 leading-loose font-light">
            {destinationData.map((cities, i) => (
              <li
                key={i}
                className="transform translate-x-0 hover:translate-x-2 ease-in-out duration-300 hover:text-indigo-400 hover:font-semi"
              >
                {cities}
              </li>
            ))}
          </ul>

          <span className="w-5 h-5 bg-slate-950 absolute rotate-45 -bottom-2 rounded"></span>
        </div>

        <div className="text-slate-300 mx-auto text-center text-[3.5rem] font-extrabold leading-tight uppercase">
          <h2> Collaborating </h2>
          <h2>
            Across <span className="text-slate-900"> {cityCount}+ Global </span>
          </h2>
          <h2 className="text-slate-900"> Destinations </h2>
        </div>
      </div>
    </div>
  );
};

export default GlobalWork;
