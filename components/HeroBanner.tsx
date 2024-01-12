import Image from "next/image";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="bg-slate-100 pt-24 pb-32">
      <div className="container mx-auto space-y-10">
        <div className="text-8xl font-bold text-slate-300 leading-tight space-y-0.5">
          <h1 className="flex items-center pl-28 space-x-6">
            <span> Hi 👋, I’m </span>
            <span className="text-indigo-500"> Joy </span>
            <span>
              <Image
                src="/assets/joy_header.png"
                loading="lazy"
                alt="author-image"
                width={136}
                height={96}
                className="rounded-full object-contain"
              />
            </span>
          </h1>

          <h1 className="flex items-center space-x-5">
            <span> oneStop</span>
            <span> ✨ </span>
            <span className="text-slate-900"> creative</span>
            <span> person </span>
          </h1>

          <h1 className="flex items-center space-x-5 pl-56">
            <span> for all design needs. </span>
          </h1>
        </div>

        <div className="grid grid-cols-6 gap-8 items-start">
          <div className="flex items-center py-3">
            <span className="w-2 h-2 rounded-full bg-slate-200"></span>
            <span className="grow h-0.5 bg-slate-200"></span>
            <span className="w-2 h-2 rounded-full bg-slate-200"></span>
            <span className="grow h-0.5 bg-slate-200"></span>
            <span className="w-2 h-2 rounded-full bg-slate-200"></span>
          </div>

          <div className="col-span-4 px-1 space-y-12">
            <p className="text-slate-600 text-xl font-light leading-relaxed">
              I am a multi-disciplinary creative
              <span className="font-semibold text-slate-800">
                {" "}
                Product Designer{" "}
              </span>
              and solution provider, boasting nearly
              <span className="font-semibold text-slate-800"> 4.5+ years </span>
              of extensive experience in the creative industry.
            </p>

            <div className="flex gap-10">
              <Link
                href={"/"}
                target="_blank"
                className="flex items-center gap-4 transform translate-y-0 hover:-translate-y-2 ease-in-out duration-300 group"
              >
                <div className="w-12 h-12 bg-emerald-100 text-emerald-500 rounded-xl flex items-center justify-center text-2xl border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 duration-300 ease-in-out">
                  <i className="ri-whatsapp-fill"></i>
                </div>

                <div className="content text-slate-500 pt-0.5">
                  <p className="flex items-center text-emerald-500 font-semi">
                    <span className="menu-name "> Whatsapp </span>

                    <i className="ri-arrow-right-up-line text-2xl leading-none" />
                  </p>
                  <p className="text-sm leading-normal font-light">
                    Chat Real-Time
                  </p>
                </div>
              </Link>

              <div className="flex flex-col items-center gap-1 py-0.5">
                <span className="grow w-0.5 bg-slate-200"></span>
                <span className="uppercase text-[10px] font-semibold text-slate-400 leading-none">
                  or
                </span>
                <span className="grow w-0.5 bg-slate-200"></span>
              </div>

              <Link
                href={"/"}
                target="_blank"
                className="flex items-center gap-4 transform translate-y-0 hover:-translate-y-2 ease-in-out duration-300 group"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-xl flex items-center justify-center text-2xl border border-indigo-200 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-500 duration-300 ease-in-out">
                  <i className="ri-calendar-fill text-xl"></i>
                </div>

                <div className="content text-slate-500 pt-0.5">
                  <p className="flex items-center text-indigo-500 font-semi">
                    <span className="menu-name"> Book a Call </span>

                    <i className="ri-arrow-right-up-line text-2xl leading-none" />
                  </p>
                  <p className="text-sm leading-normal font-light">
                    Schedule a metting
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="empty"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
