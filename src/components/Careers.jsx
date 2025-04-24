import React, { useEffect } from "react";
import { Globe } from "lucide-react";
import TeamworkImage from "../assets/man-on-phone.jpg"; // Your uploaded image

const Careers = () => {
  useEffect(() => {
    const globe = document.querySelector(".globe-icon");
    if (globe) {
      globe.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
        duration: 20000,
        iterations: Infinity,
        easing: "linear",
      });
    }
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-t from-white via-[#F2E5D3] to-[#E8DAC7] text-[#1d1d1d] overflow-hidden">
      {/* Background Glow Globe */}
      <Globe className="absolute right-[-80px] top-[20%] w-[600px] h-[600px] text-[#E86C4F]/10 blur-[100px] opacity-70 pointer-events-none z-0 globe-icon" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Text Column */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Working at <span className="text-[#E86C4F]">Kwabak</span>
            </h2>
            <p className="text-[#1d1d1d]/80 text-lg mt-4">
              Every team member contributes to something greater. From product innovation to impact-driven strategies — we move together.
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

          <button className="inline-block mt-6 px-6 py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium rounded-full shadow-lg transition duration-300">
            View Openings
          </button>
        </div>

        {/* Image with Floating Cards */}
        <div className="relative w-full max-w-lg mx-auto">
          <div className="relative rounded-3xl shadow-xl w-full">
            <img
              src={TeamworkImage}
              alt="Team Collaboration"
              className="w-full h-full object-contain rounded-3xl"
            />

            {/* Top-Left Floating Card (slightly over image) */}
            <div className="absolute top-[-30px] left-[-60px] bg-white/30 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-xs z-10">
              <p className="text-lg font-bold text-[#027A76] mb-1">Impact-Focused</p>
              <p className="text-[#1d1d1d]/70 text-sm">
                From ideation to execution — every contribution counts.
              </p>
            </div>

            {/* Bottom-Right Floating Card (slightly over image) */}
            <div className="absolute bottom-[-30px] right-[-60px] bg-white/30 backdrop-blur-md p-5 rounded-xl shadow-lg max-w-xs z-10">
              <p className="text-lg font-bold text-[#E86C4F] mb-1">Global Culture</p>
              <p className="text-[#1d1d1d]/70 text-sm">
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
