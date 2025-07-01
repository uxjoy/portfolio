import Contact from "../../components/Contact";
import Divider from "../../components/Divider";
import AboutNew from "../../components/about/AboutNew";
import AppScreen from "../../components/appScreen/appScreen";
import BentoGrid from "../../components/bento/page";
import ClientsFeedback from "../../components/clientFeedback/ClientsFeedback";
import GlobalWork from "../../components/globalWorkNetwork/GlobalWork";
import HeroSection from "../../components/heroBanner/HeroSection";
import BigTextMarquee from "../../components/marquee/BigTextMarquee";
import Header from "../../components/navbar/Header";
import RecentExploration from "../../components/recentExploration/RecentExploration";
import SelectedWork from "../../components/selectedWork/SelectedWork";

const Home = async () => {
  return (
    <main className="wrapper">
      <div className="main-lights-wrapper">
        <div className="lights-container">
          <div className="light-container left"></div>
          <div className="light-container left"></div>
          <div className="light-container center"></div>
          <div className="light-container right"></div>
          <div className="light-container last"></div>
        </div>
      </div>

      <Header />

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
    </main>
  );
};

export default Home;
