import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import visionImage from "../assets/african-woman.png";
import { FaHandshake, FaCogs, FaGlobe } from "react-icons/fa";
import { FaPeopleLine } from "react-icons/fa6";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VisionAndValues = () => {
  useEffect(() => {
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

  const valueItems = [
    { icon: <FaHandshake />, label: "Empowerment through technology" },
    { icon: <FaCogs />, label: "Authenticity and Afrocentric innovation" },
    { icon: <FaPeopleLine  />, label: "Collaboration across communities" },
    { icon: <FaGlobe />, label: "Sustainable and inclusive growth" },
  ];

  return (
    <section className="relative bg-[#F2E5D3] text-white py-28 px-6 md:px-20 overflow-hidden">
      

      <div className="max-w-7xl mx-auto space-y-32 relative z-10">
        {/* Vision Section */}
        <div className="relative vision-fade rounded-3xl overflow-hidden min-h-[700px]">
          <img
            src={visionImage}
            alt="Vision Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1d1d1d]/60" />

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-10 md:p-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#E86C4F]">Our Vision</h2>
              <p className="text-lg text-white/90">
                We envision a future where African innovation leads global transformation. Our goal is to empower startups and SMEs with powerful tools, infrastructure, and mentorship, rooted in local culture and needs.
              </p>

              <motion.div className="mt-[4rem]">
                <h2 className="text-4xl md:text-5xl font-bold text-[#027A76] mb-4">Our Values</h2>
                <div className="flex flex-col divide-y divide-white/30">
                  {valueItems.map((item, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-4 py-6"
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.3, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl text-[#E86C4F] shrink-0">{item.icon}</div>
                      <span className="text-lg font-medium text-white/90">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <div className="hidden md:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionAndValues;
