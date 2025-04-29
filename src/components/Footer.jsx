import { Mail, MapPin } from "lucide-react";
import React, { useState, useRef } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const modalContentRef = useRef(null);

  // Handle clicks on the modal overlay
  const handleOverlayClick = (e) => {
    // Check if the click is outside the modal content
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto place-content-center grid md:grid-cols-1 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <MapPin size={20} color="#E86C4F" />
            <p className="">C08 Manyo Close, Adabraka, Accra - Ghana</p>
          </div>

          <div className="flex items-center space-x-2">
            <Mail size={20} color="white" />
            <a
              href="mailto:hello@kwabak.com"
              className="text-[#E86C4F] hover:text-[#d8563f] cursor-pointer"
            >
              hello@kwabak.com
            </a>
          </div>
        </div>

        <div className="space-y-4 text-left">
          <h3 className="text-3xl font-bold">Technology | Strategy | Execution | Growth</h3>
          <p className="text-lg md:w-[30rem]">
            We help SMEs in Africa grow and transform through the thoughtful integration of technology, strategy, and operational systems.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex space-x-6 text-3xl">
            <a href="https://www.linkedin.com/company/Kwabak" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#d8563f] transition duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/kwabak" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#d8563f] transition duration-300 ease-in-out transform hover:scale-110">
              <FaInstagram />
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => setShowModal(true)}
              className="hover:text-[#fd6c63] text-lg cursor-pointer"
            >
              Terms & Privacy
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Kwabak. All rights reserved.</p>
      </div>

      {/* Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          onClick={handleOverlayClick}
        >
          <div 
            ref={modalContentRef}
            className="bg-white text-black max-w-3xl w-full p-6 rounded-lg overflow-y-auto max-h-[90vh] relative"
          >
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="mb-4">
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING KWABAK WEBSITE.
            </p>
            <p className="mb-4">
              This website is owned and operated by Kwabak, located in Accra, Ghana.
              By accessing and using Kwabak’s website in any way — including, without limitation,
              browsing the website, using any information, using any content, using any services,
              downloading any materials — you agree to and are bound by these terms. If you do not
              accept these terms in full, please cease using this website immediately.
            </p>

            <h3 className="font-semibold mt-4">Copyright</h3>
            <p className="mb-4">
              All site content is Copyright Kwabak. The names, images, and logos identifying
              Kwabak or third parties and their products and services are proprietary marks of
              Kwabak and/or those third parties. Kwabak has made all reasonable attempts to satisfy
              the requirements of copyright. Should any copyright issues arise, please contact
              Kwabak immediately at <a href="mailto:hello@kwabak.com" className="text-[#E86C4F]">hello@kwabak.com</a>.
              Kwabak will respond to copyright enquiries within 24 working hours of receipt.
            </p>

            <h3 className="font-semibold mt-4">Use of Material</h3>
            <p className="mb-4">
              Material may not be copied, reproduced, republished, downloaded, posted, broadcast,
              or transmitted in any way except for your own personal, non-commercial use. Use of
              material on this website for any other purpose is expressly prohibited by law and may
              result in legal penalties. No logo, graphic, sound, or image from the website may be
              copied or retransmitted unless expressly permitted by Kwabak.
            </p>

            <h3 className="font-semibold mt-4">Accuracy</h3>
            <p className="mb-4">
              Kwabak has made all reasonable efforts to ensure that all information provided
              through its website is accurate at the time of inclusion. However, there may be
              inadvertent errors for which Kwabak apologizes. Kwabak accepts no liability for any
              inaccuracies or omissions and any decisions based on information from this website
              are the sole responsibility of the visitor. Kwabak accepts no liability for any
              direct, special, indirect, or consequential damages arising from the use of this
              website.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-[#E86C4F] text-white py-2 px-6 rounded hover:bg-[#d8563f]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;