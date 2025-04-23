import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaMicrochip , FaChartBar, FaPalette, FaHandsHelping } from "react-icons/fa";

const services = [
  {
    title: "Software & App Development",
    description: "Custom solutions that power African businesses—mobile, web, and enterprise-grade systems.",
    icon: <FaCode className="text-4xl text-[#E86C4F]" />,
  },
  {
    title: "AI Solutions",
    description: "Leverage artificial intelligence to automate, predict, and grow smarter.",
    icon: <FaMicrochip className="text-4xl text-[#027A76]" />,
  },
  {
    title: "Data Intelligence",
    description: "Turn raw data into actionable insights with our analytics and visualization tools.",
    icon: <FaChartBar className="text-4xl text-[#E86C4F]" />,
  },
  {
    title: "Brand Strategy & Design",
    description: "Build timeless African brands with stunning design and clear messaging.",
    icon: <FaPalette className="text-4xl text-[#027A76]" />,
  },
  {
    title: "Management Consulting",
    description: "Strategy, planning, and transformation support tailored to African SMEs.",
    icon: <FaHandsHelping className="text-4xl text-[#F4A24C]" />,
  },
];

const WhatWeDo = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-[#1d1d1d] py-24 px-6 md:px-20">
      <motion.div
        className="max-w-7xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          What <span className="text-[#E86C4F]">We Do</span>
        </h2>
        <p className="text-lg text-[#1d1d1d]/80 mt-4 max-w-3xl mx-auto">
          Empowering African SMEs with tailored digital solutions built for impact, scale, and community.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white/50 backdrop-blur-lg p-8 rounded-3xl border border-white/30 hover:shadow-2xl hover:shadow-[#E86C4F]/20 transition hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1d1d1d]">
              {service.title}
            </h3>
            <p className="text-[#1d1d1d]/80 text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Glow Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#E86C4F]/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#027A76]/10 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default WhatWeDo;
