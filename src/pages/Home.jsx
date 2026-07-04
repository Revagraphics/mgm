// src/components/Home.jsx
import { useState } from "react";
import heroimg from "../assets/hero.png";
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

const FORM_ENDPOINT = "https://formsubmit.co/ajax/sourabhnegi557@email.com";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    specialization: "",
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

      setFormData({ name: "", mobile: "", specialization: "" });
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
      <div
        className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/20" />

        <div className="relative z-10 max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-0 w-full">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[90vh] md:min-h-screen">
            {/* Left Content */}
            <div className="text-white space-y-6 md:space-y-8 pt-12 md:pt-0">
              <div className="inline-block border border-white/40 sm:max-w-2xl  text-white px-4 py-2.5 rounded-full font-semibold text-[12px] shadow-lg">
                40+ Years of Trusted Healthcare Excellence.
              </div>

              <div className="max-w-xl border border-white/80 rounded-[1.5rem] p-4 sm:p-6 md:p-7">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white whitespace-normal">
                  MGM Hospital &amp;
                  <span className="block mt-2">Research Centre</span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                Providing expert care to over 50,000+ patients with compassion
                and excellence.
              </p>
            </div>

            {/* Right Side - Appointment Form */}
            <div className="md:justify-self-end w-full max-w-md mx-auto md:mx-0">
              <div className="bg-[#c2185b] rounded-3xl p-6 sm:p-8 shadow-2xl">
                <div className="text-white text-3xl font-bold mb-2">
                  Book Appointment
                </div>
                <p className="text-purple-100 mb-8 text-sm sm:text-base">
                  Over 40 Years of Trusted Healthcare Excellence. <br />
                  Providing expert care to over 50,000+ patients with compassion
                  and excellence.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-5 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
                    required
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full px-5 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
                    required
                  />

                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-purple-300 text-gray-900"
                    required
                  >
                    <option value="obstetrics-gynecology">
                      Specialization
                    </option>
                    <option value="obstetrics-gynecology">
                      Obstetrics and Gynecology
                    </option>
                    <option value="pediatric-neonatology">
                      Pediatric and Neonatology
                    </option>
                    <option value="general-medicine">General Medicine</option>
                  </select>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#fff] transition-colors text-gray-800 font-semibold py-4 rounded-2xl text-lg mt-4 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "SUBMIT"}
                  </button>

                  {submitStatus.message ? (
                    <p
                      className={`text-sm mt-2 ${submitStatus.type === "error" ? "text-red-100" : "text-green-100"}`}
                    >
                      {submitStatus.message}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />
      </div>

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
