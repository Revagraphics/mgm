// src/components/Home.jsx
import { useState } from "react";
import heroimg from "../assets/hero2.png";
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
      <section className="relative min-h-[calc(100vh-80px)] top-14 overflow-hidden bg-gradient-to-br from-[#0d3b6b] via-[#1f5aa4] to-[#0d3b6b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_36%)]" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px]" />

        <div className="absolute left-0 top-0 bottom-0 hidden w-1/2 lg:block">
          <img
            src={heroimg}
            alt="MGM Hospital"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#092847]/90 via-[#092847]/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-[90vw] items-center px-6 py-20 lg:px-8">
          <div className="grid w-full items-center gap-12 lg:grid-cols-2">
            <div className="mt-10 max-w-2xl space-y-8 text-[#fff] lg:pl-4 lg:mt-16">
              <div className="inline-flex rounded-full border border-[#fff]/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-[#fff] shadow-sm">
                40+ Years of Trusted Healthcare Excellence
              </div>

              <div className="rounded-[2rem] border border-[#fff]/40 p-6 shadow-[0_20px_70px_rgba(13,59,107,0.09)] md:p-8">
                <h1 className="text-4xl font-bold leading-[1.05] text-[#fff] sm:text-5xl lg:text-6xl">
                  MGM Hospital &amp;
                  <span className="mt-2 block">Research Centre</span>
                </h1>
                <p className="mt-5 max-w-xl text-lg text-zinc-100">
                  Providing expert care to over 50,000+ patients with compassion and excellence.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:ml-auto">
              <div className="rounded-[2rem] border border-[#0d3b6b]/10 bg-white/95 p-7 shadow-[0_20px_70px_rgba(13,59,107,0.12)]">
                <div className="mb-8 text-center">
                  <div className="text-3xl font-bold text-[#c2185b]">Book Appointment</div>
                  <p className="mt-3 text-gray-600">
                    Providing expert care to over 50,000+ patients with compassion and excellence.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full rounded-2xl border border-gray-200 px-6 py-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#c2185b]"
                    required
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="Mobile Number"
                    className="w-full rounded-2xl border border-gray-200 px-6 py-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#c2185b]"
                    required
                  />

                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-gray-200 px-6 py-4 text-gray-900 outline-none focus:ring-2 focus:ring-[#c2185b]"
                    required
                  >
                    <option value="">Specialization</option>
                    <option value="obstetrics-gynecology">Obstetrics and Gynecology</option>
                    <option value="pediatric-neonatology">Pediatric and Neonatology</option>
                    <option value="general-medicine">General Medicine</option>
                  </select>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-4 w-full rounded-2xl bg-[#c2185b] py-4 text-lg font-semibold text-white transition-all hover:bg-[#a0154a] disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "SUBMIT"}
                  </button>

                  {submitStatus.message && (
                    <p className={`mt-3 text-center text-sm ${submitStatus.type === "error" ? "text-red-600" : "text-green-600"}`}>
                      {submitStatus.message}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
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
