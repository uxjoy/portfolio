import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import Image from "next/legacy/image";
import Contact from "../../../../components/Contact";
import MainLayout from "../../../../components/MainLayout";
import stPayOverview from "../../../../public/assets/case-study/st-pay/overview.png";
import {
  stPayDesignProcess,
  stPayOverviewData,
  stPayProblemsData,
  stPaySolutionsData,
} from "./stPayData";

const StPayCaseStudy = () => {
  return (
    <MainLayout>
      <div className="py-12 md:pt-100 md:pb-16" id="top">
        <div className="container relative space-y-6 md:space-y-2">
          <div className="top-content md:w-3/4">
            <div className="uppercase text-lg text-whiteAlpha-56">case study</div>
            <h1
              className="text-4xl md:text-6xl capitalize font-bold text-white/30 w-full mt-4"
              style={{ lineHeight: 1.3 }}
            >
              <span className="text-gray-900 dark:text-white">ST Pay</span> — a travel wallet built
              for trust
            </h1>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[260px] md:h-[920px] 2xl:h-[1080px] overflow-hidden">
        <Image
          className="object-contain h-full group-hover:scale-110 duration-300"
          src={stPayOverview}
          alt="ST Pay overview"
          layout="fill"
          priority={false}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="py-16 md:py-120">
        <div className="container space-y-16 md:space-y-[120px]">
          <div className="overview grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {stPayOverviewData.map((item, i) => (
              <div className="space-y-1 md:space-y-2 w-full" key={i}>
                <label className="text-white/40 md:text-md">{item.label}</label>
                <p className="font-semibold dark:font-medium text-md md:text-xl text-whiteAlpha-72">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="divider h-[1px] w-full bg-whiteAlpha-4 my-24"></div>

          <div className="project-overview mt-16">
            <div className="flex flex-col md:flex-row gap-4 md:gap-40">
              <div className="flex-initial md:w-6/12 text-3xl font-semibold dark:font-medium text-white/80">
                Project <br />
                Overview
              </div>
              <p className="w-full text-md md:text-xl font-normal dark:font-light text-whiteAlpha-56 leading-relaxed">
                <span className="font-medium text-white/90"> ST Pay </span>
                is a secure in-app travel wallet designed to simplify payments for flights, hotels,
                and other travel services. The project focused on seamless top-ups, clear
                transaction history, and frictionless checkout — improving trust, activation, and
                transaction completion for travelers who need their money to just work, wherever
                they are.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="problems-and-solutions md:mt-16 bg-whiteAlpha-2 text-white/80 py-16 md:py-[160px]">
        <div className="container space-y-24 md:space-y-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-40">
            <div className="flex-initial md:w-6/12 text-3xl font-semibold dark:font-medium">
              Problem <br />
              Identification
            </div>

            <div className="right w-full space-y-4 text-md md:text-xl font-light text-whiteAlpha-64">
              {stPayProblemsData?.map((item, i) => (
                <div className="flex gap-4" key={i}>
                  <span className="text-rose-500">
                    <RiCloseLine size={24} />
                  </span>

                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold dark:font-medium">
              Design <br /> Solutions
            </div>

            <div className="right w-full space-y-4 text-md md:text-xl font-light text-whiteAlpha-64">
              {stPaySolutionsData?.map((item, i) => (
                <div className="flex gap-4" key={i}>
                  <span className="text-emerald-500">
                    <RiCheckLine size={24} />
                  </span>

                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="design-process py-16 md:py-120 bg-whiteAlpha-2 text-white/80">
        <div className="container space-y-[120px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold dark:font-medium text-white/80">
              Design Process
            </div>

            <div className="w-full font-normal space-y-10 leading-relaxed">
              {stPayDesignProcess?.map((item, i) => (
                <div className="pl-12 relative" key={i}>
                  <span className="absolute top-0 left-0">
                    <RiCheckLine size={26} />
                  </span>

                  <h4 className="text-lg md:text-xl font-medium mb-2 dark:font-normal">
                    {item.title}
                  </h4>
                  <p className="text-whiteAlpha-56 font-light text-md md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-120 bg-whiteAlpha-2">
        <div className="container space-y-[120px]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold dark:font-medium text-white/80">
              Outcome
            </div>
            <p className="w-full text-md md:text-xl font-normal dark:font-light text-whiteAlpha-56 leading-relaxed">
              The redesigned ST Pay wallet gives travelers a faster, more transparent way to pay.
              Quick top-ups, a scannable transaction history, and an in-app checkout replaced the
              old friction points — strengthening trust at every payment moment and laying a
              scalable design foundation for future travel-financial features.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </MainLayout>
  );
};

export default StPayCaseStudy;
