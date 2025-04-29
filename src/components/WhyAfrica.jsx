import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";
import { GiAfrica } from "react-icons/gi";
import Tilt from "react-parallax-tilt";
import africaMap from "../assets/hero.png"; // New African map illustration

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const whyAfricaCards = [
  { text: "Untapped Market Potential", style: "top-[20%] left-[15%] sm:top-[20%] sm:left-[15%]", color: "text-[#fff]" },
  { text: "Youthful Population", style: "bottom-[25%] right-[10%] sm:bottom-[25%] sm:right-[10%]", color: "text-[#00F5D4]" },
  { text: "Digital Transformation Gap", style: "top-[40%] right-[5%] sm:top-[40%] sm:right-[5%]", color: "text-[#fff]" },
  { text: "Cross-Border Expansion", style: "bottom-[40%] left-[25%] sm:bottom-[40%] sm:left-[25%]", color: "text-[#1d1d1d]" },
  { text: "Financing Gap", style: "top-[40%] left-[10%] sm:top-[40%] sm:left-[10%]", color: "text-[#1d1d1d]" },
];

const WhyAfrica = () => {
  useEffect(() => {
    gsap.utils.toArray(".fade-up").forEach((el) => {
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
    <section className="relative bg-gradient-to-tr from-[#fff] via-[#fff] to-[#F2E5D3] text-white px-6 md:px-20 pt-[6rem] md:mt-0 overflow-hidden">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-clip-text text-[#1d1d1d] animate-glitch">
            Why <span className="text-[#E86C4F]">Africa?</span>
          </h2>
          <p className="text-lg text-gray-900/90 font-light">
            Africa is a rich land with potential, and at Kwabak, we are dedicated to unlocking it. We believe in the ingenuity and resilience of African entrepreneurs, who often create innovative solutions from limited resources. Our mission is to amplify that creativity by providing tailored technology and strategic insights.
            <br />
            <br />
            The continent is undergoing a rapid digital transformation, presenting unique opportunities for SMEs to embrace new business models. At Kwabak, we guide companies in navigating this evolution, turning challenges into competitive advantages.
            <br />
            <br />
            From the bakery in Accra to the tech startup in Nairobi, from Johannesburg's legal firms to Lagos fashion houses and from Kigali's logistics companies to Cairo's healthcare providers, we are committed to driving growth across diverse sectors. Together, we are shaping a brighter future for Africa—one where businesses thrive, communities flourish, and opportunities abound. Join us in this transformative journey.
          </p>
          <motion.div className="flex items-center gap-4 mt-6">
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
                alt="Africa Map"
                className="w-full opacity-90 drop-shadow-xl"
              />

              {whyAfricaCards.map((card, i) => (
                <motion.div
                  key={i}
                  className={`absolute z-10 backdrop-blur-2xl bg-white/80 text-[#1d1d1d] px-2 py-1 sm:px-4 sm:py-2 rounded-xl shadow-neon flex items-center gap-2 text-xs sm:text-sm font-medium hover:scale-110 transition-transform duration-300 ${card.style}`}
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
                  className={`absolute w-6 h-6 sm:w-8 sm:h-8 hotspot bg-[#FF6B6B] rounded-full opacity-40 ${whyAfricaCards[i].style}`}
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