import { motion, useInView } from "framer-motion";
import { Award, Globe, Lightbulb } from "lucide-react";
import React, { useRef, useEffect, useState } from "react";
import Icon from "../assets/Icon.png";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const incrementTime = (duration * 1000) / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span>
      {count}%
    </span>
  );
};

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="relative bg-white py-28 px-6 md:px-20 text-[#1d1d1d] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      {/* Floating glow sparkles */}
      {/* <div className="absolute right-0 top-0 w-[250px] h-full bg-gradient-to-l from-[#E86C4F]/10 to-transparent blur-[80px] animate-float pointer-events-none z-40"></div> */}

      {/* Giant glowing bulb background */}
      {/* <Lightbulb
        className="absolute bottom-0 right-[-3rem] w-[800px] h-[900px] text-[#000]/20 rotate-[-25deg] pointer-events-none z-0 blur-sm"
      /> */}

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
              We understand Africa’s unique business landscape from the inside out, delivering solutions tailored to the dynamic realities of SMEs across the continent. Our approach drives meaningful impact where it matters most.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Award className="text-[#E86C4F] w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Proven Impact</h3>
              <p className="text-[#1d1d1d]/80">
              We’ve transformed operations for businesses across multiple sectors, with an Accra-based travel agency reducing booking processing time by  {" "}
                <span className="text-[#027A76] font-bold">45%</span> and increasing operational efficiency by  {" "}
                <span className="text-[#027A76] font-bold">40%</span> after implementing our custom business management system.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Lightbulb className="text-[#F4A24C] w-8 h-8 shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Core Values</h3>
              <p className="text-[#1d1d1d]/80">
              We champion excellence. No compromise. We deliver solutions that look good and create real impact. Every detail matters—from discovery to implementation to ongoing support. We embrace simplicity and practicality because the best solutions are those that are easy to understand and use.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={Icon} alt="Sustainable Growth Logo" className="w-[2rem] shrink-0" />
            <div>
              <h3 className="text-2xl font-semibold mb-1">Sustainable Growth</h3>
              <p className="text-[#1d1d1d]/80">
              We build digital solutions that empower SMEs in Africa to create sustainable wealth and drive poverty reduction across the continent.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Animated Stats */}
        <div className="space-y-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <p className="text-6xl font-extrabold text-[#027A76] drop-shadow-lg">
              {isInView && <Counter target="45" duration={2} />}
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
              {isInView && <Counter target="40" duration={2.5} />}
            </p>
            <p className="text-[#1d1d1d]/70 text-lg">Operational Efficiency Boost</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.4, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-6xl font-extrabold text-[#F4A24C] drop-shadow-lg">
              {isInView && <Counter target="100" duration={3} />}
            </p>
            <p className="text-[#1d1d1d]/70 text-lg">Afrocentric Solutions</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
