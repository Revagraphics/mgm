// src/components/WhyChooseUs.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import wcuBg from '../assets/cghs.png'; // Optional background if needed

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
    <section className="py-20 bg-[#eefaff] text-gray-800 relative overflow-hidden">

      <div className="relative z-10 max-w-[90vw] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
           Our Facilities
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-colors duration-300 flex flex-col items-center"
            >
              <div className="feature-icon text-6xl mb-6 transition-transform duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 leading-tight">
                {feature.title}
              </h3>
              
              {feature.subtitle && (
                <p className="text-purple-300 text-sm mt-1">
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