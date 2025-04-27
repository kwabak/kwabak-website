import { Mail, MapPin } from "lucide-react";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa"; // Importing social media icons



const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 relative overflow-hidden">
      

      <div className="max-w-7xl mx-auto place-content-center grid md:grid-cols-1 gap-12">
        {/* Company Information */}
        {/* <div className="space-y-4">
          {/* <img src={Logo} alt="Kwabak Logo" className="w-[10rem] h-auto" /> */}
          {/* <p className=""> Location: C08 Manyo Close, Adabraka, Accra - Ghana</p>
          <span className="">Email:</span> 
          <a href="mailto:hello@kwabak.com" className="text-[#E86C4F] hover:text-[#d8563f] cursor-pointor">hello@kwabak.com</a>
        </div> */} 
        <div className="space-y-4">
    {/* <img src={Logo} alt="Kwabak Logo" className="w-[10rem] h-auto" /> */}

    {/* Location */}
    <div className="flex items-center space-x-2">
      <MapPin size={20} color="#E86C4F" /> {/* Location icon */}
      <p className="">C08 Manyo Close, Adabraka, Accra - Ghana</p>
    </div>

    {/* Email */}
    <div className="flex items-center space-x-2">
      <Mail size={20} color="white" /> {/* Email icon */}
      {/* <span>Email:</span> */}
      <a
        href="mailto:hello@kwabak.com"
        className="text-[#E86C4F] hover:text-[#d8563f] cursor-pointer"
      >
        hello@kwabak.com
      </a>
      </div>
    </div>

        {/* Footer Tagline */}
        <div className="space-y-4 text-left">
          <h3 className="text-3xl font-bold">Technology | Strategy | Execution | Growth</h3>
          <p className="text-lg md:w-[30rem]">
            We help SMEs in Africa grow and transform through the thoughtful integration of technology, strategy, and operational systems.
          </p>
        </div>

        {/* Social Media & Legal Links */}
        <div className="space-y-4">
          <div className="flex space-x-6 text-3xl">
            <a href="https://www.linkedin.com/company/Kwabak" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#d8563f] transition duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#d8563f] transition duration-300 ease-in-out transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#E86C4F] hover:text-[#d8563f] transition duration-300 ease-in-out transform hover:scale-110">
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
