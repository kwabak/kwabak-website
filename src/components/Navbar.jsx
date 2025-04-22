// Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo2.png"; // Adjust the path to your actual logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["Home", "About", "Services", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/10 shadow-sm h-fit overflow-y-hidden">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="">
          <img src={Logo} alt="Logo" className="object-cover w-[8rem]" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.toLowerCase()}
              className="text-[#1d1d1d] font-medium hover:text-[#E86C4F] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
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
              <a
                key={index}
                href={link.toLowerCase()}
                className="block text-[#1d1d1d] text-lg font-semibold hover:text-[#E86C4F] transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;