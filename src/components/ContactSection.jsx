import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import backgroundImage from "../assets/pressure-woman.jpg";
import ReCAPTCHA from "react-google-recaptcha";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

const ContactSection = () => {
  const [phone, setPhone] = useState("+233");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const recaptchaRef = useRef(null);
  const fileInputRef = useRef(null);
  const formRef = useRef(null);
  const firstNameInputRef = useRef(null); // Ref for the first input

  // Dynamically load SMTP.js
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!recaptchaValue) {
      setError("Please verify you're not a robot.");
      // scroll to error
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
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");
    const file = selectedFile;

    // Validate file size (max 10MB) and presence
    if (file && file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit.");
      // scroll to error
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
    if (file && (!file.name || file.size === 0)) {
      setError("Invalid file selected. Please choose a valid file.");
      // scroll to error
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

    setLoading(true);

    try {
      // Convert file to base64 if present
      let attachment = null;
      if (file && file.name) {
        attachment = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result.split(",")[1];
            if (!base64) {
              reject(new Error("Failed to convert file to base64."));
            }
            resolve({
              name: file.name,
              data: base64,
            });
          };
          reader.onerror = () => reject(new Error("Error reading file."));
          reader.readAsDataURL(file);
        });
        console.log("Attachment prepared:", attachment);
      }

      // Prepare email body with professional HTML
      const emailBody = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            h2 { color: #E86C4F; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New Contact Form Submission</h2>
            <p><span class="label">First Name:</span> ${firstName}</p>
            <p><span class="label">Last Name:</span> ${lastName}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Phone:</span> ${phone}</p>
            <p><span class="label">Message:</span> ${message}</p>
          </div>
        </body>
        </html>
      `;

      // Send email using SMTP.js
      const emailConfig = {
        Host: "smtp.elasticemail.com",
        Username: "dansoderrick80@gmail.com",
        Password: "19D6B0EC97B8B276B9A8B7739A180F599C87",
        Port: 2525,
        To: "dansoderrick80@gmail.com",
        From: "dansoderrick80@gmail.com",
        ReplyTo: email,
        Subject: "New Contact Form Submission",
        Body: emailBody,
      };

      if (attachment) {
        emailConfig.Attachments = [attachment];
      }

      console.log("Email config (without Password):", {
        ...emailConfig,
        Password: "[REDACTED]",
      });
      const result = await window.Email.send(emailConfig);
      console.log("Email result:", result);

      if (result === "OK") {
        setSubmitted(true);
        form.reset();
        setPhone("+233");
        setRecaptchaValue(null);
        setSelectedFile(null);
        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setError(`Failed to send email. Server response: ${result}`);
        // scroll to error
      gsap.to(window, {
        scrollTo: {
          y: formRef.current,
          offsetY: 50,
        },
        duration: 1,
        ease: "power3.inOut",
      });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(`An error occurred while sending the email: ${err.message}`);
      // scroll to error
      gsap.to(window, {
        scrollTo: {
          y: formRef.current,
          offsetY: 50,
        },
        duration: 1,
        ease: "power3.inOut",
      });
    }

    setLoading(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file || null);
    console.log("File selected:", file);
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle "Share Your Thoughts" button click
  const handleShareThoughts = () => {
    if (formRef.current) {
      // Scroll to the form
      gsap.to(window, {
        scrollTo: {
          y: formRef.current,
          offsetY: 50,
        },
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
          // Focus the first input after scrolling
          if (firstNameInputRef.current) {
            firstNameInputRef.current.focus();
          }
        },
      });

      // Animate the form to draw focus
      gsap.to(formRef.current, {
        scale: 1.02,
        boxShadow: "0 0 20px rgba(232, 108, 79, 0.8)",
        duration: 0.5,
        ease: "power3.out",
        repeat: 1,
        yoyo: true,
      });
    }
  };

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

  const siteKey = "6LeLdyMrAAAAAGUAFSa8qwKSUzdZCvY726vkVdLT";

  return (
    <section
      className="contact-section relative py-20 px-6 md:px-20 text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-[#1d1d1d]/50 z-0" />

      <div className="max-w-7xl mx-auto z-10 relative grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
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
          <button
            onClick={handleShareThoughts}
            className="contact-button inline-block mt-6 px-6 py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium rounded-full shadow-lg transition duration-300 transform hover:scale-105 cursor-pointer"
          >
            Share Your Thoughts
          </button>
        </div>

        {/* Form */}
        <div className="flex justify-center" ref={formRef}>
          {submitted ? (
            <div className="text-white bg-green-600 p-4 rounded-lg shadow-lg">
              🎉 Thank you! Your message has been sent.
            </div>
          ) : (
            <form
              className="w-full max-w-md bg-white/20 backdrop-blur-xl p-8 rounded-xl shadow-lg space-y-6 border border-white/30"
              method="POST"
              encType="multipart/form-data"
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
                  ref={firstNameInputRef} // Added ref to the first input
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

              <div>
                <style>
                  {`
                    .react-tel-input .country-list .country:hover {
                      background-color: rgba(255, 255, 255, 0.3);
                      backdrop-filter: blur(8px);
                    }
                    .react-tel-input .country-list .country .dial-code {
                      color: white;
                    }
                    .react-tel-input .country-list .country.highlight {
                      background-color: rgba(255, 255, 255, 0.25);
                      backdrop-filter: blur(8px);
                    }
                  `}
                </style>
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
                    borderRight: "none",
                    borderRadius: "0.5rem 0 0 0.5rem",
                    padding: "0.75rem",
                    cursor: "pointer",
                  }}
                  dropdownStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(10px)",
                    color: "white",
                    borderRadius: "0.5rem",
                    border: "1px solid #DBAE8D",
                  }}
                  containerStyle={{
                    width: "100%",
                  }}
                  inputClass="focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
                  placeholder="Phone number"
                  inputProps={{
                    required: true,
                    className:
                      "placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E86C4F]",
                  }}
                />
              </div>

              <textarea
                name="message"
                placeholder="Message..."
                className="w-full p-3 rounded-lg border border-[#DBAE8D] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#E86C4F]"
                rows="5"
                required
              />

              <div>
                <label className="block text-white text-sm mb-2">Attach file (optional)</label>
                <div className="flex gap-1 items-center">
                  <div className="flex items-center space-x-4">
                    <button
                      type="button"
                      onClick={triggerFileInput}
                      className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-xl border border-[#DBAE8D] text-white rounded-lg hover:bg-[#E86C4F] hover:border-[#E86C4F] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E86C4F] transition duration-300"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828l6.586-6.586a4 4 0 00-5.656-5.656l-6.586 6.586a6 6 0 008.485 8.485l6.586-6.586"
                        />
                      </svg>
                      Attach File
                    </button>
                    <input
                      type="file"
                      name="attachment"
                      accept=".png,.jpg,.jpeg,.pdf,.doc,.docx"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                  {selectedFile && (
                    <div className="flex items-center bg-white/10 backdrop-blur-md p-2 rounded-lg border border-[#DBAE8D]">
                      <span className="text-white text-sm truncate flex-1">{selectedFile.name}</span>
                      <button
                        type="button"
                        onClick={removeFile}
                        className="ml-2 p-1 text-white hover:text-[#E86C4F] focus:outline-none cursor-pointer"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-sm text-white/60 mt-1">Supported formats: JPG, PNG, PDF, DOC, DOCX (max 10MB)</p>
              </div>

              <div className="flex justify-center">
                {siteKey ? (
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={siteKey}
                    onChange={(value) => setRecaptchaValue(value)}
                    onErrored={() => setError("reCAPTCHA failed to load. Please try again.")}
                  />
                ) : (
                  <div className="text-white bg-red-600 p-3 rounded-lg text-sm">
                    reCAPTCHA configuration error. Please contact support.
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 bg-[#E86C4F] hover:bg-[#d8563f] text-white font-medium rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E86C4F]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#027A76]/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default ContactSection;