// import Navbar from "./components/Navbar";
// import HeroSection from "./components/HeroSection";
// import WhyAfrica from "./components/WhyAfrica";
// import WhatWeDo from "./components/WhatWeDO";
// import OurProcess from "./components/OurProcess";
// import VisionAndValues from "./components/VisionAndValues";
// import MeetTheTeam from "./components/MeetTheTeam";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Careers from "./components/Careers";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import CreativeExpression from "./components/CreativeExpression";

// const App = () => {
//   return (
//     <main className="overflow-x-hidden bg-[#F2E5D3]">
//       <Navbar />
//       <HeroSection />
//       <WhyAfrica />
//       <WhatWeDo />
//       <OurProcess />
//       <VisionAndValues />
//       <WhyChooseUs />
//       <CreativeExpression />
//       <MeetTheTeam />
//       <Careers />
//       <ContactSection />
//       <Footer />
//     </main>
//   );
// }

// export default App;

import { useRef } from "react";
import Careers from "./components/Careers";
import ContactSection from "./components/ContactSection";
import CreativeExpression from "./components/CreativeExpression";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MeetTheTeam from "./components/MeetTheTeam";
import Navbar from "./components/Navbar";
import OurProcess from "./components/OurProcess";
import VisionAndValues from "./components/VisionAndValues";
import WhatWeDo from "./components/WhatWeDO";
import WhyAfrica from "./components/WhyAfrica";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const sections = {
      Home: homeRef,
      About: aboutRef,
      Services: servicesRef,
      Contact: contactRef,
    };
    sections[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="overflow-x-hidden bg-[#F2E5D3]">
      <Navbar scrollToSection={scrollToSection} />
      
      <div ref={homeRef}>
        <HeroSection />
        <WhyAfrica />
      </div>

      <div ref={servicesRef}>
        <WhatWeDo />
        <OurProcess />
        <VisionAndValues />
        <WhyChooseUs />
        <CreativeExpression />
      </div>

      <div ref={aboutRef}>
        <MeetTheTeam />
        <Careers />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
};

export default App;
