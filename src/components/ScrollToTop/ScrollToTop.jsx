'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      className="fixed bottom-8 right-8 z-50"
    >
      {/* Gradient border container */}
      <div className="p-[2px] bg-gradient-to-r from-[#E337E0] to-[#29ABE2] rounded-full">
        <button
          onClick={scrollToTop}
          className="p-3 bg-black hover:bg-gradient-to-r from-[#E337E0] to-[#29ABE2] text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default ScrollToTop;
