import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, content }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-[#1d1d1d] rounded-2xl max-w-md w-full p-8 relative shadow-lg"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <h3 className="text-2xl font-bold mb-2 text-[#E86C4F]">{title}</h3>
            <p className="text-sm text-[#1d1d1d]/80">{content}</p>
            <button
              className="absolute top-4 right-4 text-xl text-[#E86C4F] hover:text-[#ff3b3b] cursor-pointer"
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
