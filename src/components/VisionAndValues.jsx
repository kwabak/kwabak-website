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
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".vision-fade",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-[#1d1d1d] py-28 px-6 md:px-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-[#E86C4F]/20 to-[#027A76]/20 rounded-full blur-[160px] opacity-30 animate-pulse z-0"></div>

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center vision-fade">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md mx-auto group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#E86C4F] to-[#027A76] blur-xl opacity-50 group-hover:blur-2xl transition duration-500 animate-pulse z-[-1]" />
            <img
              src={visionImage}
              alt="Vision"
              className="rounded-3xl shadow-xl w-full h-full object-cover z-10 relative"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#E86C4F]">Vision</span>
            </h2>
            <p className="text-lg text-[#1d1d1d]/80">
              We envision a future where African innovation leads global transformation. Our goal is to empower startups and SMEs with powerful tools, infrastructure, and mentorship, rooted in local culture and needs.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center vision-fade md:flex-row-reverse">
          <motion.div
            className="relative w-full max-w-sm md:max-w-md mx-auto group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#027A76] to-[#E86C4F] blur-xl opacity-50 group-hover:blur-2xl transition duration-500 animate-pulse z-[-1]" />
            <img
              src={valuesImage}
              alt="Values"
              className="rounded-3xl shadow-xl w-full h-full object-cover z-10 relative"
            />
          </motion.div>

          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Our <span className="text-[#027A76]">Values</span>
            </h2>
            <ul className="text-lg text-[#1d1d1d]/90 space-y-4">
              <li className="flex items-center space-x-3">
                <FaHandshake className="text-[#E86C4F] text-xl" />
                <span>Empowerment through technology</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaCogs className="text-[#E86C4F] text-xl" />
                <span>Authenticity and Afrocentric innovation</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaLeaf className="text-[#E86C4F] text-xl" />
                <span>Collaboration across communities</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaGlobe className="text-[#E86C4F] text-xl" />
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
