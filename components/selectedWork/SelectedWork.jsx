"use client";

import { RiArrowRightUpLine } from "@remixicon/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

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
    // imageURL: "/assets/case-study/car/cover.jpg",
  },
  {
    url: "/works/internal-management",
    tag: "SaaS Platform",
    title: "Internal Management System",
    description:
      "Built a scalable system for mobile and web with reusable components and consistent UX patterns.",
    imageURL: "/assets/selectedwork/saas.png",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="">
      <div className="relative">
        {/* center guide line */}
        {/* <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-1.5px] left-1/2 top-[-1.5px] w-[1200px] max-w-[1200px] -translate-x-1/2 border-x border-neutral-900"
        /> */}

        <div className="container relative flex flex-col items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            className="flex max-w-[580px] flex-col items-center gap-6 text-center"
          >
            <p className="text-base text-white/70 uppercase">
              Explore some of my
            </p>
            <h2 className="text-4xl text-white md:text-[56px] md:leading-[64px]">
              Selected Works
            </h2>
          </motion.div>

          <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
            {works.map(
              ({ url, tag, title, description, imageURL, featured }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.75,
                    delay: (i % 2) * 0.1,
                  }}
                  className={`group rounded-[24px] p-2 ${featured ? "md:col-span-2" : ""}`}
                >
                  <ProjectCard
                    url={url}
                    title={title}
                    description={description}
                    tag={tag}
                    imageURL={imageURL}
                    featured={featured}
                  />
                </motion.div>
              ),
            )}
          </div>

          <Link
            href="/works"
            className="group flex items-center gap-2 text-lg font-normal text-white transition-colors bg-white/5 rounded-full px-5 py-3 hover:bg-white/20 mt-4"
          >
            View all works
            <RiArrowRightUpLine
              size={22}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
