import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Social from "./components/Social";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <div className="">
      <GoToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Route - Catch all unknown paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Social />
    </div>
  );
}

export default App;
