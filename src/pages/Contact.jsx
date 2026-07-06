// src/components/Contact.jsx
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Seo from "../components/Seo";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/mgmhospital0612patna@gmail.com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    specialization: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "" });

  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "" });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to send your message right now.");
      }

      setFormData({ name: "", mobile: "", specialization: "" });
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been received. We will contact you soon.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // GSAP Animations
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    tl.fromTo(formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.5"
    );
  }, []);

  return (
    <>
      <Seo
        title="Contact Us | MGM Hospital"
        description="Get in touch with MGM Hospital & Research Centre for appointments, inquiries, or any assistance. Our team is here to help you."
      />

  
    <section ref={sectionRef} className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-[90vw] mx-auto px-6">
        <div className="grid mt-4 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold text-[#1e3a8a] leading-tight mb-6">
                Get In Touch With Us
              </h1>
              <p className="text-xl text-gray-600">
                Have questions or want to book an appointment? 
                Our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold">Visit Us</h4>
                  <p className="text-gray-600">Jagat Narayan Lal Rd, East Lohanipur, Kadamkuan, Patna, Bihar 800003</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">📞</div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-gray-600">081022 26550</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl">⏰</div>
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-gray-600">Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div ref={formRef} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#1e3a8a] mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
                required
              />

              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
                required
              />

              <select
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-2xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
                required
              >
                <option value="">Select Specialization</option>
                <option value="obstetrics-gynecology">Obstetrics and Gynecology</option>
                <option value="pediatric-neonatology">Pediatric and Neonatology</option>
                <option value="general-medicine">General Medicine</option>
                <option value="cardiology">General &amp; Laparoscopic Surgery</option>
                <option value="physiotherapy">Physiotherapy</option>
                <option value="dietetics">Dietetics (Dietitian)</option> 
                
              </select>


              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1e3a8a] hover:bg-blue-700 transition-all text-white font-semibold py-4 rounded-2xl text-lg mt-6 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "SUBMIT"}
              </button>

              {submitStatus.message ? (
                <p className={`text-sm ${submitStatus.type === "error" ? "text-red-600" : "text-green-600"}`}>
                  {submitStatus.message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Contact;