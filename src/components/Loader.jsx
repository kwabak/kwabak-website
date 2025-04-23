// components/Loader.jsx
import React from "react";
import logo from "../assets/logo-huge.png"; // Make sure this path points to your logo
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#F2E5D3] flex items-center justify-center z-50">
      <motion.img
        src={logo}
        alt="Kwabak Logo"
        className="w-32 h-32"
        initial={{ scale: 1, opacity: 0.9 }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default Loader;
