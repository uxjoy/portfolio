import Contact from "../../components/Contact";
import HeroBanner from "../../components/HeroBanner";
import Navabar from "../../components/Navabar";

export default function Home() {
  return (
    <main className="wrapper">
      <Navabar />

      <HeroBanner />

      <Contact />
    </main>
  );
}
