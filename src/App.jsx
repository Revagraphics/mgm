import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Service from "./pages/Service";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import Social from "./components/Social";
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
        </Routes>
        <Footer />
        <Social />
    </div>
  );
}

export default App;
