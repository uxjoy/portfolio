import CaseStudyShell from "./CaseStudyShell";
import StPayContent, { meta } from "./st-pay.mdx";

const StPayCaseStudy = () => (
  <CaseStudyShell label={meta.label} title={meta.title}>
    <StPayContent />
  </CaseStudyShell>
);

export default StPayCaseStudy;
