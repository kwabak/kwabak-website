import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import Tilt from "react-parallax-tilt"; // Import tilt library
import { Particles } from "@tsparticles/react"; // Import particles library
import AfricaTechVisual from "../assets/africa-tech1.png";

const HeroSection = () => {
  return (
    <section className="relative mt-[2rem] h-screen w-full bg-[#332a5d] text-white overflow-hidden">
      {/* Animated Particles Background */}
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        className="absolute inset-0 z-10"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 text-center md:text-left space-y-8 md:space-y-0 md:space-x-12  ">
        {/* Text Content */}
        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Powering <span className="text-[#fd6c63]">Africa's</span> Future <br />
            Through <span className="text-[#fd6c63]">Technology</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            A Pan-African platform dedicated to innovation, growth, and development.
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="bg-[#fd6c63] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 cursor-pointer">
              Get Started
            </button>
            <button className="border border-white  cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#332a5d] transition duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image with Tilt on Hover */}
        <motion.div
          className="w-[280px] md:w-[480px] lg:w-[520px]"
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Tilt
            className="tilt-container"
            options={{
              max: 25, // Maximum tilt angle
              perspective: 1000, // Perspective depth
              scale: 1.05, // Scale effect when tilted
              speed: 400, // Speed of the tilt
              transition: true, // Smooth transition
            }}
          >
            <img
              src={AfricaTechVisual}
              alt="Africa Tech Illustration"
              className="w-full drop-shadow-xl"
            />
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute hidden md:block bottom-6 left-1/2 transform -translate-x-1/2 text-white/80 text-sm"
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
