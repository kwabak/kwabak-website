import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import processImage from "../assets/process2.jpg";

const steps = [
  {
    title: "Discovery",
    description:
      "We start with a deep discovery phase, diving into your business to understand its unique challenges and opportunities. This groundwork is essential for crafting tailored solutions.",
  },
  {
    title: "Strategy",
    description:
      "Next, we move to strategic design, where we outline actionable plans that align with your goals. Our focus is on creating practical, scalable strategies that drive growth.",
  },
  {
    title: "Implementation",
    description:
      "With the plan in hand, we begin incremental implementation. This means we roll out our solutions step-by-step, allowing for adjustments based on real-time feedback.",
  },
  {
    title: "Knowledge Transfer",
    description:
      "As we work together, we prioritize knowledge transfer. We empower your team with the skills and insights to manage and sustain the solutions we provide.",
  },
  {
    title: "Continuous Optimization",
    description:
      "Finally, we focus on continuous optimization. We regularly review the performance of our solutions, making necessary adjustments to maximize impact.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const OurProcess = () => {
  return (
    <section className="bg-[#F8F8F3] py-16 md:py-24 px-6 md:px-20 overflow-hidden">
      {/* Header & Paragraph */}
      <div className="flex flex-col items-center text-center w-full mb-20">
        
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1d1d1d]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our <span className="text-[#E86C4F]">Process</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-[#1d1d1d]/80 max-w-xl"
            variants={fadeUp}
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            From idea to impact, our structured process helps African SMEs innovate and grow.
          </motion.p>
        
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full"
        >
          <img
            src={processImage}
            alt="Process"
            className="w-full h-full object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Right Timeline */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute left-5 -top-5 bottom-0 w-0.5 bg-gray-300 rounded-full"></div>

          <div className="space-y-12 pl-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index * 0.2}
              >
                {/* Number circle */}
                <div className="absolute -left-12 top-0 w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                {/* Step content */}
                <h3 className="text-xl font-bold text-black  capitalize">{step.title}</h3>
                <p className="text-gray-700 text-sm mt-1">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
