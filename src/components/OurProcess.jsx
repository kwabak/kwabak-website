import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import processImage from "../assets/process.jpg";

const steps = [
  {
    title: "We Listen",
    description: "We dive deep into your goals, pain points, and vision to shape impactful strategies.",
  },
  {
    title: "We Plan",
    description: "Crafting bold and user-centric experiences that connect with your audience.",
  },
  {
    title: "We Execute",
    description: "Building robust and scalable solutions with modern, flexible technologies.",
  },
  {
    title: "We Empower",
    description: "From launch to growth, we ensure success and long-term sustainability.",
  },
  {
    title: "We Optimize",
    description: "We believe in the power of feedback and iteration to drive success.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const OurProcess = () => {
  return (
    <section className="relative py-24 px-6 md:px-20 bg-gradient-to-tr from-[#fff] via-[#fff] to-[#F2E5D3] overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: "url('/images/strategy-bg.jpg')" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#1d1d1d]"
            variants={itemVariants}
          >
            Our <span className="text-[#E86C4F]">Process</span>
          </motion.h2>
          <motion.p
            className="mt-4 text-[#1d1d1d]/80 max-w-xl"
            variants={itemVariants}
          >
            From idea to impact, our structured process helps African SMEs innovate and grow.
          </motion.p>

          <motion.div className="mt-10 space-y-8">
            <AnimatePresence>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative pl-14"
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="absolute left-0 top-0 text-2xl font-bold text-[#E86C4F]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1d1d1d]">{step.title}</h3>
                  <p className="text-[#1d1d1d]/80 mt-1 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Right Image with Float Animation */}
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.img
            src={processImage}
            alt="Our Process Visual"
            className="w-full h-full object-cover max-w-lg mx-auto rounded-3xl shadow-2xl"
            initial={{ scale: 1 }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess;
