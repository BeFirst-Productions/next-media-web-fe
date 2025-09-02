'use client';

import { motion } from 'framer-motion';

export const NewsletterSubscription = () => {
  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      }
    }
  };

  const inputVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[31.25rem] md:min-h-screen  p-4">
      <motion.div 
        className="relative w-full max-w-[602px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.3,
          margin: "-100px 0px -100px 0px"
        }}
        variants={containerVariants}
      >
        {/* Gradient border wrapper */}
        <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-b from-[#A529A5] via-blue-400 to-[#29ABE2]">
          {/* Main content container */}
          <div className="relative bg-black rounded-[calc(2rem-2px)] px-6 md:px-12 py-8 md:py-16">
            <div className="flex flex-col items-center justify-center text-start">
              {/* Title */}
              <motion.h2 
                className="text-white text-center md:text-start text-lg md:text-2xl font-medium mb-4 tracking-wider"
                variants={itemVariants}
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </motion.h2>
              
              {/* Description */}
              <motion.p 
                className="text-white/90 text-sm font-normal mb-8 leading-relaxed max-w-[340px]"
                variants={itemVariants}
              >
                Get a curated mix of our latest insights, exclusive project showcases, and strategic advice to help your business thrive.
              </motion.p>
              
              {/* Email input with embedded subscribe button */}
              <motion.div 
                className="relative w-full max-w-md"
                variants={inputVariants}
              >
                {/* Gradient border wrapper for input */}
                <div className="relative p-[1px] rounded-full bg-gradient-to-r from-[#A529A5] to-[#008FFD]">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full py-2 md:py-4 px-3 md:px-6 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none pr-32 transition-colors"
                  />
                </div>
                <motion.button 
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#A529A5] to-[#008FFD] text-white font-normal px-3 md:px-6 rounded-r-full hover:opacity-90 transition-opacity"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};