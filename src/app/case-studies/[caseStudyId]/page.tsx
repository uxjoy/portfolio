import { RiCheckLine, RiCloseLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../../../components/Contact";
import Navabar from "../../../../components/navbar/Navabar";
import imgLandscape from "../../../../public/assets/placeholder-landscape.jpg";

const CaseStudyDetails = ({ params }: any) => {
  const caseStudyId = params.caseStudyId;

  return (
    <>
      {/* <Head>
        <title>Case Study {caseStudyId}</title>
        <meta
          name="description"
          content={`Case Study ${caseStudyId} description`}
        />
      </Head> */}

      <Navabar />

      <div className="py-12 md:py-100">
        <div className="container relative space-y-6 md:space-y-2">
          <div className="top-content">
            <div className="h3 capitalize font-semibold text-slate-900">
              Case Study Title Goes here
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[380px] md:h-[560px] bg-slate-200 overflow-hidden">
        <Image
          className="object-cover w-full h-full group-hover:scale-110 duration-300"
          src={imgLandscape}
          alt={"title"}
          fill
          priority={false}
          quality={100}
          loading="lazy"
        />
      </div>

      <div className="py-12 md:py-120">
        <div className="container ">
          <div className="overview flex gap-8">
            <div className="space-y-2 w-full">
              <label className="text-slate-500">Category</label>
              <p className="font-semibold text-xl">Mobile App</p>
            </div>

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
                href={"https://www.uxjoy.info"}
                className="font-semibold text-xl block underline underline-offset-4"
              >
                Click Here
              </Link>
            </div>
          </div>

          <div className="divider h-[1px] w-full bg-slate-200 my-24"></div>

          <div className="project-overview mt-16">
            <div className="flex gap-20">
              <div className="flex-initial w-6/12 text-3xl font-semibold">
                Project Overview
              </div>
              <p className="w-full text-xl text-slate-600  leading-relaxed">
                <span className="font-semibold text-slate-900">
                  {" "}
                  The EBL Fund Transfer feature{" "}
                </span>
                required a significant redesign to address usability issues and
                improve the overall user experience. The existing feature was
                cluttered and lacked clear instructions, causing confusion and
                errors during the transfer process. The redesign aimed to create
                an intuitive, modern, and user-friendly interface, focusing on
                fund transfer UX design and mobile banking optimization.
              </p>
            </div>
          </div>

          <div className="iframe w-full h-[500px] my-[100px] space-y-8">
            <div className="flex-initial w-6/12 text-3xl font-semibold">
              User Flow
            </div>

            <iframe
              width="100%"
              height="100%"
              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fboard%2Fs6Gwd6iNgh0gjQKLTvPhkT%2FEBL-%253A-Fund-Transfer-(Flow-Chart)%3Fnode-id%3D43-1263%26t%3DEIKsRTcFfiNbc1Pk-1"
              allowFullScreen
            ></iframe>
          </div>

          <div className="divider h-[1px] w-full bg-slate-200 my-24"></div>
        </div>
      </div>

      <div className="problems-and-solutions mt-16 bg-slate-950 text-white py-12 md:py-120">
        <div className="container space-y-32">
          <div className="flex gap-40">
            <div className="flex-initial w-6/12 text-3xl font-medium text-amber-500">
              Problem <br /> Identification
            </div>

            <div className="right w-full space-y-4 text-xl font-light text-slate-300">
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} className="text-amber-500" />
                </span>

                <span>
                  Cluttered interface with poor spacing and visual hierarchy.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} className="text-amber-500" />
                </span>
                <span>
                  Lack of clear instructions, particularly for new transfer
                  options.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} className="text-amber-500" />
                </span>
                <span>
                  Inadequate validation allowed incorrect account number
                  entries.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} className="text-amber-500" />
                </span>
                <span>Redundant call-to-actions cluttered the interface.</span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCloseLine size={24} className="text-amber-500" />
                </span>
                <span>
                  Transfer mode options were confusing and poorly explained.
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-40">
            <div className="flex-initial w-6/12 text-3xl font-medium text-green-500">
              Design <br /> Solutions
            </div>

            <div className="right w-full space-y-4 text-xl font-light text-slate-300">
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} className="text-green-400" />
                </span>

                <span>
                  Simplified layout with a modern UI to improve focus and
                  usability.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} className="text-green-400" />
                </span>
                <span>
                  Introduced clear separation of transfer options and added
                  instructional tooltips.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} className="text-green-400" />
                </span>
                <span>
                  Implemented validation for 13-digit account numbers and
                  improved error messaging.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} className="text-green-400" />
                </span>
                <span>
                  Streamlined navigation by removing unnecessary CTAs.
                </span>
              </div>
              <div className="flex gap-4">
                <span>
                  <RiCheckLine size={24} className="text-green-400" />
                </span>
                <span>
                  Redesigned the transfer mode modal with clear options and
                  explanations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
};

export default CaseStudyDetails;
