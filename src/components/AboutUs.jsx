import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaCheck, 
  FaStethoscope, 
  FaBabyCarriage, 
  FaBaby 
} from "react-icons/fa6";

// Ensure this path matches your project structural assets directory
import aboutImg from "../assets/about.png"; 

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Left-side sequential staggering entry elements
      tl.from(".animate-title", { opacity: 0, x: -40, duration: 0.7, ease: "power3.out" })
        .from(".animate-badges", { opacity: 0, scale: 0.95, duration: 0.5, ease: "power2.out" }, "-=0.4")
        .from(".animate-paragraphs p", { opacity: 0, y: 20, stagger: 0.15, duration: 0.6 }, "-=0.3")
        .from(".animate-trust-title", { opacity: 0, y: 15, duration: 0.4 }, "-=0.2")
        .from(".animate-list-item", { opacity: 0, x: -20, stagger: 0.08, duration: 0.5, ease: "power2.out" }, "-=0.2");

      // Right-side structural card wrapper reveal
      gsap.from(".animate-image-container", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 0.9,
        ease: "back.out(1.1)",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Interactive Mouse Tilt Hover Mechanics
  const handleMouseMove = (e) => {
    const card = imageWrapperRef.current;
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top; 

    const rotateX = ((y / rect.height) - 0.5) * -12; // Maximum tilt angle threshold variables
    const rotateY = ((x / rect.width) - 0.5) * 12;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      scale: 1.03,
      shadow: "0 35px 60px rgba(26,36,79,0.18)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    const card = imageWrapperRef.current;
    if (!card) return;

    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      shadow: "0 25px 50px rgba(26,36,79,0.12)",
      duration: 0.5,
      ease: "power2.out"
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="py-20 md:py-28 bg-[#eefaff] overflow-hidden select-none"
    >
      <div className="max-w-[90vw] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: Dynamic Content Layout */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Primary Main Title Header */}
            <h2 className="animate-title text-3xl sm:text-4xl md:text-5xl font-black text-[#1a244f] leading-tight tracking-tight uppercase">
              Best Women &amp; Child Care Hospital <br />
              <span className="text-[#0095d5]">In Patna, Bihar</span>
            </h2>

            {/* Micro-Badges Embedded Services Wrapper */}
            <div className="animate-badges flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-purple-200/60 shadow-xs text-purple-700 font-bold text-xs tracking-wider uppercase">
                <FaStethoscope className="text-sm text-purple-500" />
                <span>Safe Pregnancy</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-pink-200/60 shadow-xs text-pink-700 font-bold text-xs tracking-wider uppercase">
                <FaBabyCarriage className="text-sm text-pink-500" />
                <span>Normal &amp; C-Section Delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-blue-200/60 shadow-xs text-blue-700 font-bold text-xs tracking-wider uppercase">
                <FaBaby className="text-sm text-blue-500" />
                <span>Expert Pediatric Care</span>
              </div>
            </div>

            {/* Core Segment Explanatory Paragraphs */}
            <div className="animate-paragraphs space-y-5 text-[16px] md:text-[17px] text-gray-600 font-medium leading-relaxed max-w-3xl">
              <p>
                With over <strong className="text-[#1a244f] font-bold">40+ years of trusted healthcare excellence</strong> and 50,000+ successful patients treated, MGM Hospital &amp; Research Centre is the premier multi-specialty hub destination for comprehensive maternity care, state-of-the-art neonatal treatments, and specialized medical protocols.
              </p>
              <p>
                Our renowned team of gynecologists and pediatricians provide 24/7 advanced monitoring clinical workflows ensuring unparalleled security metrics within a thoroughly sterile, patient-centric environment.
              </p>
            </div>

            {/* Trust List Container Block */}
            <div className="pt-2">
              <h3 className="animate-trust-title text-lg font-extrabold text-[#1a244f] uppercase tracking-wider mb-5 flex items-center gap-2">
                Why Thousands Of Families Trust MGM Hospital
              </h3>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3.5">
                {[
                  "40+ Years of Trusted Medical Record",
                  "50,000+ Happy Deliveries Completed",
                  "Expert Gynecologists &amp; Pediatricians",
                  "Advanced NICU / PICU Technology Support",
                  "100% Sterile &amp; Clean Patient Spaces",
                  "Around-the-clock Emergency Diagnostics"
                ].map((item, i) => (
                  <li key={i} className="animate-list-item flex items-center gap-3 text-sm md:text-base text-gray-700 font-semibold group">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 group-hover:bg-emerald-500 transition-colors duration-300 flex items-center justify-center flex-shrink-0 text-[9px] text-emerald-600 group-hover:text-white">
                      <FaCheck />
                    </span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right Block: Interactive Parallax/Tilt Canvas Workspace */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="animate-image-container relative w-full max-w-[580px]">
              
              {/* Decorative Secondary Frame Backdrop Frame */}
              <div className="absolute inset-0 bg-[#0095d5]/10 rounded-[2.5rem] transform translate-x-4 translate-y-4 -rotate-2 scale-98 pointer-events-none" />
              
              {/* Core Interactive Card Container */}
              <div
                ref={imageWrapperRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="relative bg-white p-3 rounded-[2.5rem] shadow-[0_25px_50px_rgba(26,36,79,0.12)] border border-white/40 overflow-hidden cursor-pointer will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                <img
                  src={aboutImg}
                  alt="MGM Hospital Care Team"
                  className="w-full h-auto rounded-[2rem] object-cover block pointer-events-none"
                  style={{ transform: "translateZ(30px)" }} // Elements pop outward inside the 3D space
                />
                
                {/* Micro-Lens Glare Reflector Mask overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none mix-blend-overlay" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}