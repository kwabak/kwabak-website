import { Mail, MapPin } from "lucide-react";
import React, { useState, useRef } from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import InverseLogo from "../assets/InverseWhite.png";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const modalContentRef = useRef(null);

  const handleOverlayClick = (e) => {
    if (modalContentRef.current && !modalContentRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Logo & Address */}
        <div className="">
          <img src={InverseLogo} alt="Kwabak Logo" className="w-40" />
          <div className="flex items-start space-x-2 mt-6">
            <MapPin size={20} className="text-[#E86C4F]" />
            <p>C08 Manyo Close, Adabraka, Accra - Ghana</p>
          </div>
          <div className="flex items-start space-x-2 mt-2">
            <Mail size={20} className="text-white" />
            <a
              href="mailto:hello@kwabak.com"
              className="text-[#E86C4F] hover:text-[#d8563f] transition-colors"
            >
              hello@kwabak.com
            </a>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-left text-sm hover:text-[#fd6c63] mt-4 cursor-pointer transition-colors underline"
          >
            Terms & Privacy
          </button>
        </div>

        {/* Company Message */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-[#E86C4F]">
            Technology | Strategy | Execution | Growth
          </h3>
          <p className="text-md leading-relaxed">
            We help SMEs in Africa grow and transform through the thoughtful
            integration of technology, strategy, and operational systems.
          </p>
          {/* Social & Legal */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="flex space-x-6 text-2xl">
              <a
                href="https://www.linkedin.com/company/Kwabak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E86C4F] hover:text-[#d8563f] transition-transform duration-300 transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/kwabak"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E86C4F] hover:text-[#d8563f] transition-transform duration-300 transform hover:scale-110"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Kwabak Technologies Ltd. All rights reserved.
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 backdrop-blur-sm animate-fade-in"
          onClick={handleOverlayClick}
        >
          <div
            ref={modalContentRef}
            className="bg-white text-black max-w-3xl w-full rounded-lg shadow-lg overflow-hidden max-h-[90vh] transform transition-transform duration-300 scale-95 animate-fade-scale-in flex flex-col"
          >
            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto flex-1">
              <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
              <p className="mb-4">
                PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING KWABAK WEBSITE.
              </p>
              <p className="mb-4">
                This website is owned and operated by Kwabak LLC (“Kwabak”), located in Accra, Ghana.
                By accessing and using Kwabak’s website in any way — including, without limitation,
                browsing the website, using any information, using any content, using any services,
                downloading any materials — you agree to and are bound by these terms. If you do not
                accept these terms in full, please cease using this website immediately.
              </p>

              <h3 className="font-semibold mt-4">Copyright</h3>
              <p className="mb-4">
                All site content is Copyright Kwabak LLC. The names, images, and logos identifying
                Kwabak or third parties and their products and services are proprietary marks of
                Kwabak and/or those third parties. Kwabak has made all reasonable attempts to satisfy
                the requirements of copyright. Should any copyright issues arise, please contact
                Kwabak immediately at{" "}
                <a href="mailto:hello@kwabak.com" className="text-[#E86C4F]">
                  hello@kwabak.com
                </a>
                . Kwabak will respond to copyright enquiries within 24 working hours.
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
            </div>

            {/* Fixed Bottom Button */}
            <div className="bg-white p-4 border-t border-gray-300 text-left">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#E86C4F] text-white py-2 px-6 rounded hover:bg-[#d8563f] transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
