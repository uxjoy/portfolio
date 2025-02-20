import Contact from "../../components/Contact";
import Divider from "../../components/Divider";
import MainLayout from "../../components/MainLayout";
import About from "../../components/about/About";
import ClientsFeedback from "../../components/clientFeedback/ClientsFeedback";
import FeaturedProjects from "../../components/featuredProjects/FeaturedProjects";
import GlobalWork from "../../components/globalWorkNetwork/GlobalWork";
import HeroSection from "../../components/heroBanner/HeroSection";
import BigTextMarquee from "../../components/marquee/BigTextMarquee";
import RecentExploration from "../../components/recentExploration/RecentExploration";
import SelectedWork from "../../components/selectedWork/SelectedWork";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />

      <FeaturedProjects />

      {/* <Marquee /> */}
      <div className="container mb-20 hidden md:block">
        <Divider starText="case studies" endText="design process" />
      </div>

      <SelectedWork />

      <div className="pt-20">
        <BigTextMarquee />
      </div>

      <GlobalWork />

      <ClientsFeedback />

      <About />

      <RecentExploration />

      <Contact />
    </MainLayout>
  );
};

export default Home;
