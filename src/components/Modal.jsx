import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, content, showContactButton }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    // Close only if the click is on the backdrop, not on the modal content
    if (e.target.id === "modal-backdrop") {
      onClose();
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // close the modal after scrolling
      onClose();
    }
  }

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <motion.div
        className="bg-white rounded-xl p-6 w-[90%] max-w-xl relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
        >
          <X size={28} />
        </button>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-[#1d1d1d]/80">{content}</p>

        {showContactButton && (
          <div className="mt-6 text-right">
            <button
              onClick ={scrollToContact}
              className="inline-block bg-[#E86C4F] text-white px-6 py-2 rounded-full hover:bg-[#cf563b] transition cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Modal;
