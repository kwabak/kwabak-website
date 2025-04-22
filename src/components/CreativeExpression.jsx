import React from "react";
import { motion } from "framer-motion";
import { PiStarFourFill } from "react-icons/pi";
import { Particles } from "@tsparticles/react";
import Tilt from "react-parallax-tilt";
import brandImage from "../assets/logo-huge.png"; // Adjust the path to your brand image

const CreativeExpression = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2, boxShadow: "0 0 15px rgba(232, 108, 79, 0.5)" },
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-[#1d1d1d] py-24 px-6 md:px-20 overflow-hidden">
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(-1px, 0); }
            80% { transform: translate(1px, 0); }
            100% { transform: translate(0); }
          }
          .animate-glitch:hover {
            animation: glitch 0.5s infinite;
          }
          .shadow-glow {
            box-shadow: 0 0 15px rgba(244, 162, 76, 0.5), 0 0 25px rgba(232, 108, 79, 0.3);
          }
          .rotate-star {
            animation: rotate 10s linear infinite;
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .wave-bg {
            animation: wave 15s ease-in-out infinite;
          }
          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Particle Background */}
      <Particles
        id="tsparticles-creative"
        options={{
          particles: {
            number: { value: 40, density: { enable: true, value_area: 1200 } },
            shape: { type: "circle" },
            color: { value: ["#E86C4F", "#BFDDCE", "#F4A24C"] },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.5, direction: "none", random: true },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "bubble" } },
            modes: { bubble: { distance: 200, size: 5, duration: 2, opacity: 0.6 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      {/* Blurred Brand Image Background */}
      <div className="absolute top-0 z-10 opacity-90 rotate-[10deg] left-[-100px] w-[400px] h-[400px] overflow-hidden">
        <img
          src={brandImage}
          alt="Blurred Brand Background"
          className="w-full  h-full object-cover filter blur-[8px] scale-110"
        />
      </div>

      <div className="absolute bottom-0 z-10 opacity-90 rotate-[10deg] right-[-100px] w-[400px] h-[400px] overflow-hidden">
        <img
          src={brandImage}
          alt="Blurred Brand Background"
          className="w-full  h-full object-cover filter blur-[8px] scale-110"
        />
      </div>

      {/* Glow Overlay */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(191,221,206,0.3),rgba(219,174,141,0.2))] blur-[120px] rounded-full z-0 animate-pulse wave-bg" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E86C4F] to-[#F4A24C] animate-glitch mb-6">
            Our Creative Expression
          </h2>
          <p className="text-lg md:text-xl text-[#1d1d1d]/80 max-w-4xl mx-auto font-light">
            Kwabak's visual identity blends cultural heritage with innovation. Our logo fuses Ghanaian Adinkra symbols—UAC Nkanea and Nkyinkyim—embodying technological progress and adaptive resilience.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Black Typography",
              description: "Conveys authority and stability to anchor the brand.",
              color: "text-[#E86C4F]",
            },
            {
              title: "Coral & Orange Gradient",
              description: "Symbolizes energy and transformation in our brand journey.",
              color: "text-[#1d1d1d]",
            },
            {
              title: "White Space",
              description: "Creates breathing room and visual clarity for maximum impact.",
              color: "text-[#027A76]",
            },
          ].map((item, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05, speed: 400 }}>
              <motion.div
                className="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl shadow-glow border-gradient-to-r from-[#E86C4F]/30 to-[#F4A24C]/30"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h4 className={`text-xl font-bold ${item.color} mb-2`}>{item.title}</h4>
                <p className="text-[#1d1d1d]/80 text-sm">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-[#1d1d1d]/80 font-light">
            Our visual system reflects our mission to transform businesses. The interconnected pathways in our symbol mirror our systematic approach to building scalable solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-10 text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Recognition",
              description: "Establish immediate recognition in competitive markets.",
              color: "text-[#027A76]",
            },
            {
              title: "Dual Capability",
              description: "Communicate our dual strength in technology and strategy.",
              color: "text-[#F4A24C]",
            },
            {
              title: "Context Awareness",
              description: "Signal our deep understanding of the African business landscape.",
              color: "text-[#E86C4F]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <PiStarFourFill className={`${item.color} text-2xl rotate-star`} />
              <div>
                <h4 className="font-semibold text-lg mb-1 text-[#1d1d1d]">{item.title}</h4>
                <p className="text-[#1d1d1d]/80 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xl md:text-2xl text-[#1d1d1d]/90 max-w-3xl mx-auto font-semibold">
            Kwabak is more than a tech partner—we’re a catalyst for scalable success and economic growth across Africa.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeExpression;