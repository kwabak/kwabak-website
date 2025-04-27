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

          <div className="space-y-4 text-[#1d1d1d]/80 text-lg">
            <p>
              <span className="text-[#027A76] font-semibold">Hands-on learning:</span> Experience meets mentorship to fuel real growth.
            </p>
            <p>
              <span className="text-yellow-600 font-semibold">Remote-first setup:</span> Work wherever you do your best — we’re built for flexibility.
            </p>
            <p>
              With constant expansion, we’re always looking for bold, curious minds to join us.
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

            {/* Top-Left Floating Card */}
            <div className="absolute top-[-75px] -left-4 md:top-[-30px] md:left-[-60px] bg-white/80 backdrop-blur-md p-3 md:p-5 rounded-xl shadow-lg w-10/12 md:max-w-xs z-10">
              <p className="text-lg font-bold text-[#027A76] mb-1">Impact-Focused</p>
              <p className="text-[#1d1d1d] text-sm">
                From ideation to execution — every contribution counts.
              </p>
            </div>

            {/* Bottom-Right Floating Card */}
            <div className="absolute bottom-[-75px] -right-4 md:bottom-[-30px] md:right-[-60px] bg-white/80 backdrop-blur-md p-3 md:p-5 rounded-xl shadow-lg w-10/12 md:max-w-xs z-10">
              <p className="text-lg font-bold text-[#E86C4F] mb-1">Global Culture</p>
              <p className="text-[#1d1d1d] text-sm">
                Collaborate with a remote-first team spread across the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
