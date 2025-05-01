
import gsap from "gsap";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import backgroundImage from "../assets/pressure-woman.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const ContactSection = () => {
  const [phone, setPhone] = useState("+233");
  const [submitted, setSubmitted] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const recaptchaRef = useRef(null);
  const formRef = useRef(null);
  const firstNameInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!recaptchaValue) {
      setError("Please verify you're not a robot.");
      gsap.to(window, {
        scrollTo: {
          y: formRef.current,
          offsetY: 50,
        },
        duration: 1,
        ease: "power3.inOut",
      });
      return;
    }

    const form = e.target;
    const formData = new FormData(form);
    const formSpreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      const response = await fetch(formSpreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        setPhone("+233");
        setRecaptchaValue(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
        gsap.to(window, {
          scrollTo: {
            y: formRef.current,
            offsetY: 50,
          },
          duration: 1,
          ease: "power3.inOut",
        });
        setTimeout(() => setSubmitted(false), 5000); // Auto-dismiss after 5 seconds
      } else {
        const errorData = await response.json();
        setError(`Failed to send message: ${errorData.error || "Unknown error"}`);
      }
    } catch (err) {
      setError(`An error occurred: ${err.message}`);
    }

    gsap.to(window, {
      scrollTo: {
        y: formRef.current,
        offsetY: 50,
      },
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const handleClickOutside = (e) => {
    const successBox = document.getElementById("success-modal");
    if (successBox && !successBox.contains(e.target)) {
      setSubmitted(false);
    }
  };

  useEffect(() => {
    if (submitted) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [submitted]);

  useEffect(() => {
    gsap.fromTo(
      ".contact-title, .contact-subtitle, .contact-button",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

  return (
    <section
      id="contact-section"
      className="contact-section relative py-20 px-6 md:px-20 text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#1d1d1d]/50 z-0" />

      <div className="z-10 relative grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="space-y-6">
          <h2 className="contact-title text-4xl md:text-5xl font-extrabold leading-tight">
            Feeling the pressure?
          </h2>
          <p className="contact-subtitle text-white text-lg">
            We understand the struggle and we’re here to help lighten your load.
          </p>
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold">Let’s work together</h3>
            <p className="text-lg text-white">
              Your vision deserves exceptional support. Share your goals,
              challenges, or ideas below and let’s create something amazing
              together. We’re excited to hear from you!
            </p>
          </div>
        </div>

        <div className="flex justify-center" ref={formRef}>
          {submitted ? (
            <div
              id="success-modal"
              className="relative text-white bg-green-600 p-6 rounded-lg shadow-lg text-center space-y-2"
            >
              <button
                onClick={() => setSubmitted(false)}
                className="absolute top-2 right-3 text-white text-xl font-bold hover:text-gray-200 focus:outline-none"
              >
                ×
              </button>
              <h3 className="text-xl font-semibold"> 🤝 Thank You for Contacting Kwabak!</h3>
              <p className="text-sm">
                The response to your message will be sent to the email address you’ve indicated within 24 hours.
              </p>
              <p className="text-sm">
                Have a wonderful day! We look forward to being part of your success story!
              </p>
            </div>
          ) : (
            <form
              className="w-full max-w-md bg-white/20 backdrop-blur-xl p-8 rounded-xl shadow-lg space-y-6 border border-white/30"
              onSubmit={handleSubmit}
            >
              {error && (
                <div className="text-white bg-red-600 p-3 rounded-lg text-sm">
                  {error}
                </div>
              )}
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-1/2 p-3 rounded-lg border border-[#DBAE8D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
                  required
                  ref={firstNameInputRef}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-1/2 p-3 rounded-lg border border-[#DBAE8D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
                  required
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                className="w-full p-3 rounded-lg border border-[#DBAE8D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
                required
              />

              <input type="hidden" name="phone" value={phone} />
              <PhoneInput
                country={"gh"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: "100%",
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #DBAE8D",
                  backgroundColor: "transparent",
                  color: "white",
                  fontSize: "1rem",
                  paddingLeft: "3rem",
                  fontFamily: "Quicksand, sans-serif",
                }}
                buttonStyle={{
                  backgroundColor: "transparent",
                  border: "1px solid #DBAE8D",
                }}
              />

              <textarea
                name="message"
                placeholder="Your message..."
                rows={4}
                className="w-full p-3 rounded-lg border border-[#DBAE8D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
                required
              ></textarea>

              <ReCAPTCHA
                sitekey={siteKey}
                onChange={(value) => setRecaptchaValue(value)}
                ref={recaptchaRef}
              />

              <button
                type="submit"
                className="w-full bg-[#E86C4F] hover:bg-[#d8563f] text-white py-3 px-6 rounded-full font-medium shadow-lg transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
