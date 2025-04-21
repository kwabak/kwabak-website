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

const App = () => {
  return (
    <main className="overflow-x-hidden bg-[#332a5d]">
      <Navbar />
      <HeroSection />
      <WhyAfrica />
      <WhatWeDo />
      <OurProcess />
      <VisionAndValues />
      <WhyChooseUs />
      <MeetTheTeam />
      <Careers />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
