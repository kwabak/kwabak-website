// import { Particles } from "@tsparticles/react";
// import React from "react";
// import { PiStarFourFill } from "react-icons/pi";
// import Tilt from "react-parallax-tilt";
// import brandImage from "../assets/logo-huge.png";

// const CreativeExpression = () => {
//   const cardVariants = {
//     hover: { scale: 1.05, rotate: 2, boxShadow: "0 0 15px rgba(232, 108, 79, 0.5)" },
//     initial: { opacity: 0, y: 40 },
//     animate: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-[#F2E5D3] via-[#DBAE8D] to-[#BFDDCE] text-[#1d1d1d] py-24 px-6 md:px-20 overflow-hidden">
//       <style>
//         {`
//           .shimmer-text {
//             background: linear-gradient(90deg, #E86C4F, #F4A24C, #027A76);
//             background-size: 200% auto;
//             color: #1d1d1d;
//             background-clip: text;
//             -webkit-background-clip: text;
//           @keyframes glitch {
//             0% { transform: translate(0); }
//             20% { transform: translate(-1px, 1px); }
//             40% { transform: translate(1px, -1px); }
//             60% { transform: translate(-1px, 0); }
//             80% { transform: translate(1px, 0); }
//             100% { transform: translate(0); }
//           }
//           .animate-glitch:hover {
//             animation: glitch 0.5s infinite;
//           }
//           .shadow-glow {
//             box-shadow: 0 0 15px rgba(244, 162, 76, 0.5), 0 0 25px rgba(232, 108, 79, 0.3);
//           }
//           .rotate-star {
//             animation: rotate 10s linear infinite;
//           }
//           @media (prefers-reduced-motion: reduce) {
//             .shimmer-text {
//               animation: none;
//               background: none;
//               color: #E86C4F;
//             }
//           }
//           @keyframes rotate {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//           .wave-bg {
//             animation: wave 15s ease-in-out infinite;
//           }
//           @keyframes wave {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }
//         `}
//       </style>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
//         {/* Left Content */}
//         <div className="flex-1 space-y-6">
//           <h2 className="text-4xl text-left md:text-5xl font-extrabold leading-tight">
//             Our Creative <span className="text-[#E86C4F]">Expression</span>
//       {/* Particle Background */}
//       <Particles
//         id="tsparticles-creative"
//         options={{
//           particles: {
//             number: { value: 40, density: { enable: true, value_area: 1200 } },
//             shape: { type: "circle" },
//             color: { value: ["#E86C4F", "#BFDDCE", "#F4A24C"] },
//             opacity: { value: 0.3, random: true },
//             size: { value: 3, random: true },
//             move: { enable: true, speed: 0.5, direction: "none", random: true },
//           },
//           interactivity: {
//             events: { onhover: { enable: true, mode: "bubble" } },
//             modes: { bubble: { distance: 200, size: 5, duration: 2, opacity: 0.6 } },
//           },
//         }}
//         className="absolute inset-0 z-0"
//       />

//       {/* Blurred Brand Image Background */}
//       <div className="absolute top-0 z-10 opacity-90 rotate-[10deg] left-[-100px] w-[400px] h-[400px] overflow-hidden">
//         <img
//           src={brandImage}
//           alt="Blurred Brand Background"
//           className="w-full  h-full object-cover filter blur-[8px] scale-110"
//         />
//       </div>

//       <div className="absolute bottom-0 z-10 opacity-90 rotate-[10deg] right-[-100px] w-[400px] h-[400px] overflow-hidden">
//         <img
//           src={brandImage}
//           alt="Blurred Brand Background"
//           className="w-full  h-full object-cover filter blur-[8px] scale-110"
//         />
//       </div>

//       {/* Glow Overlay */}
//       <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(191,221,206,0.3),rgba(219,174,141,0.2))] blur-[120px] rounded-full z-0 animate-pulse wave-bg" />

//       <div className="max-w-6xl mx-auto space-y-16 relative z-10">
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-[#1d1d1d] animate-glitch mb-6">
//             Our Creative <span className="text-[#027A76]">Expression</span>
//           </h2>
//           <p className="text-lg md:text-xl text-[#1d1d1d]/80 max-w-4xl mx-auto">
//             Kwabak's visual identity blends cultural heritage with innovation. Our logo fuses Ghanaian Adinkra symbols—UAC Nkanea and Nkyinkyim—embodying technological progress and adaptive resilience.
//           </p>
//         </div>

//         {/* Right - Color System */}
//         <div className="flex-1 grid md:grid-cols-1 gap-8">
//         <motion.div
//           className="grid md:grid-cols-3 gap-10"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           {[
//             {
//               title: "Black Typography",
//               description: "Conveys authority and stability to anchor the brand.",
//               color: "text-[#E86C4F]",
//             },
//             {
//               title: "Coral & Orange Gradient",
//               description: "Symbolizes energy and transformation in our brand journey.",
//               color: "text-[#1d1d1d]",
//             },
//             {
//               title: "White Space",
//               description: "Creates breathing room and visual clarity for maximum impact.",
//               color: "#ffffff, #f9fafb",
//               border: "border-gray-300",
//               textColor: "text-[#1d1d1d]",
//               color: "text-[#027A76]",
//             },
//           ].map((item, index) => (
//             <div key={index} className="">
//               <div
//                 className={`bg-gradient-to-br p-6 rounded-3xl shadow-xl text-left text-[#1d1d1d] backdrop-blur-xl ${item.border ? 'border-4' : ''} ${item.textColor}`}
//                 style={{
//                   background: `linear-gradient(135deg, ${item.color})`,
//                 }}
//             <Tilt key={index} options={{ max: 15, scale: 1.05, speed: 400 }}>
//               <motion.div
//                 className="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl border-4 border-[#E86C4F]/20"
//                 variants={cardVariants}
//                 initial="initial"
//                 animate="animate"
//                 whileHover="hover"
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//               >
//                 <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
//                 <p className="text-sm opacity-80">{item.description}</p>
//               </div>
//             </div>
//                 <h4 className={`text-xl font-bold ${item.color} mb-2`}>{item.title}</h4>
//                 <p className="text-[#1d1d1d]/80 text-sm">{item.description}</p>
//               </motion.div>
//             </Tilt>
//           ))}
//         </motion.div>

//         <motion.div
//           className="text-center max-w-4xl mx-auto"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-lg md:text-xl text-[#1d1d1d]/80 font-light">
//             Our visual system reflects our mission to transform businesses. The interconnected pathways in our symbol mirror our systematic approach to building scalable solutions.
//           </p>
//         </motion.div>

//         <motion.div
//           className="grid md:grid-cols-3 gap-10 text-left"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//           viewport={{ once: true }}
//         >
//           {[
//             {
//               title: "Recognition",
//               description: "Establish immediate recognition in competitive markets.",
//               color: "text-[#027A76]",
//             },
//             {
//               title: "Dual Capability",
//               description: "Communicate our dual strength in technology and strategy.",
//               color: "text-[#F4A24C]",
//             },
//             {
//               title: "Context Awareness",
//               description: "Signal our deep understanding of the African business landscape.",
//               color: "text-[#E86C4F]",
//             },
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="flex items-start gap-2 p-4 rounded-xl bg-white/70 backdrop-blur-lg shadow-md border border-gray-300"
//             > 
//               <PiStarFourFill className={`${item.color} text-2xl`} />
//               className="flex items-start gap-4"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3 }}
//             >
//               <PiStarFourFill className={`${item.color} text-2xl rotate-star`} />
//               <div>
//                 <h4 className="font-semibold text-lg mb-1 text-[#1d1d1d]">{item.title}</h4>
//                 <p className="text-[#1d1d1d]/80 text-sm">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//         </motion.div>

//       {/* Final Strategic Expansion Paragraph */}
//       <div className="max-w-5xl mx-auto mt-24 text-center space-y-6">
//         <h4 className="text-2xl md:text-4xl font-bold text-[#1d1d1d]/80">
//           Transforming Business, Empowering Economies
//         </h4>
//         <p className="text-lg md:text-xl text-[#1d1d1d]/80">
//           When entrepreneurs across the continent encounter our brand, they recognize a partner that 
//           comprehends both their challenges and their potential. 
//           Kwabak's expertise transforms individual business success into collective economic advancement, 
//           creating measurable impact at both organizational and national levels.
//         </p>
//         <p className="text-lg md:text-xl text-[#1d1d1d]/80">
//           This deliberate integration of heritage, design principles, and strategic positioning creates a 
//           brand system that will drive recognition and confidence as we expand our presence across African markets.
//         </p>
//       </div>
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xl md:text-2xl text-[#1d1d1d]/90 max-w-3xl mx-auto font-semibold">
//             Kwabak is more than a tech partner—we’re a catalyst for scalable success and economic growth across Africa.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default CreativeExpression;


import { Particles } from "@tsparticles/react";
import { motion } from "framer-motion"; // Ensure this is imported
import React from "react";
import Tilt from "react-parallax-tilt";
import brandImage from "../assets/logo-huge.png";

const CreativeExpression = () => {
  const cardVariants = {
    hover: { scale: 1.05, rotate: 2, boxShadow: "0 0 15px rgba(232, 108, 79, 0.5)" },
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#fefefe] via-[#f9fafb] to-[#fefefe] text-[#1d1d1d] md:py-28 px-6 md:px-20 overflow-hidden">
      <style>
        {`
          .shimmer-text {
            background: linear-gradient(90deg, #E86C4F, #F4A24C, #027A76);
            background-size: 200% auto;
            color: #1d1d1d;
            background-clip: text;
            -webkit-background-clip: text;
          }
          @keyframes glitch {
            0% { transform: translate(0); }
            20% { transform: translate(-1px, 1px); }
            40% { transform: translate(1px, -1px); }
            60% { transform: translate(-1px, 0); }
            80% { transform: translate(1px, 0); }
            100% { transform: translate(0); }
          }
          .animate-glitch:hover {
            animation: glitch 0.5s infinite;
          }
          .shadow-glow {
            box-shadow: 0 0 15px rgba(244, 162, 76, 0.5), 0 0 25px rgba(232, 108, 79, 0.3);
          }
          .rotate-star {
            animation: rotate 10s linear infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .shimmer-text {
              animation: none;
              background: none;
              color: #E86C4F;
            }
          }
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .wave-bg {
            animation: wave 15s ease-in-out infinite;
          }
          @keyframes wave {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      <Particles
        id="tsparticles-creative"
        options={{
          particles: {
            number: { value: 40, density: { enable: true, value_area: 1200 } },
            shape: { type: "circle" },
            color: { value: ["#E86C4F", "#BFDDCE", "#F4A24C"] },
            opacity: { value: 0.3, random: true },
            size: { value: 3, random: true },
            move: { enable: true, speed: 0.5, direction: "none", random: true },
          },
          interactivity: {
            events: { onhover: { enable: true, mode: "bubble" } },
            modes: { bubble: { distance: 200, size: 5, duration: 2, opacity: 0.6 } },
          },
        }}
        className="absolute inset-0 z-0"
      />

      <div className="absolute top-0 z-10 opacity-90 rotate-[10deg] left-[-100px] w-[400px] h-[400px] overflow-hidden">
        <img
          src={brandImage}
          alt="Blurred Brand Background"
          className="w-full h-full object-cover filter blur-[8px] scale-110"
        />
      </div>

      <div className="absolute bottom-0 z-10 opacity-90 rotate-[10deg] right-[-100px] w-[400px] h-[400px] overflow-hidden">
        <img
          src={brandImage}
          alt="Blurred Brand Background"
          className="w-full h-full object-cover filter blur-[8px] scale-110"
        />
      </div>

      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(191,221,206,0.3),rgba(219,174,141,0.2))] blur-[120px] rounded-full z-0 animate-pulse wave-bg" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-[#1d1d1d] animate-glitch mb-6">
            Our Creative <span className="text-[#027A76]">Expression</span>
          </h2>
          <p className="text-lg md:text-xl text-[#1d1d1d]/80 max-w-4xl mx-auto">
            Kwabak's visual identity blends cultural heritage with innovation. Our logo fuses Ghanaian Adinkra symbols—UAC Nkanea and Nkyinkyim—embodying technological progress and adaptive resilience.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              title: "Black Typography",
              description: "Conveys authority and stability to anchor the brand.",
              color: "#E86C4F, #E86C4F",
            },
            {
              title: "Coral & Orange Gradient",
              description: "Symbolizes energy and transformation in our brand journey.",
              color: "#F4A24C, #E86C4F",
            },
            {
              title: "White Space",
              description: "Creates breathing room and visual clarity for maximum impact.",
              color: "#FFFFFF, #f9fafb",
            },
          ].map((item, index) => (
            <Tilt key={index} options={{ max: 15, scale: 1.05, speed: 400 }}>
              <motion.div
                className="bg-white/20 backdrop-blur-2xl p-6 rounded-2xl border-4 border-[#E86C4F]/20"
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ background: `linear-gradient(135deg, ${item.color})` }}
              >
                <h4 className="text-2xl font-bold mb-2">{item.title}</h4>
                <p className="text-sm opacity-80">{item.description}</p>
              </motion.div>
            </Tilt>
          ))}
        </motion.div>

        {/* Final Text */}
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-[#1d1d1d]/80 font-light">
            Our visual system reflects our mission to transform businesses. The interconnected pathways in our symbol mirror our systematic approach to building scalable solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeExpression;
