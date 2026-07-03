import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  FaStar, 
  FaGoogle, 
  FaGlobe, 
  FaDirections, 
  FaPhoneAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const reviewData = [
  {
    id: 1,
    name: "Mohammed Merajuddin",
    time: "7 Months ago",
    initial: "M",
    bgColor: "bg-orange-500",
    text: "All aspects are highly appreciated. Thanks for great cooperation. My grandson born and both mother and baby are fine.",
    stars: 5
  },
  {
    id: 2,
    name: "Rizwan Khan",
    time: "2 Months ago",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60", 
    text: "Better service is provided under the supervision of Dr. Manju Geeta Mishra Mam. A trained team of doctors especially for cesarean that makes patient as well as the attendants comfortable",
    stars: 5
  },
  {
    id: 3,
    name: "Anjali Sharma",
    time: "1 Month ago",
    initial: "A",
    bgColor: "bg-purple-600",
    text: "The infrastructure is state of the art and cleanliness is well maintained. The nursing staff handles everything gracefully with great care.",
    stars: 5
  }
];

export default function ReviewCard() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const sliderWindowRef = useRef(null);
  const sliderTrackRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  // Dynamic window sizing math helper
  const getSlideOffset = (index) => {
    if (!sliderTrackRef.current) return 0;
    const cards = sliderTrackRef.current.children;
    if (cards.length === 0) return 0;
    
    // Calculate width + gap (gap-6 is 24px)
    const cardWidth = cards[0].offsetWidth;
    const gap = 24; 
    return index * (cardWidth + gap);
  };

  const handleSlideChange = (index) => {
    if (index < 0 || index >= reviewData.length) return;
    setActiveIndex(index);

    gsap.to(sliderTrackRef.current, {
      x: -getSlideOffset(index),
      duration: 0.6,
      ease: "power2.out"
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade-in
      gsap.from(".review-heading", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });

      // Left Profile Card entry
      gsap.from(leftCardRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: "top 85%",
        }
      });

      // Right Side Review Cards cascade
      gsap.from(".review-card", {
        x: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderWindowRef.current,
          start: "top 85%",
        }
      });
    }, sectionRef);

    // Re-center active slide layout frame if viewport orientation changes
    const handleResize = () => handleSlideChange(activeIndex);
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, [activeIndex]);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#3f41a4] text-white py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="review-heading text-center text-3xl md:text-4xl font-semibold mb-12 tracking-wide">
          Rated &amp; Recommended by Our Patients
        </h2> 

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hospital Profile Overview */}
          <div 
            ref={leftCardRef}
            className="lg:col-span-4 bg-[#1e2530] border border-gray-700 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Upper Map Banner Mockup */}
            <div className="relative h-40 bg-gray-800 bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60')` }}>
              <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-between">
                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded self-start font-bold">MGM Hospital</span>
                <div className="flex gap-2 self-end">
                  <button className="bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded transition-all">See photos</button>
                  <button className="bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded transition-all">See outside</button>
                </div>
              </div>
            </div>

            {/* Meta Content */}
            <div className="p-5 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold leading-snug">
                  MGM Hospital &amp; Research Centre, Patna, Bihar | Obstetrics &amp; Gynaecology | Women &amp; Child Care | NICU
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-yellow-400 font-bold">4.6</span>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <span className="text-gray-400 text-xs">2,556 Google reviews</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Maternity centre in Patna, Bihar</p>
              </div>

              {/* Action Link Buttons */}
              <div className="flex gap-3 border-y border-gray-700 py-3">
                <a href="#" className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded flex flex-col items-center justify-center gap-1 transition-all text-xs">
                  <FaGlobe className="text-blue-400 text-base" /> Website
                </a>
                <a href="#" className="flex-1 bg-gray-800 hover:bg-gray-700 py-2 rounded flex flex-col items-center justify-center gap-1 transition-all text-xs">
                  <FaDirections className="text-blue-400 text-base" /> Directions
                </a>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 rounded text-xs text-gray-400 font-medium">+4</button>
              </div>

              {/* Inline Metadata Details */}
              <div className="space-y-2.5 text-xs text-gray-300">
                <p className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-gray-400 mt-0.5 flex-shrink-0 text-sm" />
                  <span>Jagat Narayan Lal Rd, East Lohanipur, Kadamkuan, Patna, Bihar 800003</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-gray-400 flex-shrink-0 text-sm" />
                  <span>081022 26550</span>
                </p>
                <p className="flex items-center gap-3">
                  <FaClock className="text-green-400 flex-shrink-0 text-sm" />
                  <span>Hours: <strong className="text-green-400">Open 24 hours</strong></span>
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sliding Reviews Window with Pagination Controls */}
          <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[460px]">
            
            {/* Mask Window Frame */}
            <div ref={sliderWindowRef} className="overflow-hidden px-1 py-2">
              {/* Dynamic Flex Runner Track */}
              <div 
                ref={sliderTrackRef} 
                className="flex gap-6 will-change-transform"
              >
                {reviewData.map((review) => (
                  <div 
                    key={review.id}
                    className="review-card w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] flex-shrink-0 bg-white text-gray-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between border border-gray-100 transform transition-all duration-300 min-h-[360px]"
                  >
                    <div>
                      {/* Top Profile Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3 items-center">
                          {review.img ? (
                            <img src={review.img} alt={review.name} className="w-10 h-10 rounded-full object-cover border" />
                          ) : (
                            <div className={`w-10 h-10 rounded-full ${review.bgColor} text-white flex items-center justify-center font-bold`}>
                              {review.initial}
                            </div>
                          )}
                          <div>
                            <h4 className="text-blue-600 font-bold text-sm leading-tight">{review.name}</h4>
                            <span className="text-gray-400 text-xs">{review.time}</span>
                          </div>
                        </div>
                        <FaGoogle className="text-red-500 text-lg" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex text-orange-400 text-sm mb-3">
                        {[...Array(review.stars)].map((_, i) => <FaStar key={i} />)}
                      </div>

                      {/* Comment Body */}
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                        "{review.text}"
                      </p>
                    </div>

                    {/* Action Button */}
                    <a 
                      href="https://share.google/NdGPawhOJZk8HAx2s" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#3f41a4] hover:bg-[#323485] text-white py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all group mt-auto shadow-md"
                    >
                      Know More 
                      <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Controls Footer Row */}
            <div className="flex items-center justify-between mt-6 px-2">
              {/* Left / Right Arrow Triggers */}
              <div className="flex gap-3">
                <button
                  onClick={() => handleSlideChange(activeIndex - 1)}
                  disabled={activeIndex === 0}
                  className={`p-3 rounded-full border text-xs transition-all duration-300 ${
                    activeIndex === 0 
                      ? "border-white/10 text-white/20 cursor-not-allowed" 
                      : "border-white/40 text-white hover:bg-white hover:text-[#3f41a4] shadow-md"
                  }`}
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => handleSlideChange(activeIndex + 1)}
                  disabled={activeIndex >= reviewData.length - 1}
                  className={`p-3 rounded-full border text-xs transition-all duration-300 ${
                    activeIndex >= reviewData.length - 1 
                      ? "border-white/10 text-white/20 cursor-not-allowed" 
                      : "border-white/40 text-white hover:bg-white hover:text-[#3f41a4] shadow-md"
                  }`}
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Interactive Pagination Bullet System */}
              <div className="flex items-center gap-2.5">
                {reviewData.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => handleSlideChange(dotIndex)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      activeIndex === dotIndex 
                        ? "w-8 bg-yellow-400" 
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>
            <div className="text-center mt-20">
            <button className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg bg-[#c2185b] hover:shadow-xl hover:scale-105 transition-all duration-300">
              <a href=" https://share.google/NdGPawhOJZk8HAx2s" target="_blank" rel="noopener noreferrer">
                Know More   
              </a>
             
            </button>
          </div>

          </div>

        </div>
      </div>
    </section>
  );
}