import { motion } from "framer-motion";
import { FaArrowDown, FaCode, FaRocket, FaCogs, FaBolt, FaLightbulb } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { Particles } from "@tsparticles/react";
import AfricaTechVisual from "../assets/hero.png";

const glassCards = [
  {
    icon: <FaCode className="text-[#E86C4F] text-xl" />,
    text: "Smart Apps",
    style: "top-[15%] left-[10%] rotate-[-6deg]"
  },
  {
    icon: <FaRocket className="text-[#027A76] text-xl" />,
    text: "Scale Fast",
    style: "bottom-[15%] right-[12%] rotate-[6deg]"
  },
  {
    icon: <FaCogs className="text-[#027A76] text-xl" />,
    text: "Innovate",
    style: "top-[40%] right-[8%] rotate-[-12deg]"
  },
  {
    icon: <FaBolt className="text-[#027A76] text-xl" />,
    text: "Tech Spark",
    style: "bottom-[40%] left-[5%] rotate-[8deg]"
  },
  {
    icon: <FaLightbulb className="text-[#E86C4F] text-xl" />,
    text: "Ideas",
    style: "top-[50%] left-[40%] rotate-[4deg]"
  },
  {
    icon: <FaCode className="text-[#027A76] text-xl" />,
    text: "Quick Dev",
    style: "top-[60%] right-[20%] rotate-[-4deg]"
  },
  {
    icon: <FaCogs className="text-[#027A76] text-xl" />,
    text: "Tech Solutions",
    style: "top-[30%] right-[20%] rotate-[-8deg]"
  },
  {
    icon: <FaBolt className="text-[#F4A24C] text-xl" />,
    text: "Power Up",
    style: "bottom-[30%] left-[25%] rotate-[10deg]"
  },
  {
    icon: <FaLightbulb className="text-[#E86C4F] text-xl" />,
    text: "Bright Ideas",
    style: "top-[40%] left-[30%] rotate-[-10deg]"
  },
  {
    icon: <FaCode className="text-[#F4A24C] text-xl" />,
    text: "Code Smart",
    style: "top-[15%] right-[25%] rotate-[6deg]"
  },
  {
    icon: <FaRocket className="text-[#027A76] text-xl" />,
    text: "Fast Track",
    style: "bottom-[20%] left-[10%] rotate-[-12deg]"
  },
  {
    icon: <FaCogs className="text-[#E86C4F] text-xl" />,
    text: "Tech Gear",
    style: "top-[25%] right-[50%] rotate-[8deg]"
  }
];

const HeroSection = () => {
  return (
    <section className="relative  pt-[20rem] md:pt-[2rem] h-screen w-full bg-[#F2E5D3] text-white ">
      
      {/* Main Content */}
      <div className="relative z-40 h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left">
        {/* Text Section */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#1d1d1d]">
            Powering <span className="text-[#E86C4F]">Africa's</span> Future <br />
            Through <span className="text-[#E86C4F]">Technology</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#1d1d1d]/90">
            A Pan-African platform dedicated to innovation, growth, and development.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-[#E86C4F] w-[15rem] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 cursor-pointer">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Tilt Image with Glass Cards */}
        <motion.div
          className="relative w-[280px] md:w-[480px] lg:w-[520px] z-40"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Tilt scale={1.05} transitionSpeed={1000} glareEnable glareMaxOpacity={0.15} glareColor="#E86C4F">
            <div className="relative">
              <img src={AfricaTechVisual} alt="Africa Tech" className="w-full drop-shadow-xl rounded-xl" />

              {/* Glassy Overlay Cards ONLY ON IMAGE */}
              {glassCards.map((card, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ delay: 0.5 + i * 0.15, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  className={`absolute z-40 backdrop-blur-xl bg-white/30 text-[#1d1d1d] px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 text-sm font-medium ${card.style} ${(i < 4 ? "flex" : "hidden") + " sm:flex"}`}
                  whileHover={{ scale: 1.1, rotate: 0 }}
                >
                  {card.icon}
                  <span>{card.text}</span>
                </motion.div>
              ))}
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute hidden md:block bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <FaArrowDown className="animate-bounce text-xl" />
      </motion.div>
    </section>
  );
};

export default HeroSection;