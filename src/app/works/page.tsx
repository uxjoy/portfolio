import type { Metadata } from "next";
import MainLayout from "../../../components/MainLayout";
import ProjectCard from "../../../components/selectedWork/ProjectCard";

export const metadata: Metadata = {
  title: "Works | Sohanur Rahman (Joy)",
  description:
    "In-depth product design works — fintech, e-commerce, travel, and SaaS projects by Sohanur Rahman (Joy).",
};

const works = [
  {
    url: "/works/st-pay",
    tag: "Fintech",
    title: "ST Pay — Travel Wallet",
    description:
      "A secure in-app travel wallet designed to simplify payments for flights, hotels, and other travel services. Focused on seamless top-ups, clear transaction history, and frictionless checkout to improve trust, activation, and transaction completion.",
    imageURL: "/assets/selectedwork/st-pay.png",
    featured: true,
  },
  // {
  //   url: "/works/ebl-fund-transfer-redesign",
  //   tag: "Mobile Banking",
  //   title: "EBL Fund Transfer Redesign",
  //   description:
  //     "The redesign created an intuitive, modern, user-friendly interface, optimizing transfer UX and banking for a seamless experience.",
  //   imageURL: "/assets/selectedwork/ebl.webp",
  // },
  {
    url: "/works/shop-design",
    tag: "E-commerce",
    title: "Shop Design",
    description:
      "Optimized product discovery and checkout flow to improve conversions and create a smooth shopping experience.",
    imageURL: "/assets/selectedwork/shop.png",
  },
  {
    url: "/works/flight-booking",
    tag: "Travel Platform",
    title: "Flight Booking Experience",
    description:
      "Streamlined flight and hotel search, comparison, and checkout to reduce friction and increase booking completion.",
    imageURL: "/assets/selectedwork/flight.png",
  },
  {
    url: "/works/car-rental",
    tag: "Mobility Service",
    title: "Car Rental Experience",
    description:
      "Designed a smooth car booking journey with clear pricing and easy child seat selection for families.",
    imageURL: "/assets/selectedwork/car.png",
  },
  {
    url: "/works/internal-management",
    tag: "SaaS Platform",
    title: "Internal Management System",
    description:
      "Built a scalable system for mobile and web with reusable components and consistent UX patterns.",
    imageURL: "/assets/selectedwork/saas.png",
    commingSoon: true,
  },
];

const Works = () => {
  return (
    <MainLayout light>
      <div className="bg-white pt-16 md:pt-24">
        <section className="container flex flex-col items-center gap-12 pb-28">
          <div className="flex max-w-[580px] flex-col items-center gap-6 text-center">
            <p className="text-base text-slate-900 uppercase">
              Explore some of my
            </p>
            <h1 className="text-4xl text-slate-900 md:text-[56px] md:leading-[64px]">
              My Works
            </h1>
          </div>

          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {works.map((item) => (
              <div
                key={item.title}
                className={`group rounded-[24px] p-2 ${item.featured ? "md:col-span-2" : ""}`}
              >
                <ProjectCard {...item} light />
              </div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Works;
