'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

export const ProjectsPageTitle = () => {
  // Animation variants for the container
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 1.05,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        staggerChildren: 0.3,
      }
    }
  };

  // Animation variants for the image
  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    }
  };

  // Animation variants for the overlay elements
  const overlayVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.6,
      }
    }
  };

  return (
    <motion.div 
      className="relative w-full h-[400px] sm:h-[500px] md:h-[572px] flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Image with Overlay */}
      <motion.div
        variants={imageVariants}
        className="absolute inset-0"
      >
        <Image 
          src="/banners/projectBanner.png" 
          alt="Our Projects - Professional Development Services" 
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={90}
        />
        

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-blue-900/20"></div>
      </motion.div>

      {/* Content Overlay */}
      <motion.div
        variants={overlayVariants}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        {/* Main Title */}
        <h1 className="text-2xl  md:text-4xl lg:text-[40px] font-bold text-white mb-4 sm:mb-6">
          <span className="block mb-2">Our Projects</span>

        </h1>

        {/* Decorative Elements */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-r from-transparent to-purple-400"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="w-12 sm:w-16 h-[2px] bg-gradient-to-l from-transparent to-blue-400"></div>
        </div>

        {/* Stats or Additional Info */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {/* <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.8, duration: 0.5 }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">50+</div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">Projects</div>
          </motion.div> */}
          
          {/* <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 0.9, duration: 0.5 }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">Success Rate</div>
          </motion.div> */}
          
          {/* <motion.div 
            className="text-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { 
                opacity: 1, 
                scale: 1,
                transition: { delay: 1.0, duration: 0.5 }
              }
            }}
          >
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium">Support</div>
          </motion.div> */}
        </div>
      </motion.div>

      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-24 h-24 border border-purple-400/20 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 border border-blue-400/20 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 0.8, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </div> */}

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-xs sm:text-sm font-medium mb-2 text-gray-300">Scroll Down</span>
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
      </motion.div> */}
    </motion.div>
  );
};