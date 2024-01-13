import Image from "next/image";
import { highlightedText } from "./About";

const RecentExploration = () => {
  return (
    <div className="bg-slate-950 py-120 relative space-y-20">
      <div className="container mx-auto">
        <div className="px-20 text-center">
          <h2 className="text-[80px] text-slate-800 font-extrabold leading-tight">
            My Recent {highlightedText("Visual Explorations")}
          </h2>
        </div>
      </div>

      <div className="space-y-8">
        <div className="relative flex overflow-x-hidden space-x-4">
          <div className="py-6 animate-slider whitespace-nowrap flex items-center gap-8">
            {data.map(({ title, imgURL }, i) => (
              <Image
                key={i}
                className="object-cover rounded-xl border border-slate-800"
                src={imgURL}
                alt={title}
                width={380}
                height={260}
                // fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            ))}
          </div>

          {/* <div className="absolute top-0 py-6 animate-slider2 whitespace-nowrap  flex items-center gap-8">
          {data.map(({ title, imgURL }, i) => (
            <Image
              key={i}
              className="object-cover rounded-xl border border-slate-800"
              src={imgURL}
              alt={title}
              width={380}
              height={260}
              priority={false}
              quality={100}
              loading="lazy"
            />
          ))}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecentExploration;

// data
const data = [
  {
    title: "explore",
    imgURL: "/assets/explore1.jpg",
  },
  {
    title: "explore",
    imgURL: "/assets/explore2.jpg",
  },
  {
    title: "explore",
    imgURL: "/assets/explore3.jpg",
  },
  {
    title: "explore",
    imgURL: "/assets/explore4.jpg",
  },
  {
    title: "explore",
    imgURL: "/assets/explore5.jpg",
  },
  {
    title: "explore",
    imgURL: "/assets/explore6.png",
  },
  {
    title: "explore",
    imgURL: "/assets/explore7.png",
  },
];
