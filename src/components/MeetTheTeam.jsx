import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image1 from "../assets/image1.jpg"
import Image2 from "../assets/image2.jpg"
import Image3 from "../assets/image3.jpg"
import Image4 from "../assets/image4.jpg"

const teamMembers = [
  {
    name: "Ama K.",
    title: "Founder & CEO",
    image: Image4,
    bio: "Visionary leader passionate about African innovation and sustainable impact.",
  },
  {
    name: "Kwame B.",
    title: "CTO",
    image: Image2,
    bio: "Tech wizard building scalable systems with purpose.",
  },
  {
    name: "Mark D.",
    title: "Product Designer",
    image: Image3,
    bio: "Designs user-first experiences rooted in culture and clarity.",
  },
  {
    name: "James M.",
    title: "Growth Lead",
    image: Image1,
    bio: "Connecting solutions to people, communities, and markets.",
  },
];

const MeetTheTeam = () => {
  return (
    <section className="relative bg-[#1a1a2e] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
          Meet the <span className="text-[#00ffff]">Team</span>
        </h2>
        <p className="text-white/70 text-lg md:text-xl">
          A passionate crew pushing boundaries through tech and creativity.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="group "
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor="#00ffff"
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              className="bg-[#222244] p-6 rounded-3xl shadow-lg transform transition-transform hover:scale-[1.03] border border-[#00ffff]/30"
            >
              <div className="overflow-hidden rounded-2xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-center rounded-2xl group-hover:scale-105 transition-transform duration-300 shadow-md border-4 border-[#00ffff]/20"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold group-hover:scale-105 transition-transform duration-200">
                  {member.name}
                </h3>
                <p className="text-[#00ffff] font-medium">{member.title}</p>
                <p className="text-white/70 text-sm">{member.bio}</p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Optional glowing gradient effect behind */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#00ffff]/20 to-[#fd6c63]/20 rounded-full blur-[180px] opacity-30 z-0 animate-pulse"></div>
    </section>
  );
};

export default MeetTheTeam;
