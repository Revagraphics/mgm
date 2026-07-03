// src/components/WhyChooseUs.jsx
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import wcuBg from '../assets/cghs.png';

import { 
  FaPersonBreastfeeding, // Fixed casing match
  FaBabyCarriage,        
  FaAward,               
  FaHospitalUser,        
  FaUserDoctor,          
  FaClock,               
  FaTruckMedical,           // Added for the Ambulance service
  FaPills                
} from 'react-icons/fa6';

const features = [
  {
    icon: <FaPersonBreastfeeding />, // Fixed typo (lowercase 'f')
    title: "ONE OF THE BEST MOTHER AND CHILD CARE HOSPITAL IN BIHAR",
  },
  {
    icon: <FaBabyCarriage />,
    title: "50,000+ HAPPY DELIVERIES",
  },
  {
    icon: <FaAward />,
    title: "40 YEARS OF EXCELLENCE",
  },
  {
    icon: <FaHospitalUser />,
    title: "STATE OF THE ART INFRASTRUCTURE",
  },
  {
    icon: <FaUserDoctor />,
    title: "MOST EXPERIENCED TEAM OF DOCTORS UNDER ABLE LEADERSHIP OF MANJU GITA MISHRA",
  },
  {
    icon: <FaClock />,
    title: "24x7 SUPPORT",
  },
  {
    icon: <FaTruckMedical />,
    title: "AROUND THE CLOCK AMBULANCE SERVICE",
  },
  {
    icon: <FaPills />,
    title: "100% AUTHENTIC MEDICINES",
  },
];

const WhyChooseUs = () => {
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
    <section className="py-20 bg-[#1e3a8a] text-white relative overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${wcuBg})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose MGM Hospital
          </h2>
          <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

export default WhyChooseUs;