import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image1 from "../assets/derick_prev_ui.png";
import Image2 from "../assets/jason_prev_ui.png";
import Image3 from "../assets/emma_prev_ui.png";
// import Image4 from "../assets/fred_prev_ui.png";
import Image5 from "../assets/nelly_prev_ui.png";

const teamMembers = [
  {
    name: "Jason Ashley",
    title: "Co-Founder & CEO",
    image: Image2,
  },
  // {
  //   name: "Frederick Aikins",
  //   title: "Co-Founder & COO",
  //   image: Image4,
  // },
  {
    name: "Kwame Dadzie",
    title: "Software Development Lead",
    image: Image3,
  },
  {
    name: "Derick Danso Okyere",
    title: "Senior Software Developer",
    image: Image1,
  },
  {
    name: "Nelly Quarcoopome",
    title: "Team & Customer Success Partner",
    image: Image5,
  }
];

const MeetTheTeam = () => {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#F2E5D3] to-[#fff] text-[#1d1d1d] py-16 md:py-28 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Meet the <span className="text-[#E86C4F]">Team</span>
        </h2>
        <p className="text-[#1d1d1d]/70 text-lg md:text-xl max-w-2xl mx-auto">
          Passionate innovators driving African progress through design, strategy, and technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#E86C4F"
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              className="bg-white shadow-xl p-6 rounded-2xl transition-transform transform hover:scale-105"
            >
              <div
                className="overflow-hidden rounded-xl mb-4 bg-gray-200" // Uniform background color
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-90 md:h-60 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-[#E86C4F] transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-medium text-sm">{member.title}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MeetTheTeam;