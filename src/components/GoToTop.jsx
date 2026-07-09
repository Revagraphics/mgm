import { useEffect, useState, memo } from "react";
import { useLocation } from "react-router-dom";

const GoToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show button after scrolling - debounced
  useEffect(() => {
    let timeoutId;
    
    const toggleVisibility = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setVisible(window.scrollY > 300);
      }, 50);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed w-14 h-14 bottom-6 bg-[#c2185b] p-3 text-white rounded-full left-6 z-[9999]  transition-colors"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

export default memo(GoToTop);

