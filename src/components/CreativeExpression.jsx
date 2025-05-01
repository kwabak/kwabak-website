import React from "react";
import Tilt from "react-parallax-tilt";
import { PiStarFourFill } from "react-icons/pi";

const CreativeExpression = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#fefefe] via-[#f9fafb] to-[#fefefe] text-[#1d1d1d] py-16 md:py-28 px-6 md:px-20 overflow-hidden">
      <style>
        {`
          .shimmer-text {
            background: linear-gradient(90deg, #E86C4F, #F4A24C, #027A76);
            background-size: 200% auto;
            color: #1d1d1d;
            background-clip: text;
            -webkit-background-clip: text;
          }
          @media (prefers-reduced-motion: reduce) {
            .shimmer-text {
              animation: none;
              background: none;
              color: #E86C4F;
            }
          }
        `}
      </style>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl text-left md:text-5xl font-extrabold leading-tight">
            Our Creative <span className="text-[#E86C4F]">Expression</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1d1d1d]/80">
            Kwabak's visual identity system synthesizes cultural heritage with strategic purpose. 
            The logo integrates two Adinkra symbols from Ghana—UAC Nkanea and Nkyinkyim—creating 
            a distinctive mark that embodies both technological advancement and adaptive resilience.
          </p>
          <p className="text-lg md:text-xl text-[#1d1d1d]/80">
            This visual framework mirrors our approach to business transformation 
            across African markets. The interconnected pathways in our symbol represent  
            systematic processes that convert improvised solutions into scalable business architecture.
          </p>
        </div>

        {/* Right - Color System */}
        <div className="flex-1 grid md:grid-cols-1 gap-8">
          {[
            {
              title: "Black Typography",
              description: "Conveys authority and stability to anchor the brand.",
              color: "#1d1d1d, #333",
              border: "border-[#1d1d1d]",
              textColor: "text-[#ffffff]",
            },
            {
              title: "Coral & Orange Gradient",
              description: "Symbolizes energy and transformation in our brand journey.",
              color: "#E86C4F, #F4A24C",
              border: "border-[#E86C4F]",
              textColor: "text-[#ffffff]",
            },
            {
              title: "White Space",
              description: "Creates breathing room and visual clarity for maximum impact.",
              color: "#ffffff, #f9fafb",
              border: "border-gray-300",
              textColor: "text-[#1d1d1d]",
            },
          ].map((item, index) => (
            <div key={index} className="">
              <div
                className={`bg-gradient-to-br p-6 rounded-3xl shadow-xl text-left text-[#1d1d1d] backdrop-blur-xl ${item.border ? 'border-4' : ''} ${item.textColor}`}
                style={{
                  background: `linear-gradient(135deg, ${item.color})`,
                }}
              >
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Language */}
      <div className="mt-24">
        <h3 className="text-3xl shimmer-text font-bold md:text-4xl text-[#1d1d1d]/80 col-span-3">Visual Language</h3>
        

        <div className="mt-6 grid md:grid-cols-3 gap-10 text-left relative z-10">
          {[
            {
              description: "Establish immediate recognition in competitive markets.",
              color: "text-[#E86C4F]",
            },
            {
              description: "Communicate our dual strength in technology and strategy.",
              color: "text-[#F4A24C]",
            },
            {
              description: "Signal our deep understanding of the African business landscape.",
              color: "text-[#027A76]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-2 p-4 rounded-xl bg-white/70 backdrop-blur-lg shadow-md border border-gray-300"
            > 
              <PiStarFourFill className={`${item.color} text-2xl`} />
              <div>
                <p className="text-[#1d1d1d]/70 text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final Strategic Expansion Paragraph */}
      <div className="max-w-5xl mx-auto mt-24 text-center space-y-6">
        <h4 className="text-2xl md:text-4xl font-bold text-[#1d1d1d]/80">
          Transforming Business, Empowering Economies
        </h4>
        <p className="text-lg md:text-xl text-[#1d1d1d]/80">
          When entrepreneurs across the continent encounter our brand, they recognize a partner that 
          comprehends both their challenges and their potential. 
          Kwabak's expertise transforms individual business success into collective economic advancement, 
          creating measurable impact at both organizational and national levels.
        </p>
        <p className="text-lg md:text-xl text-[#1d1d1d]/80">
          This deliberate integration of heritage, design principles, and strategic positioning creates a 
          brand system that will drive recognition and confidence as we expand our presence across African markets.
        </p>
      </div>
    </section>
  );
};

export default CreativeExpression;
