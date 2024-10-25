import Contact from "../../components/Contact";
import About from "../../components/about/About";
import ClientsFeedback from "../../components/clientFeedback/ClientsFeedback";
import GlobalWork from "../../components/globalWorkNetwork/GlobalWork";
import HeroSection from "../../components/heroBanner/HeroSection";
import BigTextMarquee from "../../components/marquee/BigTextMarquee";
import Marquee from "../../components/marquee/Marquee";
import Navabar from "../../components/navbar/Navabar";
import RecentExploration from "../../components/recentExploration/RecentExploration";
import SelectedWork from "../../components/selectedWork/SelectedWork";

const Home = () => {
  return (
    <main className="wrapper" id="back_to_top">
      <div className="main-lights-wrapper">
        <div className="lights-container">
          <div className="light-container left"></div>
          <div className="light-container left"></div>
          <div className="light-container center"></div>
          <div className="light-container right"></div>
          <div className="light-container last"></div>
        </div>
      </div>

      <Navabar />

      <HeroSection />

      {/* <HeroBanner /> */}

      <Marquee />

      <SelectedWork />

      <ClientsFeedback />

      <BigTextMarquee />

      <GlobalWork />

      <About />

      <RecentExploration />

      <Contact />
    </main>
  );
};

export default Home;
