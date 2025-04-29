import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import teamworkImage from "../assets/woman-smile.jpg";

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
    "Obsess over details. They're not 'small things' – they're everything.",
  ];

  return (
    <section className="relative w-full pt-28 overflow-hidden bg-white">
      <div className="relative z-10 space-y-24">
        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-16 fade-in md:px-20 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 border-l-4 border-[#E86C4F] pl-6"
          >
            <h3 className="text-4xl font-bold text-[#E86C4F]">Our Mission</h3>
            <p className="leading-8 text-gray-700 text-lg">
              To help African SMEs grow and succeed through impactful technology and strategic guidance, while internally building a company where exceptional talent thrives—all to create lasting prosperity across Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6 border-l-4 border-[#027A76] pl-6"
          >
            <h3 className="text-4xl font-bold text-[#027A76]">Our Vision</h3>
            <p className="leading-8 text-gray-700 text-lg">
              To be the partner of choice for businesses in Africa, big or small, public or private, equipping change makers with solutions that ignite innovation, unleash potential, and continue to create a wave of prosperity across the continent.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative fade-in"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center w-full"
            style={{ backgroundImage: `url(${teamworkImage})` }}
          />
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 py-16 px-6 md:px-20">
            <div className="space-y-6 max-w-3xl mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                The Values that Drive Us
              </h3>
              <p className="leading-8 text-white text-lg">
                Our core values shape everything we do, guiding our decisions and actions to ensure we deliver impactful, innovative, and honest solutions for our clients and communities.
              </p>
            </div>

            {/* Core Value Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 backdrop-blur-2xl bg-white p-6  shadow-lg">
              {coreValues.map((text, index) => (
                <motion.div
                  key={index}
                  className="border-l-4 border-[#E86C4F] bg-white p-4 shadow-lg hover:scale-105 transition duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionAndValues;
