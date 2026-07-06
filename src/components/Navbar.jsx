import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  /* ================= STATE ================= */
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, isActive] = useState(false);

  const dropdownRefs = useRef({});

  const setDropdownRef = (name) => (el) => {
    dropdownRefs.current[name] = el;
  };

  /* ================= MENU CONFIG ================= */
  // const dropdownConfigs = {

  //   Specialities: {
  //     label: "Specialities",
  //     items: [
  //       { to: "/portfolio", label: "Portfolio" },
  //       { to: "/Stationary", label: "Stationary" },
  //       { to: "/trophy", label: "Trophy " },
  //       { to: "/Catalogue", label: "Catalogue & Brochure" },
  //     ],
  //   },
  // };

  /* ================= DESKTOP DROPDOWN ================= */
  const toggleDesktop = (name) => {
    setDesktopDropdown((prev) => (prev === name ? null : name));
  };

  /* ================= MOBILE DROPDOWN ================= */
  const toggleMobile = (name) => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  /* ================= OUTSIDE CLICK ================= */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!desktopDropdown) return;

      const ref = dropdownRefs.current[desktopDropdown];
      if (ref && !ref.contains(e.target)) {
        setDesktopDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [desktopDropdown]);

  /* ================= LOCK BODY ================= */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-[9999] backdrop-blur-xl bg-[#fff] border-b border-white/30 shadow-lg">
        <div className="flex justify-between items-center px-6 py-3">
          {/* LOGO */}
          <Link to="/">
            <img src={Logo} className="h-14" />
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex text-[#08182b] font-bold md:px-4 md:py-4 md:gap-2 px-8 py-4  items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2  font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-[#423e95]  "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2  font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-[#423e95] "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/service"
              className={({ isActive }) =>
                `px-3 py-2  font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-[#423e95]  "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              Services
            </NavLink>

            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `px-3 py-2  font-bold transition-all duration-200
                  ${
                    isActive
                      ? "text-[#423e95]  "
                      : "text-[#08182b] hover:bg-white/70 "
                  }`
              }
            >
              Doctors
            </NavLink>

            

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 bg-gradient(to bottom, #ee5f96, #d73774)   font-bold transition-all duration-200
                  ${isActive ? "text-[#423e95] " : "text-[#08182b]  "}`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* CTA DESKTOP */}
          <Link to="/contact">
            <button className="hidden lg:block px-6 py-2 rounded-full border cursor-pointer font-semibold text-[#fff] bg-[#c2185b] transition">
              Talk To Us
            </button>
          </Link>

          {/* HAMBURGER */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMobileOpen(true)}
          >
            <HiOutlineMenuAlt3 />
          </button>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      <button
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed right-0 top-0 h-full w-[85%] max-w-sm z-[99999] bg-white  shadow-2xl 
              transition-transform duration-500 flex flex-col
              ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b">
          <img src={Logo} className="h-9" alt="Reva Graphics" />
          <HiX
            className="text-3xl cursor-pointer"
            onClick={() => setMobileOpen(false)}
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-2">
          <Link
            to="/"
            className="block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className="block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>

           <Link
            to="/doctors"
            className="block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Doctors
          </Link>

          <Link
            to="/service"
            className="block py-3 border-b"
            onClick={() => setMobileOpen(false)}
          >
            Services
          </Link>

          

          <Link to="/contact" className="block py-3 border-b">
            Contact
          </Link>

          <button className="mt-6 w-full py-3 rounded-full bg-black text-white font-medium">
            Talk To Us
          </button>
        </div>

        <div className="border-t p-6 mt-auto">
          <div className="flex justify-center items-center gap-6 text-2xl">
            {/* <a
              href="https://x.com/Revagraphics"
              className="text-zinc-400 hover:text-[#423e95] transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
            >
              <FaTwitter />
            </a> */}

            <a
              href="https://www.instagram.com/mgmresearchcentre?igsh=czZlbGlwY21tMWtt"
              className="text-zinc-400 hover:text-[#423e95] transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/mgmhospitalpatna"
              className="text-zinc-400 hover:text-[#423e95] transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://www.linkedin.com/company/mgm-hospital-research-centre-pvt-ltd/"
              className="text-zinc-400 hover:text-[#423e95] transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>


            <a
              href="https://www.youtube.com/@MGMHopitalResearchCentrepvtltd"
              className="text-zinc-400 hover:text-[#423e95] transition-all duration-300 hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
