import Contact from "../../components/Contact";
import HeroBanner from "../../components/HeroBanner";
import Marquee from "../../components/Marquee";
import Navabar from "../../components/Navabar";

export default function Home() {
  return (
    <main className="wrapper">
      <Navabar />

      <HeroBanner />
      <Marquee />

      <Contact />
    </main>
  );
}
