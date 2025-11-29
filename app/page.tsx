import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EditorsPick from "../components/EditorsPick";
import DesktopProductSection from "../components/DesktopProductSection";
import NewProductCards from "../components/NewProductCards";
import FigmaComponent from "../components/FigmaComponent";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <DesktopProductSection /> */}
      <NewProductCards />
      <FigmaComponent />
      {/* <EditorsPick /> */}
    </div>
  );
}
