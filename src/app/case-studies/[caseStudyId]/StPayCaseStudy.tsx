import MainLayout from "../../../../components/MainLayout";
import StPayContent, { meta } from "./st-pay.mdx";

const StPayCaseStudy = () => {
  return (
    <MainLayout>
      <div className="bg-white text-slate-900">
        {/* Header */}
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-6 pt-20">
          <p className="text-2xl lowercase leading-[1.5] text-[#5dbd25]">
            {meta.label}
          </p>
          <h1 className="text-4xl font-semibold capitalize leading-[1.2] md:text-[56px]">
            {meta.title}
          </h1>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-[100px] px-6 pb-32">
          <StPayContent />
        </div>
      </div>
    </MainLayout>
  );
};

export default StPayCaseStudy;
