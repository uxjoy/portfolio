import CarRentalContent, { meta as carRentalMeta } from "./studies/car-rental.mdx";
import CaseStudyShell from "./components/CaseStudyShell";
import FlightBookingContent, {
  meta as flightBookingMeta,
} from "./studies/flight-booking.mdx";
import InternalManagementContent, {
  meta as internalManagementMeta,
} from "./studies/internal-management.mdx";
import ShopDesignContent, { meta as shopDesignMeta } from "./studies/shop-design.mdx";
import EblCaseStudy from "./studies/ebl/EblCaseStudy";
import StPayCaseStudy from "./studies/st-pay/StPayCaseStudy";

const mdxCaseStudies: Record<
  string,
  { label: string; title: string; Content: React.ComponentType }
> = {
  "shop-design": { ...shopDesignMeta, Content: ShopDesignContent },
  "flight-booking": { ...flightBookingMeta, Content: FlightBookingContent },
  "internal-management": {
    ...internalManagementMeta,
    Content: InternalManagementContent,
  },
  "car-rental": { ...carRentalMeta, Content: CarRentalContent },
};

const CaseStudyDetails = async (props: any) => {
  const caseStudyId = await props.params.caseStudyId;

  if (caseStudyId === "st-pay") {
    return <StPayCaseStudy />;
  }

  const mdxCase = mdxCaseStudies[caseStudyId];
  if (mdxCase) {
    const { label, title, Content } = mdxCase;
    return (
      <CaseStudyShell label={label} title={title}>
        <Content />
      </CaseStudyShell>
    );
  }

  // EBL is the default/fallback case study
  return <EblCaseStudy />;
};

export default CaseStudyDetails;
