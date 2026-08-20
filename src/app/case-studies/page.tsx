import type { Metadata } from "next";
import ProjectCard from "../../../components/selectedWork/ProjectCard";

export const metadata: Metadata = {
  title: "Case Studies | Sohanur Rahman (Joy)",
  description:
    "In-depth product design case studies — fintech, e-commerce, travel, and SaaS projects by Sohanur Rahman (Joy).",
};

const caseStudies = [
  {
    url: "/case-studies/st-pay",
    tag: "Fintech",
    title: "ST Pay — Travel Wallet",
    description:
      "A secure in-app travel wallet designed to simplify payments for flights, hotels, and other travel services. Focused on seamless top-ups, clear transaction history, and frictionless checkout to improve trust, activation, and transaction completion.",
    imageURL: "/assets/selectedwork/st-pay.png",
    featured: true,
  },
  {
    url: "/case-studies/ebl-fund-transfer-redesign",
    tag: "Mobile Banking",
    title: "EBL Fund Transfer Redesign",
    description:
      "The redesign created an intuitive, modern, user-friendly interface, optimizing transfer UX and banking for a seamless experience.",
    imageURL: "/assets/selectedwork/ebl.webp",
  },
  {
    url: "#",
    tag: "E-commerce",
    title: "Shop Design",
    description:
      "Optimized product discovery and checkout flow to improve conversions and create a smooth shopping experience.",
    imageURL: "/assets/selectedwork/shop.png",
    commingSoon: true,
  },
  {
    url: "#",
    tag: "Travel Platform",
    title: "Flight Booking Experience",
    description:
      "Streamlined flight and hotel search, comparison, and checkout to reduce friction and increase booking completion.",
    imageURL: "/assets/selectedwork/flight.png",
    commingSoon: true,
  },
  {
    url: "#",
    tag: "SaaS Platform",
    title: "Internal Management System",
    description:
      "Built a scalable system for mobile and web with reusable components and consistent UX patterns.",
    imageURL: "/assets/selectedwork/saas.png",
    commingSoon: true,
  },
  {
    url: "#",
    tag: "Mobility Service",
    title: "Car Rental Experience",
    description:
      "Designed a smooth car booking journey with clear pricing and easy child seat selection for families.",
    imageURL: "/assets/selectedwork/car.png",
    commingSoon: true,
  },
];

const CaseStudies = () => {
  return (
    <main className="wrapper pb-28 sm:pb-0">
      <div className="main-lights-wrapper">
        <div className="lights-container">
          <div className="light-container left"></div>
          <div className="light-container left"></div>
          <div className="light-container center"></div>
          <div className="light-container right"></div>
          <div className="light-container last"></div>
        </div>
      </div>

      <section className="p-2 pt-16 md:pt-24">
        <div className="relative overflow-clip rounded-[24px] border-[3px] border-neutral-950 bg-neutral-950 py-[80px] md:rounded-[40px] md:py-[120px]">
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-[-1.5px] left-1/2 top-[-1.5px] w-[1200px] max-w-[1200px] -translate-x-1/2 border-x border-neutral-900"
          />

          <div className="container relative flex flex-col items-center gap-12">
            <div className="flex max-w-[580px] flex-col items-center gap-6 text-center">
              <p className="bg-gradient-to-r from-lime-500 from-20% to-indigo-500 to-70% bg-clip-text text-2xl font-medium italic text-transparent md:text-[32px]">
                Explore some of my
              </p>
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-[56px] md:leading-[64px]">
                Case Studies
              </h1>
            </div>

            <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
              {caseStudies.map((item) => (
                <div
                  key={item.title}
                  className={`group rounded-[24px] p-2 ${item.featured ? "md:col-span-2" : ""}`}
                >
                  <ProjectCard {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
