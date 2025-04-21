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
    <section className="contact-section relative py-20 px-6 md:px-20 bg-gradient-to-b from-[#3a3a6a] via-[#2a2a44] to-[#1d1d30] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto z-10 relative grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="contact-title text-4xl md:text-5xl font-extrabold leading-tight">
            Feeling the pressure?
          </h2>
          <p className="contact-subtitle text-white/70 text-lg">
            We understand the struggle and we’re here to help lighten your load.
          </p>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">
              Let’s work together
            </h3>
            <p className="text-lg text-white/80">
              Your vision deserves exceptional support. Share your goals, challenges, or ideas below and let’s create something amazing together. We’re excited to hear from you!
            </p>
          </div>
          {/* Contact Button */}
          <button className="contact-button inline-block mt-6 px-6 py-3 bg-[#fd6c63] hover:bg-[#ff4c4c] text-white font-medium rounded-full shadow-lg transition duration-300 transform hover:scale-105">
            Share Your Thoughts
          </button>
        </div>

        {/* Input Form */}
        <div className="flex justify-center">
          <form className="w-full max-w-md bg-[#2a2a44]/90 p-8 rounded-xl shadow-lg space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full p-3 rounded-lg border-1 border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fd6c63]"
            />
            <textarea
              placeholder="Tell us your goals, challenges, or ideas"
              className="w-full p-3 rounded-lg border-1 border-gray-600 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#fd6c63]"
              rows="5"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#fd6c63] hover:bg-[#ff4c4c] text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
