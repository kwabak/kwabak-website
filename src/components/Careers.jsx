import React from "react";
import TeamworkImage from "../assets/man-on-phone.jpg"; // Your uploaded image

const Careers = () => {

  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-white to-[#E8DAC7] text-[#1d1d1d] overflow-hidden">
   

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Column */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Working at <span className="text-[#E86C4F]">Kwabak</span>
            </h2>
            <p className="text-[#1d1d1d]/80 text-lg mt-4">
              We believe every team member has the power to influence projects and make a real impact. Every role, from entry-level to executive, adds unique value to our mission.
            </p>
            <p className="text-[#1d1d1d]/80 text-lg mt-4">
              We embrace a hands-on approach to learning, understanding that true growth comes from experience. And while we thrive on action, we’re equally committed to investing in training and development. In an industry as dynamic and fast-paced as ours, there’s always more to learn.
            </p>
            <p className="text-[#1d1d1d]/80 text-lg mt-4">
              Our remote-first setup offers incredible perks that empower you to work when you’re at your best. Enjoy the freedom to balance your professional and personal life, all while being part of a dynamic team that spans borders.
            </p>
            <p className="text-[#1d1d1d]/80 text-lg mt-4">
              We encourage you to keep an eye out for openings as we expand our team.
            </p>
          </div>

{/* 
          <button className="inline-block mt-6 px-6 py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium rounded-full shadow-lg transition duration-300">
            View Openings
          </button> */}
        </div>

        {/* Image with Floating Cards */}
        <div className="relative mt-4 md:mt-0 w-full h-full">
          <div className="relative rounded-3xl shadow-xl w-full h-full">
            <img
              src={TeamworkImage}
              alt="Team Collaboration"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
