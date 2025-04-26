


// // Navbar.jsx
// import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";
// import Logo from "../assets/logo2.png";

// const Navbar = ({ scrollToSection }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = ["Home", "About", "Services", "Brand", "Career", "Contact"];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-sm h-fit overflow-y-hidden">
//       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
//         <div className="">
//           <img src={Logo} alt="Logo" className="object-cover w-[8rem]" />
//         </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex space-x-8">
//           {navLinks.map((link, index) => (
//             <button
//               key={index}
//               onClick={() => scrollToSection(link)}
//               className="text-[#1d1d1d] cursor-pointer font-medium hover:text-[#E86C4F] transition-colors duration-200"
//             >
//               {link}
//             </button>
//           ))}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-[#1d1d1d] cursor-pointer hover:text-[#E86C4F]"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: -10, scale: 0.95 }}
//             transition={{ duration: 0.4, ease: "easeInOut" }}
//             className="md:hidden relative px-6 pb-4 pt-2 space-y-3 bg-white/10 backdrop-blur-md border-t border-white/10 shadow"
//           >
//             {navLinks.map((link, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   scrollToSection(link);
//                   setIsOpen(false);
//                 }}
//                 className="block text-[#1d1d1d] text-lg font-semibold hover:text-[#E86C4F] cursor-pointer  transition duration-300"
//               >
//                 {link}
//               </button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/logo2.png";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Brand", "Career"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50  bg-white  h-fit overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="object-cover w-[8rem]" />
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link)}
              className="text-[#1d1d1d] cursor-pointer font-medium hover:text-[#E86C4F] transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>

        {/* "Talk to Us" Button at Right */}
        <div className="hidden md:flex">
          <button
            onClick={() => scrollToSection("Contact")}
            className="bg-[#E86C4F] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#cf5c42] transition-all duration-300"
          >
            Talk to Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1d1d1d] cursor-pointer hover:text-[#E86C4F]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden relative px-6 pb-4 pt-2 space-y-3 bg-white/10 backdrop-blur-md border-t border-white/10 shadow"
          >
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => {
                  scrollToSection(link);
                  setIsOpen(false);
                }}
                className="block text-[#1d1d1d] text-lg font-semibold hover:text-[#E86C4F] cursor-pointer transition duration-300"
              >
                {link}
              </button>
            ))}

            {/* Talk to Us Button in Mobile */}
            <button
              onClick={() => {
                scrollToSection("Contact");
                setIsOpen(false);
              }}
              className="block w-full mt-4 bg-[#E86C4F] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#cf5c42] transition-all duration-300 text-center"
            >
              Talk to Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
