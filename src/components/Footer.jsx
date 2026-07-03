// src/components/Footer.jsx
import { useState } from "react";
import { 
  FaMapMarkerAlt,
  FaPhone, 
  FaFacebook,
  FaInstagram, 
} from 'react-icons/fa';

import bottomLogo from "../assets/logo.png";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    specialization: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Footer Form Data:", formData);
      alert("Thank you! Your message has been sent successfully. We will contact you soon.");
      
      setFormData({ name: "", mobile: "", specialization: "", message: "" });
      setIsSubmitting(false);
    }, 800);
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
                  <li><a href="#" className="hover:text-[#e91e63] transition-colors">→ Home</a></li>
                  <li><a href="#" className="hover:text-[#e91e63] transition-colors">→ About Us</a></li>
                  <li><a href="#" className="hover:text-[#e91e63] transition-colors">→ Our Doctors</a></li>
                  <li><a href="#" className="hover:text-[#e91e63] transition-colors">→ Services</a></li>
                  <li><a href="#" className="hover:text-[#e91e63] transition-colors">→ Departments</a></li>
                  <li><a href="#" className="hover:text-[#e91e63] transition-colors">→ Contact Us</a></li>
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
                <a href="https://www.instagram.com/mgmhospitalpatna/" target="_blank" className="hover:text-[#e91e63] transition-colors">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-1/2 bg-[#0095d5] p-10 lg:p-16 flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
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
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-white resize-none"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white hover:bg-gray-100 transition-colors text-[#0095d5] font-semibold py-4 rounded-2xl text-lg disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "SUBMIT"}
              </button>
            </form>
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