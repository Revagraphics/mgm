import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaMicroscope, 
  FaStethoscope, 
  FaKitMedical, 
  FaHeartPulse, 
  FaAppleWhole, 
 FaMeteor, 
  FaBaby,
  FaChildReaching
} from 'react-icons/fa6';

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
  {
    title: "Diagnostic Services",
    icon: <FaStethoscope />,
    items: [
      "Ultrasound 4D & Level 2",
      "ECG (Electrocardiogram)",
      "Color Doppler & X-Ray",
      "Mammography 2D & 3D"
    ]
  },
  {
    title: "Pathology Services",
    icon: <FaMicroscope />,
    items: [
      "Haematology & Biochemistry",
      "Histopathology & Cytopathology",
      "Immunology / Serology",
      "Microbiology Analysis"
    ]
  },
  {
    title: "24×7 Emergency",
    icon: <FaKitMedical />,
    items: [
      "Critical Care & Labor Room",
      "Neonatal Intensive Care (NICU)",
      "Pediatric Intensive Care (PICU)",
      "24/7 In-House Ambulance"
    ]
  },
  {
    title: "General Medicine",
    icon: <FaHeartPulse />,
    items: [
      "Comprehensive Adult Care",
      "Clinical Diagnostics",
      "Chronic Disease Management",
      "Preventive Health Care"
    ]
  },

  {
    title: "Physiotherapy",
    icon: <FaBaby />,
    items: [
     "Rehabilitation Services",
     "Pain Management",
     "Physical Therapy",
     "Personalized rehabilitation programs",
    ]
  },
  {
    title: "Diet & Nutrition",
    icon: <FaAppleWhole />,
    items: [
      // "Personalized Diet Charts",
      // "Maternal Nutrition Plans",
      // "Therapeutic Patient Diets",
      // "Infant Growth Nutrition"
    ]
  },
  {
    title: "General and Laparoscopic Surgery",
    icon: <FaMeteor />,
    items: [
      // "Advanced Laser Solutions",
      // "Minimally Invasive Care",
      // "Post-Surgical Healing",
      // "Targeted Tissue Therapy"
    ]
  },
  {
    title: "Pediatric Surgery",
    icon: <FaChildReaching />,
    items: [
      // "Neonatal Surgery Plans",
      // "Congenital Malformations",
      // "Minimally Invasive Procedures",
      // "Specialized Pediatric Care"
    ]
  },
  {
    title: "Pediatric & Neonatology",
    icon: <FaBaby />,
    items: [
      // "Newborn Care & Screenings",
      // "Immunization Programs",
      // "Developmental Tracking",
      // "Premature Infant Support"
    ]
  },
  

];

const ServiceSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Smooth cascade fade-in upon entering the screen view
      gsap.fromTo(".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-[#eefaff] text-gray-800 overflow-hidden">
      <div className="max-w-[90vw] mx-auto px-6">
        
        {/* Header Block Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-[#1a244f] uppercase tracking-wide">
            Our Specialist Services
          </h2>
          <div className="w-24 h-1 bg-[#0095d5] mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-gray-600 font-medium text-base md:text-lg max-w-xl mx-auto">
            Providing high-tier medical infrastructure and compassionate care for mother and child health.
          </p>
        </div>

        {/* Dynamic Service Grid Responsive Block */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-stretch">
            {serviceCategories.slice(0, 5).map((category, index) => (
              <div
                key={index}
                className="service-card flex flex-col justify-between bg-emerald-950/5 border border-emerald-950/10 rounded-[2.5rem] p-8 transition-all duration-300 ease-out hover:bg-white hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(26,36,79,0.08)] group cursor-pointer"
              >
                <div>
                  {/* Image-Style Top Vector Graphic / Icon Wrapper */}
                  <div className="flex justify-center mb-6 text-3xl text-emerald-800/70 group-hover:text-[#0095d5] transition-colors duration-300">
                    <div className="p-4 bg-emerald-950/5 group-hover:bg-[#eefaff] rounded-2xl transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>

                  {/* Service Category Title */}
                  <h3 className="text-xl font-bold tracking-tight text-center text-[#1a244f] mb-6 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Bullet Points List Block */}
                  <ul className="space-y-3 border-t border-gray-300/40 pt-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium leading-tight">
                        <span className="text-[#0095d5] text-xs mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch lg:max-w-4xl lg:mx-auto">
            {serviceCategories.slice(5).map((category, index) => (
              <div
                key={index + 5}
                className="service-card flex flex-col justify-between bg-emerald-950/5 border border-emerald-950/10 rounded-[2.5rem] p-8 transition-all duration-300 ease-out hover:bg-white hover:scale-[1.04] hover:shadow-[0_20px_50px_rgba(26,36,79,0.08)] group cursor-pointer"
              >
                <div>
                  {/* Image-Style Top Vector Graphic / Icon Wrapper */}
                  <div className="flex justify-center mb-6 text-3xl text-emerald-800/70 group-hover:text-[#0095d5] transition-colors duration-300">
                    <div className="p-4 bg-emerald-950/5 group-hover:bg-[#eefaff] rounded-2xl transition-colors duration-300">
                      {category.icon}
                    </div>
                  </div>

                  {/* Service Category Title */}
                  <h3 className="text-xl font-bold tracking-tight text-center text-[#1a244f] mb-6 transition-colors duration-300">
                    {category.title}
                  </h3>

                  {/* Bullet Points List Block */}
                  <ul className="space-y-3 border-t border-gray-300/40 pt-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium leading-tight">
                        <span className="text-[#0095d5] text-xs mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceSection;