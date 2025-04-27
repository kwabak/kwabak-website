import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import Image1 from "../assets/image1.jpg";
import Image2 from "../assets/image2.jpg";
import Image3 from "../assets/image3.jpg";
import Image4 from "../assets/image4.jpg";

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
    <section className="relative bg-gradient-to-b from-white via-[#F2E5D3] to-[#fff] text-[#1d1d1d] py-28 px-6 md:px-20 overflow-hidden">
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
              <div className="overflow-hidden rounded-xl mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-lg"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-[#E86C4F] transition-colors duration-200">
                  {member.name}
                </h3>
                <p className="text-[#027A76] font-medium uppercase tracking-wide text-sm">{member.title}</p>
                <p className="text-[#1d1d1d]/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default MeetTheTeam;