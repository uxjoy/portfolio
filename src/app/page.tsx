import Contact from "../../components/Contact";
import About from "../../components/about/About";
import ClientsFeedback from "../../components/clientFeedback/ClientsFeedback";
import GlobalWork from "../../components/globalWorkNetwork/GlobalWork";
import HeroBanner from "../../components/heroBanner/HeroBanner";
import Marquee from "../../components/marquee/Marquee";
import Navabar from "../../components/navbar/Navabar";
import RecentExploration from "../../components/recentExploration/RecentExploration";
import SelectedWork from "../../components/selectedWork/SelectedWork";

export default function Home() {
  return (
    <main className="wrapper">
      <Navabar />

      <HeroBanner />
      <Marquee />

      <SelectedWork />

      <ClientsFeedback />

      <GlobalWork />

      <About />

      <RecentExploration />

      <Contact />
    </main>
  );
}
