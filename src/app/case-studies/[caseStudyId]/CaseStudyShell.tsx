import MainLayout from "../../../../components/MainLayout";

const CaseStudyShell = ({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <MainLayout>
      <div className="bg-white text-slate-900">
        {/* Header */}
        <div className="mx-auto flex max-w-[1200px] flex-col items-start gap-4 px-6 pt-20">
          <p className="text-2xl lowercase leading-[1.5] text-[#5dbd25]">{label}</p>
          <h1 className="text-4xl font-semibold capitalize leading-[1.2] md:text-[56px]">
            {title}
          </h1>
        </div>

        <div className="mx-auto mt-12 flex max-w-[1200px] flex-col gap-[100px] px-6 pb-32">
          {children}
        </div>
      </div>
    </MainLayout>
  );
};

export default CaseStudyShell;
