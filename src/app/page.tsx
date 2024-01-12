import Contact from "../../components/Contact";
import HeroBanner from "../../components/HeroBanner";
import Marquee from "../../components/Marquee";
import Navabar from "../../components/Navabar";
import SelectedWork from "../../components/SelectedWork";

export default function Home() {
  return (
    <main className="wrapper">
      <Navabar />

      <HeroBanner />
      <Marquee />

      <SelectedWork />

      <Contact />
    </main>
  );
}
