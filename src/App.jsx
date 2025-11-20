import HeroSection from "./components/HeroSection";
import StatsAndServices from "./components/StatsAndServices";
import PricingSection from "./components/Pricing";
import Navbar from "./components/Navbar";
import ToolsAndTestimonials from "./components/ToolsandTestimonials";
import MeetOurTrainers from "./components/meettrainers";
import FAQSection from "./components/FAQ";
import FooterSection from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <HeroSection />
      <StatsAndServices />
      <PricingSection />
      <ToolsAndTestimonials />
      <MeetOurTrainers />
      <FAQSection />
      <FooterSection />
    </div>
  );
}

export default App;
