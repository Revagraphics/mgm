import { useState, memo, useCallback } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

const social = [
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    link: "https://wa.me/+91 8102226550",
    content: (
      <div className="text-center">
        <img
          src="/qr-whatsapp.png"
          alt="WhatsApp QR"
          className="h-32 w-32 mx-auto"
        />
        <p className="mt-2 text-xs">Scan to Chat</p>
      </div>
    ),
  },

  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    link: "tel:+918102226550",
    content: (
      <div>
        <p className="font-semibold">+91 8102226550</p>
      </div>
    ),
  },

 

 
];

const Social = () => {
  const [active, setActive] = useState(null);

  const handleMouseEnter = useCallback((index) => {
    setActive(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActive(null);
  }, []);

  return (
    <div className="fixed bottom-10 right-5 z-[9999] flex flex-col gap-3">
      {social.map((item, index) => (
        <div
          key={index}
          className="relative"
          // onMouseEnter={() => handleMouseEnter(index)}
          // onMouseLeave={handleMouseLeave}
        >
          <a
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            aria-label={item.title}
            className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-[#c2185b] text-white flex items-center justify-center shadow-lg transition-all duration-300 text-lg lg:text-xl"
          >
            {item.icon}
          </a>

          {/* {active === index && (
            <div className="absolute right-16 bottom-0 bg-white rounded-xl shadow-2xl border border-gray-200 p-4 min-w-[220px] animate-fadeIn">
              <h4 className="font-semibold mb-2 text-gray-800">
                {item.title}
              </h4>

              {item.content}
            </div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default memo(Social);
