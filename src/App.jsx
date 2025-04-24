import { useEffect, useState, useRef } from "react";
import Loader from "./components/Loader";
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
import CreativeExpression from "./components/CreativeExpression";
import Footer from "./components/Footer";


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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <main className="overflow-x-hidden bg-[#fff]"> {/*F2E5D3*/}
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
