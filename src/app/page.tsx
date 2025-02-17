import Contact from "../../components/Contact";
import MainLayout from "../../components/MainLayout";
import About from "../../components/about/About";
import ClientsFeedback from "../../components/clientFeedback/ClientsFeedback";
import GlobalWork from "../../components/globalWorkNetwork/GlobalWork";
import HeroSection from "../../components/heroBanner/HeroSection";
import BigTextMarquee from "../../components/marquee/BigTextMarquee";
import Marquee from "../../components/marquee/Marquee";
import RecentExploration from "../../components/recentExploration/RecentExploration";
import SelectedWork from "../../components/selectedWork/SelectedWork";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />

      <Marquee />

      <SelectedWork />

      <ClientsFeedback />

      <BigTextMarquee />

      <GlobalWork />

      <About />

      <RecentExploration />

      <Contact />
    </MainLayout>
  );
};

export default Home;
