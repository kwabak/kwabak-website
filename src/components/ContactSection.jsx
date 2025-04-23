import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-title, .contact-subtitle, .contact-button",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="contact-section relative py-20 px-6 md:px-20 bg-gradient-to-b from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-[#1d1d1d] overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="contact-title text-4xl md:text-5xl font-extrabold leading-tight">
            Feeling the pressure?
          </h2>
          <p className="contact-subtitle text-[#1d1d1d]/80 text-lg">
            We understand the struggle and we’re here to help lighten your load.
          </p>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">
              Let’s work together
            </h3>
            <p className="text-lg text-[#1d1d1d]/80">
              Your vision deserves exceptional support. Share your goals, challenges, or ideas below and let’s create something amazing together. We’re excited to hear from you!
            </p>
          </div>
          {/* Contact Button */}
          <button className="contact-button inline-block mt-6 px-6 py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium rounded-full shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer">
            Share Your Thoughts
          </button>
        </div>

        {/* Input Form */}
        <div className="flex justify-center">
          <form className="w-full max-w-md bg-white/20 backdrop-blur-xl p-8 rounded-xl shadow-lg space-y-6 border border-white/30">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg border border-[#DBAE8D] text-[#1d1d1d] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
            />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-3 rounded-lg border border-[#DBAE8D] text-[#1d1d1d] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
            />

            <div className="flex gap-4">
              <select className="w-1/3 p-3 rounded-lg border border-[#DBAE8D] text-[#1d1d1d] focus:outline-none focus:ring-2 focus:ring-[#E86C4F]">
                <option value="+233">🇬🇭 +233</option>
                <option value="+234">🇳🇬 +234</option>
                <option value="+254">🇰🇪 +254</option>
                <option value="+27">🇿🇦 +27</option>
                <option value="+20">🇪🇬 +20</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number"
                className="w-2/3 p-3 rounded-lg border border-[#DBAE8D] text-[#1d1d1d] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
              />
            </div>

            <textarea
              placeholder="Tell us your goals, challenges, or ideas"
              className="w-full p-3 rounded-lg border border-[#DBAE8D] text-[#1d1d1d] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
              rows="5"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium cursor-pointer rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Glow Backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E86C4F]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#027A76]/10 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default ContactSection;