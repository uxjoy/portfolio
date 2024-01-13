import About from "../../components/About";
import Contact from "../../components/Contact";
import GlobalWork from "../../components/GlobalWork";
import HeroBanner from "../../components/HeroBanner";
import Marquee from "../../components/Marquee";
import Navabar from "../../components/Navabar";
import RecentExploration from "../../components/RecentExploration";
import SelectedWork from "../../components/SelectedWork";

export default function Home() {
  return (
    <main className="wrapper">
      <Navabar />

      <HeroBanner />
      <Marquee />

      <SelectedWork />

      <GlobalWork />

      <About />

      <RecentExploration />

      <Contact />
    </main>
  );
}
