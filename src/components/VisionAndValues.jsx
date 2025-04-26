import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUsers, FaGlobeAfrica, FaRocket, FaHeart, FaBrain, FaCode, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import backgroundImage from "../assets/woman-call.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VisionAndValues = () => {
  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const coreValues = [
    "Go together to go far. Teamwork unlocks potential that no individual can achieve alone.",
    "Execute with impact. Results speak louder than intentions.",
    "Design must inspire admiration. Aesthetics and function are non-negotiable.",
    "Stand out. The world doesn't need another average solution.",
    "Speak with absolute honesty, treat with unwavering respect. Truth and dignity go hand in hand.",
    "Embrace failure as the price of innovation. Learn. Adapt. Overcome.",
    "Obsess over details. They're not \"small things\" - they're everything."
  ];

  return (
    <section
      className="relative w-full text-white py-28 px-6 md:px-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#0b0b0b]/70 backdrop-blur-lg z-0" />

      <div className="relative z-10 space-y-24">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="fade-in space-y-10"
        >
          <h2 className="text-5xl text-center font-bold text-[#E86C4F]">Who We Are</h2>
          <div className="flex flex-col justify-center items-center">
            
              <p className="leading-8 text-center w-[60rem] text-white/90  mb-[4rem]">
                We're a team of digital innovators and strategic advisors passionate about transforming African SMEs. Our deep understanding of local business environments combined with global technical expertise allows us to create practical, scalable systems that turn limitations into advantages—delivering efficiency, growth, and measurable impact.
              </p>

              <p className="leading-8 text-center w-[60rem] text-white/90">
                At Kwabak, freedom is our strength. Our remote-first setup brings together exceptional talent from across the globe to build solutions that are both diverse and human-centered. Simplicity, feedback, and celebration are woven into our culture—driving daily transformation across the continent.
              </p>
            
              <p className="text-white/90 w-[60rem] text-center mb-[4rem] leading-8">
                We're a team of digital innovators and strategic advisors passionate about transforming African SMEs. Our deep understanding of local business environments combined with global technical expertise allows us to create practical, scalable systems that turn limitations into advantages—delivering efficiency, growth, and measurable impact.
              </p>

              <p className="leading-8 w-[60rem] text-white/90 text-center">
                At Kwabak, freedom is our strength. Our remote-first setup brings together exceptional talent from across the globe to build solutions that are both diverse and human-centered. Simplicity, feedback, and celebration are woven into our culture—driving daily transformation across the continent.
              </p>
            
          </div>
        </motion.div>

        {/* Our Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-[#E86C4F]">Our Mission</h3>
            <p className="leading-8 text-white/90">
              To help African SMEs grow and succeed through impactful technology and strategic guidance, while internally building a company where exceptional talent thrives—all to create lasting prosperity across Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold text-[#E86C4F]">Our Vision</h3>
            <p className="leading-8 text-white/90">
              To be the partner of choice for businesses in Africa, big or small, public or private—equipping changemakers with solutions that ignite innovation, unleash potential, and spark waves of prosperity across the continent.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <h3 className="text-4xl font-bold text-[#E86C4F]">The Values that Drive Us</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <FaCheckCircle className="text-2xl text-[#027A76] mt-1" />
                <p className="text-white/90 text-lg">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAndValues;