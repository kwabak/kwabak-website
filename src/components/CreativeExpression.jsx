import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { PiStarFourFill } from "react-icons/pi";

const CreativeExpression = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 1 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#fefefe] via-[#f9fafb] to-[#fefefe] text-[#1d1d1d] py-28 px-6 md:px-20 overflow-hidden">
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -500px 0; }
            100% { background-position: 500px 0; }
          }
          .shimmer-text {
            background: linear-gradient(90deg, #E86C4F, #F4A24C, #027A76);
            background-size: 200% auto;
            color: #1d1d1d;
            background-clip: text;
            -webkit-background-clip: text;
            animation: shimmer 4s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .shimmer-text {
              animation: none;
              background: none;
              color: #E86C4F;
            }
          }
          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .wave-bg {
            animation: wave 20s ease-in-out infinite;
          }
          .rotate-star {
            animation: rotate 12s linear infinite;
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.5 }}
        >
          <h2 className="text-4xl text-left md:text-5xl font-extrabold leading-tight">
            Our Creative <span className="text-[#E86C4F]">Expression</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1d1d1d]/80">
            Kwabak's visual identity system synthesizes cultural heritage with strategic purpose.
            The logo integrates two Adinkra symbols from Ghana—UAC Nkanea and Nkyinkyim—creating
            a distinctive mark that embodies both technological advancement and adaptive resilience.
          </p>
          <p className="text-lg md:text-xl text-[#1d1d1d]/80">
            This visual framework mirrors our approach to business transformation
            across African markets. The interconnected pathways in our symbol represent
            systematic processes that convert improvised solutions into scalable business architecture.
          </p>
        </motion.div>

        <motion.div
          className="flex-1 grid md:grid-cols-1 gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ amount: 0.5 }}
        >
          {[
            {
              title: "Black Typography",
              description: "Conveys authority and stability to anchor the brand.",
              color: "#1d1d1d, #333",
              border: "border-[#1d1d1d]",
              textColor: "text-[#ffffff]",
            },
            {
              title: "Coral & Orange Gradient",
              description: "Symbolizes energy and transformation in our brand journey.",
              color: "#E86C4F, #F4A24C",
              border: "border-[#E86C4F]",
              textColor: "text-[#ffffff]",
            },
            {
              title: "White Space",
              description: "Creates breathing room and visual clarity for maximum impact.",
              color: "#ffffff, #f9fafb",
              border: "border-gray-300",
              textColor: "text-[#1d1d1d]",
            },
          ].map((item, index) => (
            <Tilt key={index} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.02}>
              <motion.div
                className={`bg-gradient-to-br p-6 rounded-3xl shadow-xl text-left text-[#1d1d1d] backdrop-blur-xl ${item.border ? 'border-4' : ''} ${item.textColor} transition-all duration-300`}
                style={{
                  background: `linear-gradient(135deg, ${item.color})`,
                }}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>
      </div>

      <div className="mt-24">
        <h3 className="text-3xl shimmer-text font-bold md:text-4xl text-[#1d1d1d]/80 col-span-3">Visual Language</h3>
        <p className="text-lg md:text-xl text-[#1d1d1d]/80 mt-2 ">
          The visual Language of kwabak was designed with three key objectives:
        </p>

        <motion.div
          className="mt-6 grid md:grid-cols-3 gap-10 text-left relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ amount: 0.5 }}
        >
          {[
            {
              description: "Establish immediate recognition in competitive markets.",
              color: "text-[#E86C4F]",
            },
            {
              description: "Communicate our dual strength in technology and strategy.",
              color: "text-[#F4A24C]",
            },
            {
              description: "Signal our deep understanding of the African business landscape.",
              color: "text-[#027A76]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-2 p-4 rounded-xl bg-white/70 backdrop-blur-lg shadow-md hover:scale-105 border border-gray-300 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ amount: 0.5 }}
            >
              <PiStarFourFill className={`${item.color} text-2xl rotate-star`} />
              <div>
                <p className="text-[#1d1d1d]/70 text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="max-w-5xl mx-auto mt-24 text-center space-y-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ amount: 0.5 }}
      >
        <h4 className="text-2xl md:text-4xl font-bold text-[#1d1d1d]/80">
          Transforming Business, Empowering Economies
        </h4>
        <p className="text-lg md:text-xl text-[#1d1d1d]/80">
          When entrepreneurs across the continent encounter our brand, they recognize a partner that
          comprehends both their challenges and their potential.
          Kwabak's expertise transforms individual business success into collective economic advancement,
          creating measurable impact at both organizational and national levels.
        </p>
        <p className="text-lg md:text-xl text-[#1d1d1d]/80">
          This deliberate integration of heritage, design principles, and strategic positioning creates a
          brand system that will drive recognition and confidence as we expand our presence across African markets.
        </p>
      </motion.div>
    </section>
  );
};

export default CreativeExpression;
