// src/components/Footer.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa';

import bottomLogo from "../assets/logo.png";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/mgmhospital0612patna@gmail.com";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    specialization: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: ""});

    const payload = {
      name: formData.name,
      mobile: formData.mobile,
      specialization: formData.specialization,
    };

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Unable to send message right now.");
      }

      setFormData({ name: "", mobile: "", specialization: "" });
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
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

  return (
    <footer className="bg-[#eefaff] text-gray-800 w-full">
      <div className="max-w-[90vw] mx-auto">
        <div className="flex flex-col lg:flex-row min-h-[520px]">
          
          {/* Left Section: Branding & Info */}
          <div className="lg:w-1/2 bg-[#eefaff] p-10 lg:p-16 flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <img 
                  src={bottomLogo} 
                  alt="MGM Hospital" 
                  className="h-20 w-auto mb-6" 
                />
                <h2 className="text-3xl font-bold leading-tight text-[#1e3a8a]">
                  MGM Hospital &amp; Research Centre<br />
                  Private Limited
                </h2>
              </div>

              {/* Contact Details */}
              <div className="space-y-6 text-lg mb-10">
                <div className="flex gap-4">
                  <FaMapMarkerAlt className="text-[#e91e63] mt-1 text-2xl flex-shrink-0" />
                  <p>
                    Jagat Narayan Road, Kadamkuan,<br />
                    Patna - 800003, Bihar
                  </p>
                </div>
                <div className="flex gap-4">
                  <FaPhone className="text-[#e91e63] mt-1 text-2xl flex-shrink-0" />
                  <div>
                    <p>+91 81022 26550</p>
                    <p>62999 23163</p>
                    <p>0612-2681551</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mb-10">
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-gray-300 pb-2 max-w-[150px]">
                  Quick Links
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-base font-medium">
                  <li><Link to="/" className="hover:text-[#e91e63] transition-colors">→ Home</Link></li>
                  <li><Link to="/about" className="hover:text-[#e91e63] transition-colors">→ About Us</Link></li>
                  <li><Link to="/doctors" className="hover:text-[#e91e63] transition-colors">→ Our Doctors</Link></li>
                  <li><Link to="/service" className="hover:text-[#e91e63] transition-colors">→ Services</Link></li>
                  <li><Link to="/contact" className="hover:text-[#e91e63] transition-colors">→ Contact Us</Link></li>
                </ul>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#1e3a8a]">Follow Us</h3>
              <div className="flex gap-6 text-3xl">
                <a href="https://www.facebook.com/mgmhospitalpatna" target="_blank" className="hover:text-[#e91e63] transition-colors">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/mgmresearchcentre?igsh=czZlbGlwY21tMWtt" target="_blank" className="hover:text-[#e91e63] transition-colors">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/mgm-hospital-research-centre-pvt-ltd/" target="_blank" className="hover:text-[#e91e63] transition-colors">
                  <FaLinkedin />
                </a>
                <a href="https://www.youtube.com/@MGMHopitalResearchCentrepvtltd" target="_blank" className="hover:text-[#e91e63] transition-colors">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-1/2  p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-white">
            <div className="rounded-[28px] border bg-[#0095d5]  backdrop-blur-sm p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.18)]">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />

                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
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
                  className="w-full bg-white hover:bg-gray-100 transition-colors text-[#0095d5] font-semibold py-4 rounded-2xl text-lg disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "SUBMIT"}
                </button>

                {submitStatus.message ? (
                  <p className={`text-sm ${submitStatus.type === "error" ? "text-red-100" : "text-green-100"}`}>
                    {submitStatus.message}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#1a244f] py-6 text-center text-sm text-gray-400">
        All Rights Reserved © {new Date().getFullYear()} MGM Hospital &amp; Research Centre Private Limited
      </div>
    </footer>
  );
}