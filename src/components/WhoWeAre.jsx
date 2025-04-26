import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import backgroundImage from "../assets/woman-call.jpg";
import { X } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhoWeAre = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <section
      className="relative w-full py-28 px-6 md:px-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1d1d1d]/70 backdrop-blur-lg z-0" />

      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="fade-in space-y-12 text-center"
        >
          {/* Main Header */}
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Who We Are
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col items-center space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="leading-8 text-white/90 max-w-3xl text-lg"
            >
              We're a team of digital innovators and strategic advisors passionate about transforming African SMEs. Our deep understanding of local business environments combined with global technical expertise allows us to create practical, scalable systems that turn limitations into advantages—delivering efficiency, growth, and measurable impact.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="leading-8 text-white/90 max-w-3xl text-lg"
            >
              At Kwabak, freedom is our strength. Our remote-first setup brings together exceptional talent from across the globe to build solutions that are both diverse and human-centered. Simplicity, feedback, and celebration are woven into our culture—driving daily transformation across the continent.
            </motion.p>

            {/* See More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-6 py-3 bg-[#E86C4F] hover:bg-[#d15a3f] text-white rounded-full text-lg font-semibold transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See More About Us
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 flex space-x-2 opacity-30">
        <div className="w-4 h-4 bg-[#E86C4F] rounded-full"></div>
        <div className="w-4 h-4 bg-[#027A76] rounded-full"></div>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20 L60 60 M60 20 L20 60" stroke="#E86C4F" strokeWidth="4" />
        </svg>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl p-8 max-w-2xl mx-4 text-gray-800 relative"
          >
            <h3 className="text-3xl font-bold mb-6 text-center text-[#1d1d1d]">More About Us</h3>
            <p className="text-base leading-7 mb-6">
              Kwabak isn’t just about technology—it’s about people. We believe that African businesses deserve world-class systems tailored to their unique needs, and we are here to provide just that. Through collaboration, continuous learning, and cutting-edge tools, we empower SMEs to unlock new levels of performance and resilience.
            </p>
            <p className="text-base leading-7">
              Our solutions range from digital platforms, business intelligence tools, to custom advisory services. Every project is approached with a deep respect for the local context and an unwavering commitment to excellence.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition cursor-pointer"
            >
              <X size={24} />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;
