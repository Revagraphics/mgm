import react, { useState } from "react";
import ServiceSection from "../components/ServiceSection";
import Seo from "../components/Seo";

const Service = () => {
  return (
    <>
      <Seo
        title="Our Services | MGM Hospital"
        description="Explore the comprehensive range of medical services offered at MGM Hospital & Research Centre, dedicated to providing exceptional care for women and children."
      />

      <section className="py-20 bg-gray-50">
        <ServiceSection />
      </section>
    </>
  );
};

export default Service;
