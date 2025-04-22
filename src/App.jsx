import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyAfrica from "./components/WhyAfrica";
import WhatWeDo from "./components/WhatWeDO";
import OurProcess from "./components/OurProcess";
import VisionAndValues from "./components/VisionAndValues";
import MeetTheTeam from "./components/MeetTheTeam";
import WhyChooseUs from "./components/WhyChooseUs";
import Careers from "./components/Careers";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CreativeExpression from "./components/CreativeExpression";

const App = () => {
  return (
    <main className="overflow-x-hidden bg-[#F2E5D3]">
      <Navbar />
      <HeroSection />
      <WhyAfrica />
      <WhatWeDo />
      <OurProcess />
      <VisionAndValues />
      <WhyChooseUs />
      <CreativeExpression />
      <MeetTheTeam />
      <Careers />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
