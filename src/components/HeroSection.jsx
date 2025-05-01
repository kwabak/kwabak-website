// import { motion } from "framer-motion";
// import { FaArrowDown, FaBolt, FaCode, FaCogs, FaRocket } from "react-icons/fa";
// import GroupImage from "../assets/people-raise-hands.jpg";

// const glassCards = [
//   {
//     icon: <FaCode className="text-[#E86C4F] text-xl" />,
//     text: "Smart Apps"
//   },
//   {
//     icon: <FaRocket className="text-[#027A76] text-xl" />,
//     text: "Scale Fast"
//   },
//   {
//     icon: <FaCogs className="text-[#027A76] text-xl" />,
//     text: "Innovate"
//   },
//   {
//     icon: <FaBolt className="text-[#F4A24C] text-xl" />,
//     text: "Tech Spark"
//   }
// ];

// const HeroSection = () => {
//   return (
//     <section className="relative py-[6rem] md:pt-[6rem] w-full bg-gradient-to-br from-[#fff] via-[#fff] to-[#F2E5D3] text-[#1d1d1d]">
//       <div className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* Left - Text */}
//         <div className="relative z-10 py-8 px-4 sm:px-10">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//             className="space-y-6"
//           >
//             <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
//               We’re a <span className="text-[#E86C4F]">Pan-African</span> Growth <br />
//               <span className="text-[#027A76]">Consultancy</span>
//             </h1>
//             <p className="text-base md:text-xl text-[#1d1d1d]/80">
//               At Kwabak, we empower African SMEs by unlocking strategic opportunities, driving digital transformation, and building the skills needed for lasting success.
//             </p>
//             {/* <div>
//               <button className="bg-[#E86C4F] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 cursor-pointer">
//               Tell us about your project
//               </button>
//             </div> */}

//              <div>
//               <button
//                  onClick={() => scrollToSection("Contact")} // 👈 Added this line
//                   className="bg-[#E86C4F] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 cursor-pointer"
//   >
//                   Tell us about your project
//                     </button>
//               </div>
//           </motion.div>
//         </div>

//         {/* Right - Image with Hovering Glass Cards */}
//         <motion.div
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1.5, ease: "easeOut" }}
//           className="relative rounded-2xl overflow-hidden shadow-xl"
//         >
//           <img src={GroupImage} alt="Empowered Team" className="w-full h-full object-cover rounded-2xl" />

//           {/* Floating Glass Cards */}
//           {glassCards.map((card, i) => (
//             <motion.div
//               key={i}
//               animate={{ y: [0, -10, 0] }}
//               transition={{ delay: i * 0.4, duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
//               className={`absolute z-20 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl shadow-md flex items-center gap-2 text-xs md:text-sm text-[#1d1d1d] font-medium ${
//                 i === 0 ? "top-[10%] left-[8%]" :
//                 i === 1 ? "bottom-[18%] right-[8%]" :
//                 i === 2 ? "top-[25%] right-[10%]" :
//                 "bottom-[25%] left-[10%]"
//               }`}
//             >
//               {card.icon}
//               <span>{card.text}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute hidden md:block bottom-6 left-1/2 transform -translate-x-1/2 text-[#1d1d1d]/60 text-sm z-10"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2 }}
//       >
//         <FaArrowDown className="animate-bounce text-xl" />
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

import { motion } from "framer-motion";
import GroupImage from "../assets/people-raise-hands.jpg";

const glassCards = [
  // {
  //   icon: <FaCode className="text-[#E86C4F] text-xl" />,
  //   text: "Smart Apps"
  // },
  // {
  //   icon: <FaRocket className="text-[#027A76] text-xl" />,
  //   text: "Scale Fast"
  // },
  // {
  //   icon: <FaCogs className="text-[#027A76] text-xl" />,
  //   text: "Innovate"
  // },
  // {
  //   icon: <FaBolt className="text-[#F4A24C] text-xl" />,
  //   text: "Tech Spark"
  // }
];

// 👉 Accept scrollToSection as a prop
const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="relative pt-16 pb-22 md:py-[6rem] md:pt-[6rem] w-full bg-gradient-to-br from-[#fff] via-[#fff] to-[#F2E5D3] text-[#1d1d1d]">
      <div className="px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <div className="relative z-10 py-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-6xl font-extrabold leading-tight">
              We’re a <span className="text-[#E86C4F]">Pan-African</span> Growth <br />
              <span className="text-[#027A76]">Consultancy</span>
            </h1>
            <p className="text-base md:text-xl text-[#1d1d1d]/80">
              At Kwabak, we empower African SMEs by unlocking strategic opportunities, driving digital transformation, and building the skills needed for lasting success.
            </p>

            {/* Button to scroll to Contact */}
            <div>
              <button
                onClick={() => scrollToSection("Contact")}
                className="bg-[#E86C4F] text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300 cursor-pointer"
              >
                Tell us about your project <span className="text-xl">→</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right - Image with Hovering Glass Cards */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative rounded-2xl w-full overflow-hidden shadow-xl"
        >
          <img src={GroupImage} alt="Empowered Team" className="w-full h-full object-cover rounded-2xl" />

          {/* Floating Glass Cards */}
          {glassCards.map((card, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{ delay: i * 0.4, duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className={`absolute z-20 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl shadow-md flex items-center gap-2 text-xs md:text-sm text-[#1d1d1d] font-medium ${
                i === 0 ? "top-[10%] left-[8%]" :
                i === 1 ? "bottom-[18%] right-[8%]" :
                i === 2 ? "top-[25%] right-[10%]" :
                "bottom-[25%] left-[10%]"
              }`}
            >
              {card.icon}
              <span>{card.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
