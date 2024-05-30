import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";
import Portfolio from "./pages/Portfolio";
import Purpose from "./pages/Purpose";
import Collage from "./pages/Collage";
import Since2010 from "./pages/Since2010";
import Founder from "./pages/Founder";
import Team from "./pages/Team";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Promo />
      <Navbar />
      <Hero />
      <Portfolio/>
      <Purpose/>
      <Collage/>
      <Since2010/>
      <Founder/>
      <Team/>
      <Footer/>
    </div>
  );
}
