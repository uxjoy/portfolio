// "use client";

import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../../../components/Contact";
import MainLayout from "../../../../components/MainLayout";
import branding from "../../../../public/assets/case-study/branding.webp";
import imgLandscape from "../../../../public/assets/case-study/ebl-overview.webp";
import img_6 from "../../../../public/assets/case-study/img_6.webp";
import explanation_img_1 from "../../../../public/assets/case-study/new/img_1.webp";
import explanation_img_2 from "../../../../public/assets/case-study/new/img_2.webp";
import explanation_img_3 from "../../../../public/assets/case-study/new/img_3.webp";
import explanation_img_4 from "../../../../public/assets/case-study/new/img_4.webp";
import explanation_img_5 from "../../../../public/assets/case-study/new/img_5.webp";
import { designProcess, overviewData, problemsData, solutionsData } from "./data";

const CaseStudyDetails = ({ params }: any) => {
  const caseStudyId = params.caseStudyId;

  // const [isToggle, isSetToggle] = useState(true);

  return (
    <MainLayout>
      <div className="py-12 md:pt-100 md:pb-16" id="top">
        <div className="container relative space-y-6 md:space-y-2">
          <div className="top-content md:w-3/4">
            <div className="uppercase text-lg text-gray-400 dark:text-stone-500">case study</div>
            <h1
              className="text-4xl md:text-6xl capitalize font-bold text-gray-400/80 dark:text-stone-600 w-full mt-4"
              style={{ lineHeight: 1.3 }}
            >
              <span className="text-gray-900 dark:text-white">EBL Fund Transfer</span> redesign for mobile app
            </h1>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[260px] md:h-[920px] 2xl:h-[1080px] overflow-hidden">
        <Image
          className="object-contain h-full group-hover:scale-110 duration-300"
          src={imgLandscape}
          alt={"title"}
          fill
          priority={false}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="py-16 md:py-120">
        <div className="container space-y-16 md:space-y-[120px]">
          <div className="overview grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {overviewData.map((item, i) => (
              <div className="space-y-1 md:space-y-2 w-full" key={i}>
                <label className="text-gray-500 dark:text-stone-500 md:text-md">{item.label}</label>

                {item.url.length === 0 ? (
                  <p className="font-semibold dark:font-medium text-md md:text-xl text-gray-700 dark:text-white/80">
                    {item.text}
                  </p>
                ) : (
                  <Link
                    href={item.url}
                    className="font-semibold text-md md:text-xl block underline underline-offset-4 text-indigo-500 hover:underline-offset-8 ease-in-out duration-300 "
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}

            {/* <div className="space-y-1 md:space-y-2 w-full">
              <label className="text-gray-500 text-sm md:text-md">Role</label>
              <p className="font-semibold text-md md:text-xl">
                Product Designer
              </p>
            </div>

            <div className="space-y-1 md:space-y-2 w-full ">
              <label className="text-gray-500 text-sm md:text-md">
                Start Date
              </label>
              <p className="font-semibold text-md md:text-xl">02 August 2024</p>
            </div>

            <div className="space-y-1 md:space-y-2 w-full">
              <label className="text-gray-500 text-sm md:text-md">
                Completion Date
              </label>
              <p className="font-semibold text-md md:text-xl">15 August 2024</p>
            </div>

            <div className="space-y-1 md:space-y-2 w-full">
              <label className="text-gray-500 text-sm md:text-md">Figma</label>
              <Link
                href={
                  "https://www.figma.com/design/ujYWr8iLm1RuZYI1jku0LH/EBL-%3A-Fund-Transfer?node-id=158-4817"
                }
                className="font-semibold text-md md:text-xl block underline underline-offset-4 text-indigo-500 hover:underline-offset-8 ease-in-out duration-300"
              >
                Design Link
              </Link>
            </div>

            <div className="space-y-1 md:space-y-2 w-full order-2">
              <label className="text-gray-500 text-sm md:text-md">
                Category
              </label>
              <p className="font-semibold text-md md:text-xl">Mobile App</p>
            </div> */}
          </div>

          <div className="divider h-[1px] w-full bg-gray-100 dark:bg-stone-900 my-24"></div>

          <div className="project-overview mt-16">
            <div className="flex flex-col md:flex-row gap-4 md:gap-40">
              <div className="flex-initial md:w-6/12 text-3xl font-semibold dark:font-medium dark:text-white/80">
                Project <br />
                Overview
              </div>
              <p className="w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed">
                <span className="font-medium text-gray-900 dark:text-white"> The EBL Fund Transfer feature </span>
                required a significant redesign to address usability issues and improve the overall user experience. The
                existing feature was cluttered and lacked clear instructions, causing confusion and errors during the
                transfer process. The redesign aimed to create an intuitive, modern, and user-friendly interface,
                focusing on fund transfer UX design and mobile banking optimization.
              </p>
            </div>
          </div>

          {/* <div className="divider h-[1px] w-full bg-gray-100 my-24"></div> */}
        </div>
      </div>

      <div className="problems-and-solutions md:mt-16 bg-slate-400/5 dark:bg-zinc-900/40 text-gray-900 dark:text-white/80 py-16 md:py-[160px]">
        <div className="container space-y-24 md:space-y-32">
          <div className="flex flex-col md:flex-row gap-8 md:gap-40">
            <div className="flex-initial md:w-6/12 text-3xl font-semibold dark:font-medium">
              Problem <br />
              Identification
            </div>

            <div className="right w-full space-y-4 text-md md:text-xl font-light text-gray-700 dark:text-stone-500">
              {problemsData?.map((item, i) => (
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

            <div className="right w-full space-y-4 text-md md:text-xl font-light text-gray-700 dark:text-stone-500">
              {solutionsData?.map((item, i) => (
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

      <div className="iframe py-12 md:py-120 mb-12">
        <div className="container">
          <div className="w-full h-[300px] md:h-[500px] space-y-8">
            <div className="flex-initial w-6/12 text-3xl font-semibold dark:font-medium dark:text-white/80">
              User Flow
            </div>

            <iframe
              width="100%"
              height="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2Fs6Gwd6iNgh0gjQKLTvPhkT%2FEBL-%253A-Fund-Transfer-(Flow-Chart)%3Fnode-id%3D43-1263%26t%3DEIKsRTcFfiNbc1Pk-1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[200px] md:h-[700px] 2xl:h-[900px] bg-gray-200 overflow-hidden">
        <Image
          className="object-cover w-full h-full group-hover:scale-110 duration-300"
          src={branding}
          alt={"title"}
          fill
          priority={false}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="explanation py-16 md:py-120">
        <div className="container">
          <div className="segments space-y-16 md:space-y-28">
            <div className="row space-y-8 md:flex gap-16 items-center">
              <div className="left w-full relative">
                <div className="relative w-full h-[280px] md:h-[472px]  2xl:h-[580px]  bg-gray-200 overflow-hidden rounded-2xl md:rounded-3xl">
                  <Image
                    className="object-cover w-full h-full"
                    src={explanation_img_1}
                    alt={"title"}
                    fill
                    priority={false}
                    quality={100}
                    loading="lazy"
                  />
                </div>

                {/* <div className="toggle p-1 flex gap-1 bg-white absolute bottom-0 left-1/2 transform -trangray-x-1/2 trangray-y-6 rounded-full">
                  <button
                    className={`py-2 px-4 rounded-full ${isToggle === true && " bg-indigo-500 text-white"}`}
                    onClick={() => isSetToggle(isToggle === false)}
                  >
                    New Design
                  </button>
                  <button
                    className={`py-2 px-4 rounded-full ${isToggle === true && " bg-indigo-500 text-white"}`}
                    onClick={() => isSetToggle(isToggle === false)}
                  >
                    Old Design
                  </button>
                </div> */}
              </div>

              <div className="right w-full">
                <div className="space-y-3 md:space-y-5 md:px-12 w-full">
                  <div className="text-2xl md:text-3xl font-semibold dark:font-medium dark:text-white/80">
                    Choose Options
                  </div>

                  <div className="content w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed space-y-4">
                    <p>
                      <span className="font-semibold dark:font-medium text-gray-900 dark:text-white">
                        Fund Transfer:{" "}
                      </span>{" "}
                      More options visible and ensuring a consistent design throughout. This results in a clearer and
                      more cohesive user experience.
                    </p>
                    <p>
                      <span className="font-semibold dark:font-medium text-gray-900 dark:text-white">
                        Transfer Mode:{" "}
                      </span>{" "}
                      There are three options—BEFTN, NPSB, and RTGS—but the borders made it look like six options.
                      Additionally, the old design didn’t provide explanations for these transfer modes. The new UI
                      resolves these issues by clearly displaying the three options and offering explanations for each
                      mode, enhancing clarity and usability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row space-y-8 md:flex gap-16 items-center flex-row-reverse">
              <div className="left w-full">
                <div className="relative w-full h-[280px] md:h-[472px]  2xl:h-[580px]  bg-gray-200 overflow-hidden rounded-2xl md:rounded-3xl">
                  <Image
                    className="object-cover w-full h-full"
                    src={explanation_img_2}
                    alt={"title"}
                    fill
                    priority={false}
                    quality={100}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="right w-full">
                <div className="space-y-3 md:space-y-5 md:px-12 w-full">
                  <div className="text-2xl md:text-3xl font-semibold dark:font-medium dark:text-white/80">
                    Beneficiary
                  </div>

                  <div className="content w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed space-y-4">
                    <p>
                      In the old UI, the input field for transferring funds to a new account was misleadingly styled
                      like a search field and wasn’t listed under beneficiaries. Additionally, there was no validation
                      to ensure the new account number was exactly 13 digits.
                    </p>
                    <p>
                      In the new UI, I’ve clearly separated the options for transferring to a beneficiary and a new
                      account, and added validation to enforce a 13-digit account number requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row space-y-8 md:flex gap-16 items-center">
              <div className="left w-full">
                <div className="relative w-full h-[280px] md:h-[472px]  2xl:h-[580px] bg-gray-200 overflow-hidden rounded-2xl md:rounded-3xl">
                  <Image
                    className="object-cover w-full h-full"
                    src={explanation_img_3}
                    alt={"title"}
                    fill
                    priority={false}
                    quality={100}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="right w-full">
                <div className="space-y-3 md:space-y-5 md:px-12 w-full">
                  <div className="text-2xl md:text-3xl font-semibold dark:font-medium dark:text-white/80">
                    Transfer Amount
                  </div>

                  <div className="content w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed space-y-4">
                    <p>
                      In the existing design, the close button in the top right corner is unnecessary. The updated
                      design removes this button for better consistency and now includes the available balance on this
                      screen. A hide/show button has been added for privacy, allowing users to toggle the visibility of
                      their balance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row space-y-8 md:flex gap-16 items-center flex-row-reverse">
              <div className="left w-full">
                <div className="relative w-full h-[280px] md:h-[472px] 2xl:h-[580px] bg-gray-200 overflow-hidden rounded-2xl md:rounded-3xl">
                  <Image
                    className="object-cover w-full h-full"
                    src={explanation_img_4}
                    alt={"title"}
                    fill
                    priority={false}
                    quality={100}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="right w-full">
                <div className="space-y-3 md:space-y-5 md:px-12 w-full">
                  <div className="text-2xl md:text-3xl font-semibold dark:font-medium dark:text-white/80">
                    Transfer Overview
                  </div>

                  <div className="content w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed space-y-4">
                    <p>
                      In the updated design, the transfer overview has been cleaned up to enhance visual appeal and
                      maintain consistency throughout the interface. The new design ensures a more streamlined and
                      attractive presentation, improving the overall user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row space-y-8 md:flex gap-16 items-center">
              <div className="left w-full">
                <div className="relative w-full h-[280px] md:h-[472px]  2xl:h-[580px]  bg-gray-200 overflow-hidden rounded-2xl md:rounded-3xl">
                  <Image
                    className="object-cover w-full h-full"
                    src={explanation_img_5}
                    alt={"title"}
                    fill
                    priority={false}
                    quality={100}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="right w-full">
                <div className="space-y-3 md:space-y-5 md:px-12 w-full">
                  <div className="text-2xl md:text-3xl font-semibold dark:font-medium dark:text-white/80">
                    Save Beneficiary
                  </div>

                  <div className="content w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed space-y-4">
                    <p>
                      The transfer successful screen has been cleaned up with more meaningful text for clearer user
                      guidance. Additionally, "Another Transfer" and "Go to Home" buttons are now available at the
                      bottom of the screen, but they will not appear if the transfer was to a new account. For new
                      account transfers, a save beneficiary modal will appear within 2-3 seconds. Once the beneficiary
                      modal is saved or closed, the "Another Transfer" and "Go to Home" buttons will then be visible on
                      the success screen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="design-process py-16 md:py-120 bg-slate-400/5 dark:bg-zinc-900/40 text-gray-900 dark:text-white/80">
        <div className="container space-y-[120px]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold dark:font-medium dark:text-white/80">
              Design Process
            </div>

            <div className="w-full font-normal space-y-10 leading-relaxed">
              {designProcess?.map((item, i) => (
                <div className="pl-12 relative" key={i}>
                  <span className="absolute top-0 left-0">
                    <RiCheckLine size={26} />
                  </span>

                  <h4 className="text-lg md:text-xl font-medium mb-2 dark:font-normal">{item.title}</h4>
                  <p className="text-gray-700 dark:text-stone-500 font-light text-md md:text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="divider w-full h-[1px] bg-gray-900"></div>

          <div className="flex gap-40">
            <p className="w-full text-2xl font-light text-gray-500  leading-relaxed">
              <span className="font-medium text-white">Outcome: </span>
              The redesigned EBL Fund Transfer feature now offers a significantly enhanced user experience, with
              improved navigation, clearer instructions, and better error handling. The modernized interface aligns with
              contemporary mobile banking standards and addresses key usability issues, resulting in a more efficient
              and user-friendly fund transfer process. This redesign not only modernized the interface but also ensured
              it met user needs and expectations, boosting user satisfaction and reducing errors.
            </p>
          </div> */}

          {/* <div className="images-list grid grid-cols-12 gap-8">
            <div className="col-span-12 relative w-full h-[380px] md:h-[760px] bg-gray-200 overflow-hidden">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 duration-300"
                src={imgUrl_6}
                alt={"title"}
                fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            </div>

            <div className="col-span-7 relative w-full h-[380px] md:h-[480px] bg-gray-200 overflow-hidden">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 duration-300"
                src={imgUrl_1}
                alt={"title"}
                fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            </div>

            <div className="col-span-5 relative w-full h-[380px] md:h-[480px] bg-gray-200 overflow-hidden">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 duration-300"
                src={imgUrl_2}
                alt={"title"}
                fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            </div>

            <div className=" col-span-5 relative w-full h-[380px] md:h-[480px] bg-gray-200 overflow-hidden">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 duration-300"
                src={imgUrl_3}
                alt={"title"}
                fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            </div>

            <div className="col-span-7 relative w-full h-[380px] md:h-[480px] bg-gray-200 overflow-hidden">
              <Image
                className="object-cover w-full h-full group-hover:scale-110 duration-300"
                src={imgUrl_4}
                alt={"title"}
                fill
                priority={false}
                quality={100}
                loading="lazy"
              />
            </div>
          </div> */}
        </div>
      </div>

      <div className="relative w-full h-[320px] md:h-[800px] bg-white overflow-hidden">
        <Image
          className="object-cover h-full group-hover:scale-110 duration-300"
          src={img_6}
          alt={"title"}
          fill
          priority={false}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="py-16 md:py-120 bg-slate-400/5 dark:bg-zinc-900/40">
        <div className="container space-y-[120px]">
          <div className="flex flex-col md:flex-row gap-4 md:gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold dark:font-medium dark:text-white/80">
              Outcome
            </div>
            <p className="w-full text-md md:text-xl font-normal dark:font-light text-gray-700 dark:text-stone-500 leading-relaxed">
              The redesigned EBL Fund Transfer feature now offers a significantly enhanced user experience, with
              improved navigation, clearer instructions, and better error handling. The modernized interface aligns with
              contemporary mobile banking standards and addresses key usability issues, resulting in a more efficient
              and user-friendly fund transfer process. This redesign not only modernized the interface but also ensured
              it met user needs and expectations, boosting user satisfaction and reducing errors.
            </p>
          </div>
        </div>
      </div>

      {/* <button
        onClick={scrollToTop}
        className="w-12 h-12 bg-indigo-500 hover:bg-indigo-600 hover:-trangray-y-1.5 ease-in-out duration-300 cursor-pointer text-white fixed right-5 bottom-5 rounded-full flex items-center justify-center"
      >
        <RiArrowUpLine size={24} />
      </button> */}

      <Contact />
    </MainLayout>
  );
};

export default CaseStudyDetails;
