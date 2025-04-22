import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa"; // Importing social media icons
import LogoHuge from "../assets/logo-huge.png"; // Importing the logo image
import Logo from "../assets/logo2.png"; // Adjust the path to your actual logo



const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#F2E5D3] to-[#F4A24C] text-black py-12 px-6 md:px-20 relative overflow-hidden">
      {/* Animated Glowing Background Decoration */}
      <div className="absolute top-0 right-0 z-0 w-[600px] h-[600px] ">
        <img src={LogoHuge} alt="Glowing Background" className="w-full h-full object-cover opacity-20 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto place-content-center grid md:grid-cols-1 gap-12">
        {/* Company Information */}
        <div className="space-y-4">
          <img src={Logo} alt="Kwabak Logo" className="w-[10rem] h-auto" />
          <p className="">Location: C08 Manyo Close, Adabraka, Accra - Ghana</p>
          <p className="">Email: <a href="mailto:hello@kwabak.com" className="text-[#E86C4F] hover:text-[#ff4c4c]">hello@kwabak.com</a></p>
        </div>

        {/* Footer Tagline */}
        <div className="space-y-4 text-left">
          <h3 className="text-3xl font-bold">Technology, Strategy, Execution, Growth</h3>
          <p className="text-lg w-[30rem]">
            We help SMEs in Africa grow and transform through the thoughtful integration of technology, strategy, and operational systems.
          </p>
        </div>

        {/* Social Media & Legal Links */}
        <div className="space-y-4">
          <div className="flex space-x-6 text-3xl">
            <a href="https://www.linkedin.com/company/Kwabak" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#ff4c4c] transition duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#ff4c4c] transition duration-300 ease-in-out transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#ff4c4c] transition duration-300 ease-in-out transform hover:scale-110">
              <FaFacebook />
            </a>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="/privacy-policy" className="hover:text-[#fd6c63] text-lg">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#fd6c63] text-lg">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="mt-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Kwabak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
