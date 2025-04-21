import React from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import visionImage from "../assets/african-woman.png";
import valuesImage from "../assets/african-man.png";
import { FaHandshake, FaCogs, FaLeaf, FaGlobe } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VisionAndValues = () => {
  React.useEffect(() => {
    gsap.fromTo(
      ".vision-fade",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".vision-fade",
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#332a5d] via-[#2a2a44] to-[#1d1d30] text-white py-28 px-6 md:px-20 overflow-hidden">
      {/* Glow ring background */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[1200px] h-[1200px] bg-gradient-to-r from-[#fd6c63]/20 to-[#00ffff]/20 rounded-full blur-[160px] opacity-30 animate-pulse z-0"></div>

      {/* Floating accent */}
      <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bg-[#fd6c63] w-[600px] h-[600px] rounded-full opacity-20 animate-pulse -top-40 -left-40"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center vision-fade relative">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md mx-auto mb-8 md:mb-0 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#fd6c63] to-[#00ffff] blur-xl opacity-70 group-hover:blur-2xl transition duration-500 animate-pulse z-[-1]"></div>
            <img
              src={visionImage}
              alt="Vision"
              className="rounded-3xl shadow-xl w-full h-full object-cover z-10 relative"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300 origin-left cursor-pointer">
              Our <span className="text-[#fd6c63]">Vision</span>
            </h2>
            <p className="text-lg text-white/80 hover:scale-105 transition-transform duration-300 cursor-pointer">
              We envision a future where African innovation leads global transformation. Our goal is to empower startups and SMEs with powerful tools, infrastructure, and mentorship, rooted in local culture and needs.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center vision-fade flex-row-reverse relative">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md mx-auto mb-8 md:mb-0 group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Glowing Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00ffff] to-[#fd6c63] blur-xl opacity-70 group-hover:blur-2xl transition duration-500 animate-pulse z-[-1]"></div>
            <img
              src={valuesImage}
              alt="Values"
              className="rounded-3xl shadow-xl w-full h-full object-cover z-10 relative"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 hover:scale-105 transition-transform duration-300 origin-left cursor-pointer">
              Our <span className="text-[#00ffff]">Values</span>
            </h2>
            <ul className="text-lg text-white/80 space-y-4 list-disc list-inside">
              <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <FaHandshake className="text-[#fd6c63] text-xl" />
                <span>Empowerment through technology</span>
              </li>
              <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <FaCogs className="text-[#fd6c63] text-xl" />
                <span>Authenticity and Afrocentric innovation</span>
              </li>
              <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <FaLeaf className="text-[#fd6c63] text-xl" />
                <span>Collaboration across communities</span>
              </li>
              <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <FaGlobe className="text-[#fd6c63] text-xl" />
                <span>Sustainable and inclusive growth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndValues;
