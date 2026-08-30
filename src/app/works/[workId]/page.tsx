import CarRentalContent, { meta as carRentalMeta } from "./studies/car-rental.mdx";
import WorkShell from "./components/WorkShell";
import UpcomingWork from "./components/UpcomingWork";
import FlightBookingContent, {
  meta as flightBookingMeta,
} from "./studies/flight-booking.mdx";
import { meta as internalManagementMeta } from "./studies/internal-management.mdx";
import ShopDesignContent, { meta as shopDesignMeta } from "./studies/shop-design.mdx";
import EblWork from "./studies/ebl/EblWork";
import StPayContent, { meta as stPayMeta } from "./studies/st-pay.mdx";

const mdxWorks: Record<
  string,
  { label: string; title: string; Content: React.ComponentType }
> = {
  "st-pay": { ...stPayMeta, Content: StPayContent },
  "shop-design": { ...shopDesignMeta, Content: ShopDesignContent },
  "flight-booking": { ...flightBookingMeta, Content: FlightBookingContent },
  "car-rental": { ...carRentalMeta, Content: CarRentalContent },
};

// Works that are announced but not published yet
const upcomingWorks: Record<
  string,
  { label: string; title: string; image?: string }
> = {
  "internal-management": {
    ...internalManagementMeta,
    image: "/assets/selectedwork/saas.png",
  },
};

const WorkDetails = async (props: any) => {
  const { workId } = await props.params;

  const upcomingWork = upcomingWorks[workId];
  if (upcomingWork) {
    const { label, title, image } = upcomingWork;
    return <UpcomingWork label={label} title={title} image={image} />;
  }

  const mdxWork = mdxWorks[workId];
  if (mdxWork) {
    const { label, title, Content } = mdxWork;
    return (
      <WorkShell label={label} title={title}>
        <Content />
      </WorkShell>
    );
  }

  // EBL is the default/fallback work
  return <EblWork />;
};

export default WorkDetails;
