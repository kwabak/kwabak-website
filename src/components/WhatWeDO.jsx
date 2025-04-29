import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaMicrochip, FaChartBar, FaPalette, FaHandsHelping } from "react-icons/fa";
import Modal from "./Modal";

const services = [
  {
    title: "Software & App Development",
    description: "We build custom software solutions and craft high-performance iOS and Android applications built for scale.",
    icon: <FaCode className="text-4xl text-[#E86C4F]" />, 
    details: "We create custom software solutions precisely matched to your business needs. From professional websites and e-commerce platforms to intuitive mobile apps across all operating systems, our development team delivers products that perform and impress. Our design expertise ensures attractive, user-friendly interfaces that strengthen your brand and drive engagement, whether building new or transforming existing solutions."
  },
  {
    title: "AI Solutions",
    description: "Enterprise-grade AI integration without the complexity. Unlock intelligence across your business ecosystem.",
    icon: <FaMicrochip className="text-4xl text-[#027A76]" />,
    details: "We provide businesses with seamless access to cutting-edge AI technologies and tools, eliminating the need for in-house development. Our scalable AI solutions integrate effortlessly into your existing applications, empowering your organization to harness the power of AI for automation, personalized customer experiences, and advanced decision-making. With our service, you can unlock new efficiencies and insights, driving innovation while focusing on your core business objectives."
  },
  {
    title: "Data Intelligence",
    description: "Turn untapped data into strategic clarity for effective decision making.",
    icon: <FaChartBar className="text-4xl text-[#E86C4F]" />,
    details: "We transform untapped data into actionable insights, shifting decision-making from gut feelings to informed choices. Our analytics frameworks uncover patterns, forecast trends, and reveal opportunities that many African businesses gather but fail to fully exploit. From identifying hidden revenue streams to optimizing operational costs, we help you leverage your data for measurable business impact."
  },
  {
    title: "Brand Strategy & Design",
    description: "Visual storytelling with strategic purpose. We craft identities that command attention and drive results.",
    icon: <FaPalette className="text-4xl text-[#027A76]" />,
    details: "We create compelling visual identities focused on highlighting your brand's strengths and developing distinctive strategies that set you apart in the marketplace. We offer a full spectrum of brand identity & marketing services, from logo/web design to SEO to integrated campaigns, crafting targeted approaches that help you establish a unique identity and connect with your audience. Our experienced professionals leverage creative thinking to deliver compelling results that engage users and elevate your brand presence."
  },
  {
    title: "Management Consulting",
    description: "Operational excellence through ruthless prioritization. We identify the invisible barriers to your growth.",
    icon: <FaHandsHelping className="text-4xl text-[#F4A24C]" />,
    details: "We transform your core business operations through strategic analysis and practical implementation. Our team delivers focused solutions in sales effectiveness, market entry strategy, operational efficiency, growth planning and security risk management. We identify hidden performance barriers and build measurable improvement frameworks that create lasting competitive advantages. Our consulting approach complements our technical expertise, ensuring your business objectives and technology implementations are perfectly aligned."
  },
];

const WhatWeDo = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-[#fff] via-[#fff] to-[#F2E5D3] text-[#1d1d1d] py-24 px-6 md:px-20">
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
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl border border-[#E86C4F]/20 shadow-md hover:shadow-lg hover:border-[#E86C4F] transition-transform duration-300 hover:scale-[1.03]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-[#1d1d1d]">
              {service.title}
            </h3>
            <p className="text-[#1d1d1d]/80 text-sm mb-4">
              {service.description}
            </p>
            <button
              className="mt-2 px-5 py-2 bg-[#E86C4F] text-white rounded-full text-sm hover:bg-[#cf563b] transition cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              Learn More
            </button>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        content={selectedService?.details}
        showContactButton={true}
      />

    </section>
  );
};

export default WhatWeDo;
