// src/components/MammographyLaunch.jsx
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import machineImage from '../assets/colab.png'; // Your new image

gsap.registerPlugin(ScrollTrigger);

export default function MammographyLaunch() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        }
      });

      tl.from(".launch-badge", { y: -30, opacity: 0, duration: 0.8 })
        .from(".main-heading", { y: 40, opacity: 0, duration: 1, ease: "power3.out" }, "-=0.4")
        .from(".sub-text", { opacity: 0, y: 20, duration: 0.8 }, "-=0.6")
        .from(".pink-ribbon", { scale: 0, rotation: -15, duration: 0.8, ease: "back.out(1.5)" }, "-=0.5")
        .from(".benefit", { opacity: 0, y: 30, stagger: 0.15, duration: 0.7 }, "-=0.4");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#1e0b2e] via-[#4a0f3a] to-[#2a0a4f] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Side - Updated Content */}
          <div className="text-white space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 rounded-full border border-white/20">
              <span className="text-pink-400">✦</span>
              <span className="uppercase tracking-[2px] sm:tracking-[3px] font-semibold text-xs sm:text-sm">LAUNCHING</span>
            </div>

            <h1 className="main-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
              3D MAMMOGRAPHY
            </h1>

            <div className="sub-text">
              <p className="text-lg sm:text-2xl md:text-3xl font-medium text-purple-200 leading-snug">
                AT MGM HOSPITAL &amp; RESEARCH CENTER PVT. LTD.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <div className="pink-ribbon w-14 h-14 sm:w-16 sm:h-16 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-4xl sm:text-5xl">🎀</span>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">EARLY DETECTION</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-light text-pink-300">SAVES LIVES</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4 sm:pt-8">
              <div className="benefit flex gap-3 sm:gap-4 items-start bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl">📍</div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Detects 40% More Small Tumors</p>
                </div>
              </div>
              <div className="benefit flex gap-3 sm:gap-4 items-start bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl">✅</div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Higher Accuracy &amp; Less Callbacks</p>
                </div>
              </div>
              <div className="benefit flex gap-3 sm:gap-4 items-start bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl">🛡️</div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Safe, Quick &amp; Painless</p>
                </div>
              </div>
              <div className="benefit flex gap-3 sm:gap-4 items-start bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5">
                <div className="text-2xl sm:text-3xl">👩‍⚕️</div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Expert Care You Can Trust</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Machine Image */}
          <div className="relative flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-[4rem] blur-3xl -rotate-6" />
              <img 
                src={machineImage} 
                alt="3D Mammography Machine at MGM Hospital" 
                className="relative z-10 w-full max-w-[520px] rounded-3xl shadow-2xl border border-white/30"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}