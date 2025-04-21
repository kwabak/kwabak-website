import React from "react";
import { motion } from "framer-motion";
import africaMap from "../assets/africa-tech1.png";
import { GiAfrica } from "react-icons/gi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhyAfrica = () => {
  React.useEffect(() => {
    const elements = gsap.utils.toArray(".fade-up");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-[#332a5d] via-[#2a2a44] to-[#1d1d30] text-white py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left - Content */}
        <div className="space-y-6 fade-up">
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Why <span className="text-[#fd6c63]">Africa?</span>
          </h2>
          <p className="text-lg text-white/80">
            Africa is bursting with untapped potential. From the bakery in Accra to the startup in Nairobi, the ingenuity and resourcefulness of African entrepreneurs are unmatched. At Kwabak, we amplify that creativity with tailored tech solutions that create lasting impact.
          </p>
          <p className="text-lg text-white/80">
            We guide SMEs across diverse industries in embracing innovation and turning challenges into competitive advantages.
          </p>

          <div className="flex items-center gap-4 mt-6">
            <GiAfrica className="text-[#fd6c63] text-4xl" />
            <p className="font-semibold text-white/90">
              Serving businesses from Accra to Nairobi, Kigali to Cairo.
            </p>
          </div>
        </div>

        {/* Right - Animated Map */}
        <div className="relative w-full fade-up">
          <img
            src={africaMap}
            alt="Africa Tech Illustration"
            className="w-full max-w-[480px] mx-auto drop-shadow-[0_0_40px_rgba(253,108,99,0.5)] animate-pulse"
          />

          {/* Glow Pulse Circle */}
          <div className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 bg-[#fd6c63] rounded-full animate-ping opacity-30"></div>
        </div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#fd6c63]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00ffff]/10 blur-[100px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default WhyAfrica;
