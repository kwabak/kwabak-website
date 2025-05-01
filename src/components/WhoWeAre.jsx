import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X } from "lucide-react";
import React, { useEffect, useState } from "react";
import backgroundImage from "../assets/greet.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WhoWeAre = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      className="relative w-full py-28 px-6 md:px-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1d1d1d]/60  z-0" />

      <div className="relative z-10 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="fade-in space-y-12 text-center"
        >
          {/* Main Header */}
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Who We Are
          </h2>

          {/* Paragraphs */}
          <div className="flex flex-col items-center space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="leading-8 text-white max-w-3xl text-lg"
            >
              We're a team of digital innovators and strategic advisors passionate about transforming African SMEs.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="leading-8 text-white max-w-3xl text-lg"
            >
              What drives us are the unique challenges facing small and medium businesses across the continent – spreadsheets stretched beyond recognition for inventory management, screenshots serving as official receipts, and minimal customer data collection preventing informed decision-making. While these solutions showcase remarkable resourcefulness, they ultimately limit growth and scalability – silently draining businesses of millions in potential revenue, market reach, and competitive advantage every day.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="leading-8 text-white max-w-3xl text-lg"
            >
              Our deep understanding of local business environments combined with global technical expertise allows us to create practical, scalable systems that transform these limitations into advantages. The impact is immediate and measurable: increased efficiency, reduced costs, and accelerated growth.
            </motion.p>

            {/* See More Button */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="mt-8 px-6 py-3 bg-[#E86C4F] hover:bg-[#d15a3f] text-white rounded-full text-lg font-semibold transition duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More  <span className="text-xl">→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 flex space-x-2 opacity-30">
        <div className="w-4 h-4 bg-[#E86C4F] rounded-full"></div>
        <div className="w-4 h-4 bg-[#027A76] rounded-full"></div>
        <div className="w-4 h-4 bg-[#fff] rounded-full"></div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-2xl p-8 max-w-2xl mx-4 text-gray-800 relative max-h-[70vh] overflow-y-auto focus:outline-none"
            // Custom scrollbar styles
            style={{
              scrollbarWidth: "thin", // Firefox
              scrollbarColor: "#E86C4F #DBAE8D", // Firefox
            }}
          >
            <style>
              {`
                /* WebKit (Chrome, Edge, Safari) */
                .custom-scrollbar::-webkit-scrollbar {
                  width: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                  background: transparent;
                  border-left: 1px solid #DBAE8D;
                  border-radius: 5px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                  background: #E86C4F;
                  border-radius: 5px;
                  border: 2px solid transparent;
                  background-clip: padding-box;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                  background: #027A76;
                  border: 2px solid transparent;
                  background-clip: padding-box;
                }
              `}
            </style>
            <div className="custom-scrollbar">
              <h3 className="text-3xl font-bold mb-6 text-center text-[#1d1d1d]"> About Us</h3>
              <p className="text-base leading-7 mb-6">
                At Kwabak, we're serious about success but never at the expense of enjoying the journey. Our remote-first setup gives us something special: freedom. Freedom to recruit exceptional talent regardless of borders, to work when we're at our best, and to create solutions from diverse perspectives. 
                We champion simplicity in everything we do. For our clients, this means practical solutions to complex problems without unnecessary complications. Internally, it guides how we communicate, collaborate, and solve problems as a team.
              </p>
              <p className="text-base leading-7 mb-6">
                Feedback drives our growth. We actively seek input from clients to refine our solutions and ensure they deliver real impact. Within our team, we've created a culture where constructive feedback flows freely, helping us continuously improve and innovate.
              </p>
              <p className="text-base leading-7 mb-6">
                We believe that small victories fuel big transformations. We don't wait for yearly reviews to acknowledge progress—we celebrate breakthroughs as they happen, creating momentum that drives our mission forward.
              </p>
              <p className="text-base leading-7">
                This philosophy extends beyond our team to the impact we create every day. We're in the business of transformation. Every spreadsheet we replace, every process we streamline, every insight we uncover—it all compounds. For our clients, it means growth. For communities, it means opportunity. For Africa, it means progress.
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E86C4F] rounded-full p-1"
            >
              <X size={24} />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default WhoWeAre;