// src/components/About.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import aboutImg from "../assets/about.png"; // Your team photo
import WhyChooseUs from "../components/WhyChooseUs";
import ReviewCard from "../components/ReviewCard";
import Seo from "../components/Seo";
const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      },
    );
  }, []);

  return (

    <>
      <Seo
        title="About Us | MGM Hospital"
        description="Learn about MGM Hospital & Research Centre, a premier destination for women's and child healthcare in Patna, Bihar."
      />
    
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-[90vw] mt-6 mx-auto py-4 px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src={aboutImg}
              alt="MGM Hospital Team"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[280px]">
              <div className="text-4xl font-bold text-[#1e3a8a]">50,000+</div>
              <div className="text-gray-600">Patients Treated Successfully</div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a8a] leading-tight mb-6">
                About MGM Hospital &amp; Research Centre
              </h1>
              <p className="uppercase text-purple-600 font-semibold tracking-widest">
                BEST WOMEN &amp; CHILD CARE HOSPITAL IN PATNA, BIHAR
              </p>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                With over{" "}
                <strong>40 years of trusted healthcare excellence</strong> and
                more than
                <strong> 50,000 successful patients treated</strong>, MGM
                Hospital &amp; Research Centre has established itself as a
                premier destination for maternity, gynecology, obstetrics,
                pediatric care, infertility treatment, and advanced women's
                healthcare in Patna.
              </p>

              <p>
                Our experienced team of gynecologists and pediatricians provides
                expert care for safe pregnancy, normal and C-section deliveries,
                newborn care, and comprehensive pediatric treatments in a
                modern, hygienic, and patient-friendly environment.
              </p>
            </div>
          </div>
        </div>

      </div>

      <WhyChooseUs />
      <ReviewCard />
    </section>

    </>
  );
};

export default About;
