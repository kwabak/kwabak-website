import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaLightbulb, FaCogs, FaRocket, FaUsers } from "react-icons/fa";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    title: "Discover",
    description: "We dive deep into your goals, pain points, and vision to shape impactful strategies.",
    icon: <FaLightbulb className="text-[#fd6c63] text-3xl" />,
  },
  {
    title: "Design",
    description: "Crafting bold and user-centric experiences that connect with your audience.",
    icon: <FaUsers className="text-[#00ffff] text-3xl" />,
  },
  {
    title: "Develop",
    description: "Building robust and scalable solutions with modern, flexible technologies.",
    icon: <FaCogs className="text-[#fd6c63] text-3xl" />,
  },
  {
    title: "Deploy",
    description: "From launch to growth, we ensure success and long-term sustainability.",
    icon: <FaRocket className="text-[#00ffff] text-3xl" />,
  },
];

const OurProcess = () => {
  useEffect(() => {
    const steps = gsap.utils.toArray(".process-card");
    steps.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-[#1d1d30] text-white py-24 px-6 md:px-20 overflow-hidden">
      {/* Decorative Glowing Rings */}
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#fd6c63]/30 to-[#00ffff]/30 rounded-full blur-[200px] opacity-50 animate-pulse z-0"></div>

      <motion.div
        className="max-w-6xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Our <span className="text-[#fd6c63]">Process</span>
        </h2>
        <p className="text-white/80 mt-4 max-w-2xl mx-auto">
          From idea to impact, our structured process helps African SMEs innovate and grow.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative z-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="process-card bg-white/5 p-8 rounded-3xl text-center backdrop-blur-md border border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] transition-all hover:scale-105"
          >
            <div className="mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold text-[#fd6c63] mb-2">{step.title}</h3>
            <p className="text-white/80 text-sm">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Glowing background blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#fd6c63]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00ffff]/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default OurProcess;
