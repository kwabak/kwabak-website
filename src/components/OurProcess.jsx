import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import processImage from "../assets/process2.jpg";

const steps = [
  {
    title: "We Listen",
    description: "We start with a deep discovery phase, diving into your business to understand its unique challenges and opportunities. This groundwork is essential for crafting tailored solutions that meet your specific needs.",
  },
  {
    title: "We Plan",
    description: "Next, we move to strategic design, where we outline actionable plans that align with your goals. Our focus is on creating practical, scalable strategies that can drive growth and efficiency.",
  },
  {
    title: "We Execute",
    description: "With the plan in hand, we begin incremental implementation. This means we roll out our solutions step-by-step, allowing for adjustments based on real-time feedback. Whether it's launching a new app or optimizing existing systems, we ensure that each phase is executed smoothly.",
  },
  {
    title: "We Empower",
    description: "As we work together, we prioritize knowledge transfer. We empower your team with the skills and insights to manage and sustain the solutions we provide. This collaboration ensures that your organization is equipped for ongoing success.",
  },
  {
    title: "We Optimize",
    description: " Finally, we focus on continuous optimization. We regularly review the performance of our solutions, making necessary adjustments to maximize impact. This commitment to improvement helps ensure that your business not only keeps pace but thrives in a rapidly changing environment.",
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
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={itemVariants}
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
          animate={{ scale: 1.05 }}
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
