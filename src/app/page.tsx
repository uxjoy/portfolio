import Contact from "../../components/Contact";
import Divider from "../../components/Divider";
import MainLayout from "../../components/MainLayout";
import AboutNew from "../../components/about/AboutNew";
import AppScreen from "../../components/appScreen/appScreen";
import BentoGrid from "../../components/bento/page";
import ClientsFeedback from "../../components/clientFeedback/ClientsFeedback";
import GlobalWork from "../../components/globalWorkNetwork/GlobalWork";
import HeroSection from "../../components/heroBanner/HeroSection";
import BigTextMarquee from "../../components/marquee/BigTextMarquee";
import RecentExploration from "../../components/recentExploration/RecentExploration";
import SelectedWork from "../../components/selectedWork/SelectedWork";

const Home = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <MainLayout>
      <HeroSection />

      {/* <FeaturedProjects /> */}

      <AppScreen />

      {/* <Marquee /> */}
      <div className="container mb-20 hidden md:block">
        <Divider starText="case studies" endText="design process" />
      </div>

      <SelectedWork />

      <div className="pt-20">
        <BigTextMarquee />
      </div>

      <GlobalWork />

      <BentoGrid />

      <ClientsFeedback />

      <AboutNew />

      <RecentExploration />

      <Contact />
    </MainLayout>
  );
};

export default Home;
