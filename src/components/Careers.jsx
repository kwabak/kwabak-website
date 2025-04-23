import React, { useEffect } from "react";
import { BriefcaseBusiness, Globe } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Careers = () => {
  useEffect(() => {
    // Rotating the Globe icon slowly
    gsap.to(".globe-icon", {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "linear",
    });

    // Bouncing the info blocks slightly when they enter the viewport
    gsap.fromTo(
      ".info-block",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".info-block",
          start: "top 80%",
        },
      }
    );

    // Tilt animation for the right-side visual card
    gsap.to(".right-card", {
      rotation: 5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "easeInOut",
    });
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-[#1d1d1d] overflow-hidden">
      {/* Glowing Background Icon */}
      <Globe className="absolute right-[-80px] top-[20%] w-[600px] h-[600px] text-[#E86C4F]/10 blur-[100px] opacity-70 pointer-events-none z-0 globe-icon" />

      <div className="max-w-7xl mx-auto z-10 relative grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Working at <span className="text-[#E86C4F]">Kwabak</span>
            </h2>
            <p className="text-[#1d1d1d]/80 text-lg mt-4">
              We believe every team member has the power to influence projects and make a real impact.
              Every role, from entry-level to executive, adds unique value to our mission.
            </p>
          </div>

          <div className="space-y-4 text-[#1d1d1d]/80 text-lg">
            <p>
              <span className="text-[#027A76] font-semibold">Hands-on learning:</span> True growth comes from experience. While we thrive on action, we’re equally committed to investing in training and development.
            </p>
            <p>
              <span className="text-yellow-600 font-semibold">Remote-first setup:</span> Enjoy the freedom to work when and where you're at your best. Balance your professional and personal life while being part of a global, dynamic team.
            </p>
            <p>
              In an industry as dynamic as ours, there’s always more to learn. We encourage you to keep an eye out for openings as we expand.
            </p>
          </div>

          <button className="inline-block mt-6 px-6 py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium rounded-full shadow-lg transition duration-300">
            View Openings
          </button>
        </div>

        {/* Right Side Visual */}
        <div className="relative right-card">
          <div className="w-full h-full flex items-center justify-center">
            <BriefcaseBusiness className="w-[280px] h-[280px] text-[#027A76]/30 blur-sm animate-pulse" />
          </div>
          <div className="absolute top-8 left-8 bg-[#fff]/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center max-w-xs info-block">
            <p className="text-xl font-bold text-[#027A76] mb-1">Impact-Focused</p>
            <p className="text-[#1d1d1d]/70 text-sm">From ideation to execution, your work matters every day.</p>
          </div>
          <div className="absolute bottom-6 right-6 bg-[#fff]/10 backdrop-blur-md p-6 rounded-2xl shadow-lg text-center max-w-xs info-block">
            <p className="text-xl font-bold text-[#E86C4F] mb-1">Global Culture</p>
            <p className="text-[#1d1d1d]/70 text-sm">Collaborate across borders with a team that spans the globe.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
