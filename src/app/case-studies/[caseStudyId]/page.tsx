import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../../../components/Contact";
import Navabar from "../../../../components/navbar/Navabar";
import branding from "../../../../public/assets/case-study/branding.png";
import imgLandscape from "../../../../public/assets/case-study/ebl-overview.jpg";
import img_6 from "../../../../public/assets/case-study/img_6.png";
import explanation_img_1 from "../../../../public/assets/case-study/new/img_1.jpg";
import explanation_img_2 from "../../../../public/assets/case-study/new/img_2.jpg";
import explanation_img_3 from "../../../../public/assets/case-study/new/img_3.jpg";
import explanation_img_4 from "../../../../public/assets/case-study/new/img_4.jpg";
import explanation_img_5 from "../../../../public/assets/case-study/new/img_5.jpg";

const CaseStudyDetails = ({ params }: any) => {
  const caseStudyId = params.caseStudyId;

  return (
    <>
      <Navabar />

      <div className="py-12 md:py-100">
        <div className="container relative space-y-6 md:space-y-2">
          <div className="top-content w-3/4">
            <div className="uppercase text-lg text-slate-400">case study</div>
            <h1 className="h3 capitalize font-bold text-slate-400 w-full mt-4" style={{ lineHeight: 1.3 }}>
              <span className="text-slate-900">EBL Fund Transfer</span> redesign for mobile app
            </h1>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[380px] md:h-[920px] 2xl:h-[1080px] bg-white overflow-hidden">
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

      <div className="py-12 md:py-120">
        <div className="container space-y-[120px]">
          <div className="overview flex gap-8">
            <div className="space-y-2 w-full">
              <label className="text-slate-500">Role</label>
              <p className="font-semibold text-xl">Product Designer</p>
            </div>

            <div className="space-y-2 w-full">
              <label className="text-slate-500">Start Date</label>
              <p className="font-semibold text-xl">02 August 2024</p>
            </div>

            <div className="space-y-2 w-full">
              <label className="text-slate-500">Completion Date</label>
              <p className="font-semibold text-xl">15 August 2024</p>
            </div>

            <div className="space-y-2 w-full">
              <label className="text-slate-500">Figma</label>
              <Link
                href={"https://www.figma.com/design/ujYWr8iLm1RuZYI1jku0LH/EBL-%3A-Fund-Transfer?node-id=158-4817"}
                className="font-semibold text-xl block underline underline-offset-4 text-indigo-500 hover:underline-offset-8 ease-in-out duration-300"
              >
                Design Link
              </Link>
            </div>

            <div className="space-y-2 w-full">
              <label className="text-slate-500">Category</label>
              <p className="font-semibold text-xl">Mobile App</p>
            </div>
          </div>

          <div className="divider h-[1px] w-full bg-slate-100 my-24"></div>

          <div className="project-overview mt-16">
            <div className="flex gap-40">
              <div className="flex-initial w-6/12 text-3xl font-semibold">
                Project <br /> Overview
              </div>
              <p className="w-full text-xl font-normal text-slate-700  leading-relaxed">
                <span className="font-medium text-slate-900"> The EBL Fund Transfer feature </span>
                required a significant redesign to address usability issues and improve the overall user experience. The
                existing feature was cluttered and lacked clear instructions, causing confusion and errors during the
                transfer process. The redesign aimed to create an intuitive, modern, and user-friendly interface,
                focusing on fund transfer UX design and mobile banking optimization.
              </p>
            </div>
          </div>

          {/* <div className="divider h-[1px] w-full bg-slate-100 my-24"></div> */}
        </div>
      </div>

      <div className="problems-and-solutions mt-16 bg-indigo-500 text-white py-12 md:py-[160px]">
        <div className="container space-y-32">
          <div className="flex gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold">
              Problem <br /> Identification
            </div>

            <div className="right w-full space-y-4 text-xl font-light text-white">
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} />
                </span>

                <span>Cluttered interface with poor spacing and visual hierarchy.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} />
                </span>
                <span>Lack of clear instructions, particularly for new transfer options.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} />
                </span>
                <span>Inadequate validation allowed incorrect account number entries.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} />
                </span>
                <span>Redundant call-to-actions cluttered the interface.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} />
                </span>
                <span>Transfer mode options were confusing and poorly explained.</span>
              </div>
            </div>
          </div>

          <div className="flex gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold">
              Design <br /> Solutions
            </div>

            <div className="right w-full space-y-4 text-xl font-light text-white">
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} />
                </span>

                <span>Simplified layout with a modern UI to improve focus and usability.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} />
                </span>
                <span>Introduced clear separation of transfer options and added instructional tooltips.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} />
                </span>
                <span>Implemented validation for 13-digit account numbers and improved error messaging.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} />
                </span>
                <span>Streamlined navigation by removing unnecessary CTAs.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} />
                </span>
                <span>Redesigned the transfer mode modal with clear options and explanations.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="iframe py-12 md:py-120 md:mb-12">
        <div className="container">
          <div className="w-full h-[500px] space-y-8">
            <div className="flex-initial w-6/12 text-3xl font-semibold">User Flow</div>

            <iframe
              width="100%"
              height="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2Fs6Gwd6iNgh0gjQKLTvPhkT%2FEBL-%253A-Fund-Transfer-(Flow-Chart)%3Fnode-id%3D43-1263%26t%3DEIKsRTcFfiNbc1Pk-1"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[380px] md:h-[700px]  2xl:h-[1080px]  bg-slate-200 overflow-hidden">
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

      <div className="explanation py-12 md:py-120">
        <div className="container">
          <div className="segments space-y-28">
            <div className="row flex gap-16 items-center">
              <div className="left w-full">
                <div className="relative w-full h-[380px] md:h-[472px]  2xl:h-[580px]  bg-slate-200 overflow-hidden rounded-3xl">
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
              </div>

              <div className="right w-full">
                <div className="space-y-5 px-12 w-full">
                  <div className="text-3xl font-semibold">Choose Options</div>

                  <div className="content w-full text-xl font-normal text-slate-700 leading-relaxed space-y-4">
                    <p>
                      <span className="font-semibold text-gray-900">Fund Transfer: </span> More options visible and
                      ensuring a consistent design throughout. This results in a clearer and more cohesive user
                      experience.
                    </p>
                    <p>
                      <span className="font-semibold text-gray-900">Transfer Mode: </span> There are three
                      options—BEFTN, NPSB, and RTGS—but the borders made it look like six options. Additionally, the old
                      design didn’t provide explanations for these transfer modes. The new UI resolves these issues by
                      clearly displaying the three options and offering explanations for each mode, enhancing clarity
                      and usability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row flex gap-16 items-center flex-row-reverse">
              <div className="left w-full">
                <div className="relative w-full h-[380px] md:h-[472px]  2xl:h-[580px]  bg-slate-200 overflow-hidden rounded-3xl">
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
                <div className="space-y-5 px-12">
                  <div className="text-3xl font-semibold">Beneficiary</div>

                  <div className="content w-full text-xl font-normal text-slate-700  leading-relaxed space-y-4">
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

            <div className="row flex gap-16 items-center">
              <div className="left w-full">
                <div className="relative w-full h-[380px] md:h-[472px]  2xl:h-[580px]  bg-slate-200 overflow-hidden rounded-3xl">
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
                <div className="space-y-5 px-12 w-full">
                  <div className="text-3xl font-semibold">Transfer Amount</div>

                  <div className="content w-full text-xl font-normal text-slate-700  leading-relaxed space-y-4">
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

            <div className="row flex gap-16 items-center flex-row-reverse">
              <div className="left w-full">
                <div className="relative w-full h-[380px] md:h-[472px]  2xl:h-[580px]  bg-slate-200 overflow-hidden rounded-3xl">
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
                <div className="space-y-5 px-12">
                  <div className="text-3xl font-semibold">Transfer Overview</div>

                  <div className="content w-full text-xl font-normal text-slate-700  leading-relaxed space-y-4">
                    <p>
                      In the updated design, the transfer overview has been cleaned up to enhance visual appeal and
                      maintain consistency throughout the interface. The new design ensures a more streamlined and
                      attractive presentation, improving the overall user experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row flex gap-16 items-center">
              <div className="left w-full">
                <div className="relative w-full h-[380px] md:h-[472px]  2xl:h-[580px]  bg-slate-200 overflow-hidden rounded-3xl">
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
                <div className="space-y-5 px-12">
                  <div className="text-3xl font-semibold">Save Beneficiary</div>

                  <div className="content w-full text-xl font-normal text-slate-700  leading-relaxed space-y-4">
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

      <div className="design-process py-12 md:py-120 bg-slate-950 text-white">
        <div className="container space-y-[120px]">
          <div className="flex gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold">Design Process</div>

            <div className="w-full font-normal space-y-10 leading-relaxed">
              <div className="pl-12 relative">
                <span className="absolute top-0 left-0">
                  <RiCheckLine size={26} />
                </span>

                <h4 className="text-xl font-medium mb-2">Research & Analysis:</h4>
                <p className="text-gray-400 font-light text-lg">
                  I conducted a comprehensive analysis of user feedback and pain points to identify key areas for
                  improvement.
                </p>
              </div>

              <div className="pl-12 relative">
                <span className="absolute top-0 left-0">
                  <RiCheckLine size={26} />
                </span>

                <h4 className="text-xl font-medium mb-2">Wireframing & Prototyping:</h4>
                <p className="text-gray-400 font-light text-lg">
                  Developed wireframes and prototypes to explore and refine design solutions, ensuring alignment with
                  user needs and preferences.
                </p>
              </div>

              <div className="pl-12 relative">
                <span className="absolute top-0 left-0">
                  <RiCheckLine size={26} />
                </span>

                <h4 className="text-xl font-medium mb-2">User Testing:</h4>
                <p className="text-gray-400 font-light text-lg">
                  Performed usability testing with a representative sample of users to gather insights and fine-tune the
                  design for optimal user satisfaction.
                </p>
              </div>

              <div className="pl-12 relative">
                <span className="absolute top-0 left-0">
                  <RiCheckLine size={26} />
                </span>

                <h4 className="text-xl font-medium mb-2">Final Implementation:</h4>
                <p className="text-gray-400 font-light text-lg">
                  The final design was implemented with a focus on maintaining consistency, enhancing usability, and
                  presenting a modern, appealing aesthetic.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="divider w-full h-[1px] bg-slate-900"></div>

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
            <div className="col-span-12 relative w-full h-[380px] md:h-[760px] bg-slate-200 overflow-hidden">
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

            <div className="col-span-7 relative w-full h-[380px] md:h-[480px] bg-slate-200 overflow-hidden">
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

            <div className="col-span-5 relative w-full h-[380px] md:h-[480px] bg-slate-200 overflow-hidden">
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

            <div className=" col-span-5 relative w-full h-[380px] md:h-[480px] bg-slate-200 overflow-hidden">
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

            <div className="col-span-7 relative w-full h-[380px] md:h-[480px] bg-slate-200 overflow-hidden">
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

      <div className="relative w-full h-[380px] md:h-[800px] bg-white overflow-hidden">
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

      <div className="py-12 md:py-120 bg-slate-50">
        <div className="container space-y-[120px]">
          <div className="flex gap-40">
            <div className="flex-initial w-6/12 text-3xl font-semibold">Outcome</div>
            <p className="w-full text-xl font-normal text-slate-700  leading-relaxed">
              The redesigned EBL Fund Transfer feature now offers a significantly enhanced user experience, with
              improved navigation, clearer instructions, and better error handling. The modernized interface aligns with
              contemporary mobile banking standards and addresses key usability issues, resulting in a more efficient
              and user-friendly fund transfer process. This redesign not only modernized the interface but also ensured
              it met user needs and expectations, boosting user satisfaction and reducing errors.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default CaseStudyDetails;
