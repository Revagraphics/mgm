// src/components/WhyChooseUs.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { 
  FaBedPulse, 
  FaBabyCarriage, 
  FaUserDoctor, 
  FaClipboardCheck, 
  FaMicroscope, 
  FaRobot 
} from "react-icons/fa6";


const features = [
  {
    icon: <FaBedPulse />,
    title: "Specialised Labor and Delivery Rooms",
    // subtitle: "in Bihar",
  },
  {
    icon: <FaBabyCarriage />,
    title: "NICU & PICU",
  },
  {
    icon: <FaRobot />,
    title: "Highly Trained Gynecologists , Nurses And Lab Technicians",
  },
  {
    icon: <FaMicroscope />,
    title: " Diagnostic Services ",
  },
  {
    icon: <FaUserDoctor />,
    title: "Most Advanced Laboratories ",
    // subtitle: "UNDER ABLE LEADERSHIP OF MANJU GITA MISHRA",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Latest Surgical Machines",
  },
//   {
//     icon: <FaAmbulance />,
//     title: "Around the clock Ambulance Service",
//   },
//   {
//     icon: <FaPills />,
//     title: "100% AUTHENTIC MEDICINES",
//   },
];

const Facility = () => {
  const cardRefs = useRef([]);

  useEffect(() => {
    // GSAP Hover Animation Setup
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const tl = gsap.timeline({ paused: true });

      tl.to(card, {
        scale: 1.08,
        y: -10,
        duration: 0.4,
        ease: "power2.out",
      });

      // Icon animation
      const icon = card.querySelector('.feature-icon');
      if (icon) {
        tl.to(icon, {
          rotation: 12,
          scale: 1.2,
          duration: 0.3,
        }, 0);
      }

      card.addEventListener('mouseenter', () => tl.play());
      card.addEventListener('mouseleave', () => tl.reverse());
    });
  }, []);

  return (
    <section className="py-16 md:py-20 bg-[#eefaff] text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.14),_transparent_40%)]" />

      <div className="relative z-10 max-w-[92vw] mx-auto px-3 sm:px-6">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-[#1e3a8a]">
            Our Facilities
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
            Modern infrastructure and advanced care designed for comfort, safety, and precision.
          </p>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-white border border-[#dbeafe] rounded-3xl p-5 sm:p-7 text-center flex flex-col items-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] hover:shadow-[0_18px_45px_rgba(37,99,235,0.16)] hover:border-[#93c5fd] transition-all duration-300"
            >
              <div className="feature-icon flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#dbeafe] to-[#f5f3ff] text-[#2563eb] text-3xl sm:text-4xl mb-4 sm:mb-5 transition-transform duration-300">
                {feature.icon}
              </div>

              <h3 className="text-base sm:text-lg font-semibold leading-snug text-gray-900">
                {feature.title}
              </h3>

              {feature.subtitle && (
                <p className="text-purple-500 text-sm mt-2">
                  {feature.subtitle}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;