import { RiArrowLeftLine, RiTimeLine } from "@remixicon/react";
import Link from "next/link";
import MainLayout from "../../../../../components/MainLayout";

const UpcomingWork = ({ label, title }: { label: string; title: string }) => {
  return (
    <MainLayout>
      <div className="flex min-h-[80vh] items-center bg-white text-slate-900">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-6 px-6 py-24">
          <p className="text-2xl lowercase leading-[1.5] text-[#5dbd25]">{label}</p>
          <h1 className="text-4xl font-semibold capitalize leading-[1.2] md:text-[56px]">
            {title}
          </h1>

          <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#5dbd25]/10 px-4 py-2 text-sm font-medium text-[#5dbd25]">
            <RiTimeLine size={18} />
            Upcoming
          </span>

          <p className="max-w-[640px] text-lg leading-8 text-slate-500">
            I&apos;m currently writing up this work — the full breakdown of
            the process, decisions, and outcomes is on its way.
          </p>

          <Link
            href="/works"
            className="mt-6 inline-flex items-center gap-2 text-lg font-medium text-slate-900 duration-300 hover:text-[#5dbd25]"
          >
            <RiArrowLeftLine size={22} />
            Back to all works
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default UpcomingWork;
