import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { FaLightbulb, FaCogs, FaRocket, FaUsers } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import Modal from "./Modal";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    title: "Understanding Your Needs",
    description: "We dive deep into your goals, pain points, and vision to shape impactful strategies.",
    icon: <FaLightbulb className="text-[#E86C4F] text-4xl" />,
    details: "We start with a deep discovery phase, diving into your business to understand its unique challenges and opportunities. This groundwork is essential for crafting tailored solutions that meet your specific needs.",
  },
  {
    title: "Crafting the Plan",
    description: "Crafting bold and user-centric experiences that connect with your audience.",
    icon: <FaUsers className="text-[#027A76] text-4xl" />,
    details: "Next, we move to strategic design, where we outline actionable plans that align with your goals. Our focus is on creating practical, scalable strategies that can drive growth and efficiency.",
  },
  {
    title: "Putting it into Action",
    description: "Building robust and scalable solutions with modern, flexible technologies.",
    icon: <FaCogs className="text-[#E86C4F] text-4xl" />,
    details: "With the plan in hand, we begin incremental implementation. This means we roll out our solutions step-by-step, allowing for adjustments based on real-time feedback. Whether it's launching a new app or optimizing existing systems, we ensure that each phase is executed smoothly.",
  },
  {
    title: "Knowledge Sharing",
    description: "From launch to growth, we ensure success and long-term sustainability.",
    icon: <FaLightbulb className="text-[#027A76] text-4xl" />,
    details: " As we work together, we prioritize knowledge transfer. We empower your team with the skills and insights to manage and sustain the solutions we provide. This collaboration ensures that your organization is equipped for ongoing success.",
  },
  {
    title: "Continuous Improvement",
    description: "We believe in the power of feedback and iteration to drive success.",
    icon: <FaRocket className="text-[#F4A24C] text-4xl" />,
    details: "Finally, we focus on continuous optimization. We regularly review the performance of our solutions, making necessary adjustments to maximize impact. This commitment to improvement helps ensure that your business not only keeps pace but thrives in a rapidly changing environment.",
  }
];

const OurProcess = () => {

  const [selectedStep, setSelectedStep] = useState(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".process-card");

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-tr from-[#fff] via-[#fff] to-[#F2E5D3] text-[#1d1d1d] py-24 px-6 md:px-20 overflow-hidden">
      {/* Glowing Background Accent */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#E86C4F]/10 via-white/5 to-[#027A76]/10 blur-[160px] opacity-50 z-0" />

      <motion.div
        className="max-w-6xl mx-auto text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">
          Our <span className="text-[#E86C4F]">Process</span>
        </h2>
        <p className="text-[#1d1d1d]/80 mt-4 max-w-2xl mx-auto">
          From idea to impact, our structured process helps African SMEs innovate and grow.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
    {steps.slice(0, 3).map((step, index) => (
      <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
        <motion.div
          className="process-card flex flex-col items-center text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-[#E86C4F]/20 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold text-[#1d1d1d] mb-2">{step.title}</h3>
          <p className="text-[#1d1d1d]/80 text-sm">{step.description}</p>
          <button
            className="mt-4 px-5 py-2 bg-[#E86C4F] text-white rounded-full text-sm hover:bg-[#cf563b] transition cursor-pointer"
            onClick={() => setSelectedStep(step)}
          >
            Learn More
          </button>
        </motion.div>
      </Tilt>
    ))}
  </div>

  {/* Centered 2nd row with 2 cards */}
  <div className="mt-10 flex justify-center gap-8 flex-wrap">
    {steps.slice(3).map((step, index) => (
      <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={false}>
        <motion.div
          className="process-card w-[370px] flex flex-col items-center text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl border border-[#E86C4F]/20 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: (index + 3) * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold text-[#1d1d1d] mb-2">{step.title}</h3>
          <p className="text-[#1d1d1d]/80 text-sm">{step.description}</p>
          <button
            className="mt-4 px-5 py-2 bg-[#E86C4F] text-white rounded-full text-sm hover:bg-[#cf563b] transition cursor-pointer"
            onClick={() => setSelectedStep(step)}
          >
            Learn More
          </button>
        </motion.div>
      </Tilt>
    ))}
  </div>
</div>


        <Modal
                isOpen={!!selectedStep}
                onClose={() => setSelectedStep(null)}
                title={selectedStep?.title}
                content={selectedStep?.details}
              />

    </section>
  );
};

export default OurProcess;