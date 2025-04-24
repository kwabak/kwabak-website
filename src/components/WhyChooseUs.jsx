import { motion, useInView } from "framer-motion";
import { Award, Globe, Lightbulb } from "lucide-react";
import React, { useRef } from "react";
import Icon from "../assets/Icon.png";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative  py-28 px-6 md:px-20 text-[#1d1d1d] overflow-hidden"
    >
      {/* Floating glow sparkles */}
      <div className="absolute right-0 top-0 w-[250px] h-full bg-gradient-to-l from-[#027A76]/10 to-transparent blur-[80px] animate-float pointer-events-none z-0"></div>

      {/* Giant glowing bulb background */}
      <Lightbulb
        className="absolute bottom-0 right-[-3rem] w-[800px] h-[900px] text-[#E86C4F]/20 rotate-[-25deg] pointer-events-none z-0 blur-sm"
      />

      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Why <span className="text-[#E86C4F]">Businesses</span> Choose Us
        </h2>
        <p className="text-[#1d1d1d]/70 text-lg mt-4 max-w-2xl mx-auto">
          What sets us apart in Africa’s evolving digital economy.
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-20 items-center mt-[6rem]">
        {/* Left: Reason Stack */}
        <div className="space-y-10">
          <div className="flex items-start gap-4">
            <Globe className="text-[#027A76] w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">African Insight</h3>
              <p className="text-[#1d1d1d]/80">
                We understand Africa’s unique business landscape from the inside
                out, delivering tailored solutions for SMEs.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award className="text-[#E86C4F] w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Proven Impact</h3>
              <p className="text-[#1d1d1d]/80">
                Helped an Accra-based agency reduce booking time by {" "}
                <span className="text-[#027A76] font-bold">45%</span> and
                improve efficiency by {" "}
                <span className="text-[#027A76] font-bold">40%</span> through a
                custom solution.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Lightbulb className="text-yellow-500 w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Core Values</h3>
              <p className="text-[#1d1d1d]/80">
                We prioritize elegance, practicality, and meaningful design. No
                fluff. Just results.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <img src={Icon} alt="Sustainable Growth Logo" className="w-8 h-8 shrink-0" />
          {/* <img 
            src="/assets/Icon.png" 
            alt="Sustainable Growth Logo" 
            className="w-8 h-8 shrink-0" 
          /> */}
            {/* <Leaf className="text-green-500 w-8 h-8 shrink-0" /> */}
            <div>
              <h3 className="text-2xl font-semibold mb-1">Sustainable Growth</h3>
              <p className="text-[#1d1d1d]/80">
                We build scalable solutions to drive wealth and reduce poverty
                across Africa.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Animated Stats */}
        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-6xl font-extrabold text-[#027A76] drop-shadow-lg">
              45%
            </p>
            <p className="text-[#1d1d1d]/70 text-lg">Faster Booking Time</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-center"
          >
            <p className="text-6xl font-extrabold text-[#E86C4F] drop-shadow-lg">
              40%
            </p>
            <p className="text-[#1d1d1d]/70 text-lg">Operational Efficiency Boost</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-6xl font-extrabold text-green-500 drop-shadow-lg">
              100%
            </p>
            <p className="text-[#1d1d1d]/70 text-lg">Afrocentric Solutions</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
