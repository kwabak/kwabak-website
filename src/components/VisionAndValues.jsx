import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUsers, FaRocket, FaHeart, FaBrain, FaCode, FaLightbulb, FaCheckCircle, FaTimes } from "react-icons/fa";
import teamworkImage from "../assets/people.jpg";
import { X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const VisionAndValues = () => {
  const [showMore, setShowMore] = useState(false);

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
    { icon: FaUsers, title: "Teamwork", text: "Go together to go far. Teamwork unlocks potential that no individual can achieve alone." },
    { icon: FaRocket, title: "Impact", text: "Execute with impact. Results speak louder than intentions." },
    { icon: FaHeart, title: "Design", text: "Design must inspire admiration. Aesthetics and function are non-negotiable." },
    { icon: FaBrain, title: "Uniqueness", text: "Stand out. The world doesn't need another average solution." },
    { icon: FaCode, title: "Honesty", text: "Speak with absolute honesty, treat with unwavering respect. Truth and dignity go hand in hand." },
    { icon: FaLightbulb, title: "Innovation", text: "Embrace failure as the price of innovation. Learn. Adapt. Overcome." },
    { icon: FaCheckCircle, title: "Details", text: "Obsess over details. They're not \"small things\" - they're everything." },
  ];

  const visibleValues = coreValues.slice(0, 4);

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
              To be the partner of choice for businesses in Africa, big or small, public or private—equipping changemakers with solutions that ignite innovation, unleash potential, and spark waves of prosperity across the continent.
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

          <div className="relative grid md:grid-cols-2 gap-12 items-start py-16 px-6 md:px-20 z-10">
            {/* Left Side */}
            <div className="space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold text-white">
                The Values that Drive Us
              </h3>
              <p className="leading-8 text-white text-lg max-w-md">
                Our core values shape everything we do, guiding our decisions and actions to ensure we deliver impactful, innovative, and honest solutions for our clients and communities.
              </p>
            </div>

            {/* Right Side */}
            <div>
              <div className="grid gap-6 md:grid-cols-2">
                {visibleValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/90 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-transform transform hover:scale-105 duration-300 h-40 max-w-xs"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <value.icon className="text-2xl text-[#E86C4F] mt-1 hover:text-[#027A76] transition-colors duration-300 flex-shrink-0" />
                    <div className="space-y-1">
                      <h4 className="text-lg font-semibold text-[#1d1d1d]">{value.title}</h4>
                      <p className="text-gray-700 text-sm">{value.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Show More Button */}
              {coreValues.length > 4 && (
                <motion.div
                  className="mt-6 text-right"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <button
                    onClick={() => setShowMore(true)}
                    className="px-6 py-2 bg-[#E86C4F] hover:bg-[#d15a3f] text-white rounded-3xl  active:scale-95 transition-all duration-300 shadow-md cursor-pointer"
                  >
                    Show More
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Content */}
            <motion.div
              className="bg-white rounded-lg shadow-lg max-w-4xl w-full p-8 relative overflow-y-auto max-h-[90vh] custom-scrollbar"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowMore(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-[#E86C4F] text-2xl cursor-pointer transition duration-300"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-bold mb-6 text-center text-[#000]">All Our Core Values</h3>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow hover:shadow-xl hover:scale-105 transform transition-all duration-300">
                    <value.icon className="text-3xl text-[#E86C4F] mb-2" />
                    <h4 className="font-semibold text-lg text-[#1d1d1d]">{value.title}</h4>
                    <p className="text-gray-600 text-sm mt-2">{value.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Scrollbar Styling */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #E86C4F;
          border-radius: 10px;
        }
      `}</style>
    </section>
  );
};

export default VisionAndValues;
