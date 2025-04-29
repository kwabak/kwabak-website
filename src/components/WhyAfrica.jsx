import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { GiAfrica } from "react-icons/gi";
import Tilt from "react-parallax-tilt";
import africaMap from "../assets/logo-huge.png";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const whyAfricaCards = [
  { text: "Untapped Market Potential", style: "top-[20%] left-[15%]", color: "text-[#FF6B6B]" },
  { text: "Youthful Population", style: "bottom-[25%] right-[10%]", color: "text-[#00F5D4]" },
  { text: "Digital Transformation", style: "top-[40%] right-[15%]", color: "text-[#FFE66D]" },
  { text: "Cross-Border Expansion", style: "bottom-[30%] left-[20%]", color: "text-[#FF6B6B]" },
  {text: "Financing Gap", style: "top-[30%] left-[20%]", color: "text-[#FF6B6B]"}
];

const WhyAfrica = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray(".fade-up");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reset",
          },
        }
      );
    });

    gsap.utils.toArray(".hotspot").forEach((el) => {
      gsap.to(el, {
        scale: 1.5,
        opacity: 0.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-white px-6 md:px-20 py-[5rem] mt-[10rem] md:mt-0 overflow-hidden">
      <style>
        {`
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-2px, 2px); }
            40% { transform: translate(2px, -2px); }
            60% { transform: translate(-2px, 0); }
            80% { transform: translate(2px, 0); }
            100% { transform: translate(0); }
          }
          .animate-glitch:hover {
            animation: glitch 0.5s infinite;
          }
          .shadow-neon {
            box-shadow: 0 0 15px rgba(255, 107, 107, 0.7), 0 0 25px rgba(0, 245, 212, 0.5);
          }
          
        `}
      </style>

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left - Content */}
        <motion.div
          className="space-y-8 fade-up"
          initial={{ opacity: 0}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#00F5D4] animate-glitch">
            Why <span className="text-[#FFE66D]">Africa?</span>
          </h2>
          <p className="text-lg text-gray-900/90 font-light">
            Africa is a powerhouse of untapped potential. From Accra's bustling markets to Nairobi's tech hubs, African entrepreneurs drive innovation. At Kwabak, we empower SMEs with cutting-edge tech to transform challenges into opportunities.
          </p>
          <p className="text-lg text-gray-900/90 font-light">
            We partner with businesses across industries, fueling growth from Kigali to Cairo.
          </p>
          <motion.div
            className="flex items-center gap-4 mt-6"
            whileHover={{ scale: 1.05 }}
          >
            <GiAfrica className="text-[#FF6B6B] text-4xl" />
            <p className="font-semibold text-gray-700/90">
              Join us in shaping Africa's digital landscape.
            </p>
          </motion.div>
        </motion.div>

        {/* Right - Animated Map */}
        <motion.div
          className="relative w-full fade-up"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Tilt options={{ max: 20, scale: 1.05, speed: 400 }}>
            <div className="relative w-full">
              <img
                src={africaMap}
                alt="Africa Tech Illustration"
                className="w-full"
              />

              {whyAfricaCards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute z-10 backdrop-blur-2xl bg-gradient-to-r from-white/10 to-white/5 text-white px-4 py-2 rounded-xl shadow-neon flex items-center gap-2 text-sm font-medium hover:scale-110 transition-transform duration-300 ${card.style} ${card.color}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.2, type: "spring", stiffness: 120 }}
                  whileHover={{ y: -5, rotate: 0 }}
                >
                  <span>{card.text}</span>
                </motion.div>
              ))}

              {whyAfricaCards.map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-8 h-8 hotspot bg-[#FF6B6B] rounded-full opacity-40 ${whyAfricaCards[i].style}`}
                  style={{ transform: "translate(-50%, -50%)" }}
                />
              ))}
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAfrica;