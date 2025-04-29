import { useEffect, useRef, useState } from "react";
import Careers from "./components/Careers";
import ContactSection from "./components/ContactSection";
import CreativeExpression from "./components/CreativeExpression";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Loader from "./components/Loader";
import MeetTheTeam from "./components/MeetTheTeam";
import Navbar from "./components/Navbar";
import OurProcess from "./components/OurProcess";
import VisionAndValues from "./components/VisionAndValues";
import WhatWeDo from "./components/WhatWeDO";
import WhoWeAre from "./components/WhoWeAre";
import WhyAfrica from "./components/WhyAfrica";
import WhyChooseUs from "./components/WhyChooseUs";


const App = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const brandRef = useRef(null);
  const careerRef = useRef(null);
  

  const scrollToSection = (section) => {
    const sections = {
      Home: homeRef,
      About: aboutRef,
      Services: servicesRef,
      Contact: contactRef,
      "Logo Story": brandRef,
      Career: careerRef,
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
    <main className="overflow-x-hidden bg-[#fff]">
      <Navbar scrollToSection={scrollToSection} />
  
      {/* Home includes everything */}
      <div ref={homeRef}>
      <HeroSection scrollToSection={scrollToSection} />
        {/* <HeroSection /> */}
      </div>
  
      {/* Also group individual refs for targeted scroll */}
      <div ref={aboutRef} className="position: absolute; top: -9999px">
        <WhoWeAre />
        <VisionAndValues />
        <WhyAfrica />
        <MeetTheTeam />
      </div>
  
      <div ref={servicesRef} className="position: absolute; top: -9999px">
        <WhatWeDo />
        <OurProcess />
        <WhyChooseUs />
      </div>
  
      <div ref={brandRef} className="position: absolute; top: -9999px">
        <CreativeExpression />
      </div>
  
      <div ref={careerRef} className="position: absolute; top: -9999px">
        <Careers />
      </div>
  
      <div ref={contactRef} className="position: absolute; top: -9999px">
        <ContactSection />
      </div>
  
      <Footer />
    </main>
  );
};

export default App;
