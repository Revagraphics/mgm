import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Seo from "../components/Seo";
import doctorOwn from "../assets/doctor-own.png";
import doctor2 from "../assets/doctor-1.jpeg";
import doctor3 from "../assets/doctor-2.jpeg";
import doctor4 from "../assets/doctor-3.jpeg";
import doctor5 from "../assets/doctor-4.jpeg";
import doctor6 from "../assets/doctor-5.jpeg";
import doctor7 from "../assets/doctor-6.jpeg";
import doctor8 from "../assets/doctor-7.jpeg";

const doctors = [
  {
    name: "Dr. Manju Gita Mishra",
    title: "Chairman & Chief Consultant (OBS. & GYNAE.)",
    experience: "40+ Years",
    image: doctorOwn,
    specialties: "MBBS, DGO, MS(OBST. & GYNAE.)",
  },
  {
    name: "Dr. Jyoti Maskara",
    title: "Senior Consultant",
    experience: "25+ Years",
    image: doctor2,
    specialties: "MBBS, MS (OBST. & GYNAE.)",
  },
  {
    name: "Dr. Rita Sinha",
    title: "Senior Consultant",
    experience: "20+ Years",
    image: doctor3,
    specialties: "MBBS, DGO, DCH, Ph.D (OBS & GYNE)",
  },
  {
    name: "Dr. Jyoti Jaiswal",
    title: "Senior Consultant",
    experience: "18+ Years",
    image: doctor4,
    specialties: "MBBS, DGO (OBS & GYNE)",
  },
  {
    name: "Dr. Shalini",
    title: "Senior Consultant",
    experience: "15+ Years",
    image: doctor5,
    specialties: "MBBS, DGO (OBS & GYNE)",
  },
  {
    name: "Dr. Mridula Roy Chaudhary",
    title: "Senior Consultant",
    experience: "22+ Years",
    image: doctor6,
    specialties: "MBBS, MS (OBS & GYNE)",
  },
  {
    name: "Dr. Raj Kumari",
    title: "Senior Consultant",
    experience: "16+ Years",
    image: doctor7,
    specialties: "MBBS, MS (OBS & GYNE)",
  },
  {
    name: "Dr. Sweta Agrawal",
    title: "Senior Consultant",
    experience: "12+ Years",
    image: doctor8,
    specialties: "MBBS, DGO, DNB (OBS & GYNE)",
  },
];

const Doctors = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentIndexRef = useRef(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const getVisibleCardsCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 4;
    if (window.innerWidth >= 768) return 2;
    return 1;
  };

  // Responsive card measurements
  const getCardWidth = () => {
    if (!sliderRef.current) return 0;
    const firstCard = sliderRef.current.children[0];
    return firstCard ? firstCard.offsetWidth + 24 : 0; // 24px matches the gap-6 class
  };

  const slideTo = (index) => {
    const cardWidth = getCardWidth();
    const maxIndex = doctors.length - getVisibleCardsCount();
    const targetIndex = Math.max(0, Math.min(index, maxIndex));

    currentIndexRef.current = targetIndex;
    setCurrentIndex(targetIndex);

    if (sliderRef.current) {
      gsap.to(sliderRef.current, {
        x: -targetIndex * cardWidth,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleNext = () => {
    const maxIndex = doctors.length - getVisibleCardsCount();
    if (currentIndexRef.current < maxIndex)
      slideTo(currentIndexRef.current + 1);
  };

  const handlePrev = () => {
    if (currentIndexRef.current > 0) slideTo(currentIndexRef.current - 1);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) return;

    const currentX = event.touches[0].clientX;
    touchDeltaX.current = currentX - touchStartX.current;

    if (Math.abs(touchDeltaX.current) > 5) {
      event.preventDefault();
      const cardWidth = getCardWidth();
      const offsetX = touchDeltaX.current;

      gsap.set(sliderRef.current, {
        x: -(currentIndexRef.current * cardWidth) + offsetX,
      });
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;

    const swipeThreshold = 60;
    if (touchDeltaX.current < -swipeThreshold) {
      handleNext();
    } else if (touchDeltaX.current > swipeThreshold) {
      handlePrev();
    } else {
      slideTo(currentIndexRef.current);
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".doctor-card",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    }, containerRef);

    slideTo(0);

    const handleResize = () => slideTo(currentIndexRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxIndex = doctors.length - getVisibleCardsCount();

  return (
    <>
      <Seo
        title="Doctors | MGM Hospital"
        description="Highly experienced and compassionate doctors dedicated to women's and child health."
      />

      <section
        ref={containerRef}
        className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="max-w-[90vw] mx-auto px-4 md:px-6">
          {/* Header & Controls Container */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-4xl font-extrabold text-[#1e3a8a] tracking-tight mb-4">
                Our Team of Expert Doctors
              </h2>
              <p className="text-md text-gray-600">
                Highly experienced and compassionate doctors dedicated to
                women’s and child health.
              </p>
            </div>

            {/* Navigation Slider Buttons */}
            <div className="flex items-center gap-3 self-start md:self-end">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  currentIndex === 0
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md"
                }`}
              >
                <FaArrowLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`p-3 rounded-full border transition-all duration-300 ${
                  currentIndex >= maxIndex
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-md"
                }`}
              >
                <FaArrowRight size={24} />
              </button>
            </div>
          </div>

          {/* Outer Window (Hides horizontal page scrollbars) */}
          <div className="overflow-visible md:overflow-hidden -mx-4 px-4">
            {/* Main Slider Row */}
            <div
              ref={sliderRef}
              className="flex gap-6 cursor-grab active:cursor-grabbing will-change-transform select-none"
              style={{ touchAction: "pan-y" }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="doctor-card flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    {/* Doctor Profile Picture Area */}
                    <div className="relative h-80 bg-slate-100 overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1.5 rounded-full text-[#1e3a8a] shadow-sm">
                        {doctor.experience}
                      </div>
                    </div>

                    {/* Card Content Text Fields */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 mb-1">
                        {doctor.name}
                      </h3>
                      <p className="text-purple-600 font-semibold text-sm mb-3">
                        {doctor.title}
                      </p>
                      <p className="text-gray-500 text-sm line-clamp-2">
                        {doctor.specialties}
                      </p>
                    </div>
                  </div>

                  {/* Optional Action Button decoration footer */}
                  {/* <div className="px-6 pb-6 pt-2">
                  <button className="w-full text-center py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-700 group-hover:bg-blue-50 group-hover:border-blue-200 group-hover:text-blue-700 transition-all duration-300">
                    View Full Profile
                  </button>
                </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
