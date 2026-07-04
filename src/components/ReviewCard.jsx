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
  FaChevronRight,
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
    stars: 5,
  },
  {
    id: 2,
    name: "Rizwan Khan",
    time: "2 Months ago",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60",
    text: "Better service is provided under the supervision of Dr. Manju Geeta Mishra Mam. A trained team of doctors especially for cesarean that makes patient as well as the attendants comfortable",
    stars: 5,
  },
  {
    id: 3,
    name: "Anjali Sharma",
    time: "1 Month ago",
    initial: "A",
    bgColor: "bg-purple-600",
    text: "The infrastructure is state of the art and cleanliness is well maintained. The nursing staff handles everything gracefully with great care.",
    stars: 5,
  },
];

export default function ReviewCard() {
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const sliderWindowRef = useRef(null);
  const sliderTrackRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const activeIndexRef = useRef(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const getVisibleCardsCount = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth >= 1024) return 2;
    if (window.innerWidth >= 640) return 2;
    return 1;
  };

  const getSlideOffset = (index) => {
    if (!sliderTrackRef.current) return 0;
    const cards = sliderTrackRef.current.children;
    if (cards.length === 0) return 0;

    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = 24;
    const maxIndex = Math.max(0, reviewData.length - getVisibleCardsCount());
    const safeIndex = Math.max(0, Math.min(index, maxIndex));

    return safeIndex * (cardWidth + gap);
  };

  const handleSlideChange = (index) => {
    const maxIndex = Math.max(0, reviewData.length - getVisibleCardsCount());
    const safeIndex = Math.max(0, Math.min(index, maxIndex));

    activeIndexRef.current = safeIndex;
    setActiveIndex(safeIndex);

    if (sliderTrackRef.current) {
      gsap.to(sliderTrackRef.current, {
        x: -getSlideOffset(safeIndex),
        duration: 0.6,
        ease: "power2.out",
      });
    }
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (event) => {
    if (touchStartX.current === null) return;

    const currentX = event.touches[0].clientX;
    touchDeltaX.current = currentX - touchStartX.current;

    if (Math.abs(touchDeltaX.current) > 6) {
      event.preventDefault();
      const offset = -getSlideOffset(activeIndexRef.current) + touchDeltaX.current;
      gsap.set(sliderTrackRef.current, { x: offset });
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;

    const swipeThreshold = 70;

    if (touchDeltaX.current < -swipeThreshold) {
      handleSlideChange(activeIndexRef.current + 1);
    } else if (touchDeltaX.current > swipeThreshold) {
      handleSlideChange(activeIndexRef.current - 1);
    } else {
      handleSlideChange(activeIndexRef.current);
    }

    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    const updateVisibleCards = () => setVisibleCards(getVisibleCardsCount());
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".review-heading", {
        y: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(leftCardRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".review-card", {
        x: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sliderWindowRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    handleSlideChange(0);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    handleSlideChange(activeIndexRef.current);
  }, [visibleCards]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br from-[#3f41a4] via-[#4f54b8] to-[#2f327d] text-white py-16 px-4 md:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-200 mb-3">Patient Stories</p>
          <h2 className="review-heading text-3xl md:text-4xl font-semibold tracking-wide text-white">
            Rated &amp; Recommended by Our Patients
          </h2>
          <p className="mt-3 text-sm md:text-base text-blue-100/90 max-w-2xl mx-auto">
            Real experiences from families who trusted MGM Hospital for compassionate care and expert treatment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div
            ref={leftCardRef}
            className="lg:col-span-4 bg-[#1e2530]/95 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <div
              className="relative h-40 bg-gray-800 bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60')` }}
            >
              <div className="absolute inset-0 bg-black/45 p-4 flex flex-col justify-between">
                <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded self-start font-bold">
                  MGM Hospital
                </span>
                <div className="flex gap-2 self-end">
                  <button className="bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded transition-all">
                    See photos
                  </button>
                  <button className="bg-black/70 hover:bg-black text-white text-xs px-3 py-1.5 rounded transition-all">
                    See outside
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 text-sm space-y-4">
              <div>
                <h3 className="text-lg font-bold leading-snug text-white">
                  MGM Hospital &amp; Research Centre, Patna, Bihar | Obstetrics &amp; Gynaecology | Women &amp; Child Care | NICU
                </h3>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className="text-yellow-400 font-bold">4.6</span>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <span className="text-gray-400 text-xs">2,556 Google reviews</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Maternity centre in Patna, Bihar</p>
              </div>

              <div className="flex gap-3 border-y border-white/10 py-3">
                <a href="#" className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded flex flex-col items-center justify-center gap-1 transition-all text-xs text-white">
                  <FaGlobe className="text-blue-400 text-base" /> Website
                </a>
                <a href="#" className="flex-1 bg-white/10 hover:bg-white/20 py-2 rounded flex flex-col items-center justify-center gap-1 transition-all text-xs text-white">
                  <FaDirections className="text-blue-400 text-base" /> Directions
                </a>
                <button className="bg-white/10 hover:bg-white/20 px-4 rounded text-xs text-gray-300 font-medium">
                  +4
                </button>
              </div>

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
                  <span>
                    Hours: <strong className="text-green-400">Open 24 hours</strong>
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between h-full min-h-[460px]">
            <div ref={sliderWindowRef} className="overflow-hidden px-1 py-2">
              <div
                ref={sliderTrackRef}
                className="flex gap-6 will-change-transform"
                style={{ touchAction: "pan-y" }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {reviewData.map((review) => (
                  <div
                    key={review.id}
                    className="review-card w-full sm:w-[calc(50%-12px)] flex-shrink-0 bg-white text-gray-800 rounded-3xl p-6 shadow-2xl flex flex-col justify-between border border-gray-100 min-h-[360px]"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3 items-center">
                          {review.img ? (
                            <img
                              src={review.img}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover border border-gray-200"
                            />
                          ) : (
                            <div className={`w-12 h-12 rounded-full ${review.bgColor} text-white flex items-center justify-center font-bold`}>
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

                      <div className="flex text-orange-400 text-sm mb-3">
                        {[...Array(review.stars)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                        “{review.text}”
                      </p>
                    </div>

                    {/* <a
                      href="https://share.google/NdGPawhOJZk8HAx2s"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full bg-[#3f41a4] hover:bg-[#323485] text-white py-3 px-4 rounded-xl text-xs font-semibold tracking-wide transition-all group mt-auto shadow-md"
                    >
                      Know More
                      <FaArrowRight className="text-[10px] transform group-hover:translate-x-1 transition-transform" />
                    </a> */}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 px-2">
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

              <div className="flex items-center gap-2.5">
                {reviewData.map((_, dotIndex) => (
                  <button
                    key={dotIndex}
                    onClick={() => handleSlideChange(dotIndex)}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      activeIndex === dotIndex ? "w-8 bg-yellow-400" : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to slide ${dotIndex + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://share.google/NdGPawhOJZk8HAx2s"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg bg-[#c2185b] hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}