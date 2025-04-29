import { motion, useInView, useAnimation } from "framer-motion";
import { Award, Globe, Lightbulb } from "lucide-react";
import React, { useRef, useEffect } from "react";
import Icon from "../assets/Icon.png";
import WhyImage from "../assets/business.jpg";
import { GiAfrica } from "react-icons/gi";

const reasons = [
  {
    icon: <GiAfrica className="text-[#027A76] w-8 h-8 shrink-0" />,
    title: "African Insight",
    text: "We understand Africa’s unique business landscape from the inside out, delivering solutions tailored to the dynamic realities of SMEs across the continent.",
  },
  {
    icon: <Award className="text-[#E86C4F] w-8 h-8 shrink-0" />,
    title: "Proven Impact",
    text: (
      <>
        We’ve transformed operations for businesses, with an Accra-based travel agency reducing booking processing time by <span>45%</span> and increasing operational efficiency by <span>40%</span>.
      </>
    ),
  },
  {
    icon: <Lightbulb className="text-[#F4A24C] w-8 h-8 shrink-0" />,
    title: "Core Values",
    text: "We champion excellence. No compromise. We deliver solutions that look good and create real impact. Simplicity and practicality guide our approach.",
  },
  {
    icon: <img src={Icon} alt="Sustainable Growth" className="w-[2rem] shrink-0" />,
    title: "Sustainable Growth",
    text: "We build digital solutions that empower SMEs in Africa to create sustainable wealth and drive poverty reduction across the continent.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="relative bg-white py-28 px-6 md:px-20 text-[#1d1d1d] overflow-hidden"
    >
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
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.2, duration: 0.6 },
                },
              }}
              initial="hidden"
              animate={controls}
              className="flex items-start gap-4"
            >
              {item.icon}
              <div>
                <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
                <p className="text-[#1d1d1d]/80">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full h-full"
        >
          <img
            src={WhyImage}
            alt="Why Choose Us"
            className="w-full h-full rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
