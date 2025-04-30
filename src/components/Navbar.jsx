import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/MainLogo.png";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = ["Home", "About", "Services", "Logo Story", "Careers"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        key={isScrolled ? "scrolled" : "top"}
        initial={{ y: isScrolled ? -80 : 0, opacity: isScrolled ? 0 : 1 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className={`top-0 left-0 w-full z-50 ${
          isScrolled
            ? "fixed backdrop-blur-md bg-white/80 shadow-md border-b border-gray-200"
            : "absolute bg-transparent"
        } h-fit overflow-y-hidden`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={Logo} alt="Logo" className="object-cover w-[7rem]" />
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

           

          <div className="hidden md:flex">
            <button
              onClick={() => scrollToSection("Contact")}
              className="bg-[#E86C4F] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#cf5c42] cursor-pointer transition-all duration-300 flex items-center gap-2"
            >
              Talk to Us <span className="text-xl">→</span>
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
              className="md:hidden relative px-6 pb-4 pt-2 space-y-3 bg-white/80 backdrop-blur-md border-t border-white/10 shadow"
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
                className="w-full mt-4 bg-[#E86C4F] text-white font-semibold px-6 py-2.5 rounded-full hover:bg-[#cf5c42] transition-all duration-300 text-center cursor-pointer flex items-center gap-2 justify-center"
              >
                Talk to Us <span className="text-xl">→</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </AnimatePresence>
  );
};

export default Navbar;
