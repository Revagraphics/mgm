// src/components/Home.jsx
import { useState } from "react";
import heroimg from "../assets/hero3.png";
import aboutImg from "../assets/about.png";

import pmjay from "../assets/pm-jay.png";
import capf from "../assets/image.png";
import cghs from "../assets/cghs.png";
import insurance from "../assets/cghs.png";

import WhyChooseUs from "../components/WhyChooseUs";
import Facility from "../components/Facility";
import Mammography from "../components/Mammography";
import Doctors from "./Doctors";
import ServiceSection from "../components/ServiceSection";
import Reviewcard from "../components/ReviewCard";
import Seo from "../components/Seo";

import AboutUs from "../components/AboutUs";

import {
  FaArrowRight,
  FaHospital,
  FaShieldAlt,
  FaUserShield,
  FaHeartbeat,
} from "react-icons/fa";

const insuranceData = [
  {
    title: "Ayushman Bharat - PM-JAY",
    desc: "Cashless treatment under Ayushman Bharat Scheme.",
    image: pmjay,
    icon: <FaHeartbeat />,
  },
  {
    title: "CAPF Healthcare",
    desc: "Dedicated healthcare services for CAPF beneficiaries.",
    image: capf,
    icon: <FaShieldAlt />,
  },
  {
    title: "CGHS Empanelled",
    desc: "Approved hospital for CGHS patients.",
    image: cghs,
    icon: <FaHospital />,
  },
  // {
  //   title: "Insurance & TPA",
  //   desc: "Corporate, TPA & Insurance Partners.",
  //   image: insurance,
  //   icon: <FaUserShield />,
  // },
];

const FORM_ENDPOINT = "https://formsubmit.co/ajax/mgmhospital0612patna@gmail.com";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    department: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

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
        throw new Error("Unable to send your appointment request right now.");
      }

      setFormData({
        name: "",
        phone: "",
        department: "",
      });
      setSubmitStatus({
        type: "success",
        message: "Thank you! Your appointment request has been received.",
      });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.message || "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* seo-optamization */}
      <Seo
        title="Home | MGM Hospital"
        description="High-quality healthcare services for over 50,000+ patients with compassion and excellence."
      />
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative mt-14 min-h-screen flex flex-col overflow-hidden pt-14">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroimg}
            alt="MGM Hospital Building"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d3b6b]/80 via-[#0d3b6b]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>
        </div>

        <div className="relative z-10 flex-1 flex items-center justify-center max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full items-center">
            {/* Left Content */}
            <div className="text-white space-y-8 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#e63939] text-3xl font-bold">✚</span>

                </div>
                <div>
                  <p className="text-sm font-semibold tracking-widest">MGM HOSPITAL &amp; RESEARCH CENTRE</p>
                </div>
              </div>

              <div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-none tracking-tight">
                  Trusted Care.<br />
                  <span className="text-white">Healthier Tomorrow.</span>
                </h1>
              </div>

              <p className="max-w-2xl text-lg sm:text-xl text-white/90 mx-auto lg:mx-0">
                MGM Hospital &amp; Research Centre is committed to providing world-class healthcare with compassion, innovation and excellence.
              </p>

              
            </div>

            {/* Right Side - Appointment Form */}
            <div id="appointment-form" className="flex justify-center lg:justify-end">
              <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900">
                    Book an <span className="text-[#e63939]">Appointment</span>
                  </h2>
                  <p className="text-gray-600 mt-2">Providing expert care to over 50,000 patients with compassion and excellence.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#e63939] focus:ring-1 focus:ring-[#e63939] transition-all text-gray-900"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#e63939] focus:ring-1 focus:ring-[#e63939] transition-all text-gray-900"
                      required
                    />
                  </div>

                

                  

                  <div>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:border-[#e63939] focus:ring-1 focus:ring-[#e63939] transition-all text-gray-900 bg-white"
                      required
                    >
                      <option value="">Specialization</option>
                      <option value="obstetrics-gynecology">Obstetrics &amp; Gynecology</option>
                      <option value="pediatric-neonatology">Pediatric &amp; Neonatology</option>
                      <option value="general-medicine">General Medicine</option>
                      <option value="cardiology">General &amp; Laparoscopic Surgery</option>
                      <option value="physiotherapy">Physiotherapy</option>
                      <option value="dietetics">Dietetics (Dietitian)</option>  
                    </select>
                  </div>

                 

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e63939] hover:bg-[#c1121f] transition-all text-white font-semibold py-4 rounded-2xl text-lg shadow-lg mt-3 disabled:opacity-70"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                  </button>

                  {submitStatus.message && (
                    <p
                      className={`text-center text-sm font-medium ${
                        submitStatus.type === "error" ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {submitStatus.message}
                    </p>
                  )}

                  <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-2">
                    <span className="text-green-600">🔒</span>
                    Your information is safe with us.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </section>

      {/* insurance section */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-pink-600 font-semibold uppercase tracking-[0.25em] text-sm">
              Insurance Support
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-bold text-gray-900">
              Insurance & TPA
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-8">
              Cashless treatment facility under Ayushman Bharat, CGHS <br /> and
              other leading insurance providers for stress-free healthcare.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {insuranceData.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl border border-pink-200 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-28 h-28 object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#c2185b] text-white flex items-center justify-center text-xl mb-5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7 text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg bg-[#c2185b] hover:shadow-xl hover:scale-105 transition-all duration-300">
              <a
                href="https://www.mgmhospitalpatna.com/corporate-partners.php"
                target="_blank"
                rel="noopener noreferrer"
              >
                Know More About Insurance & TPA
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SECTION ==================== */}
      <AboutUs />

      <WhyChooseUs />

      <Doctors />
      <Facility />
      <Mammography />
      <ServiceSection />
      <Reviewcard />
    </>
  );
};

export default Home;