'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsPageTitle } from '../PageTitle/ProjectsPageTitle';
import Image from 'next/image';
import PremiumVideoBanner from '../videoBanner/VideoBanner';

export const ProjectsSection = () => {
  // Animation variants for the content section
  const contentVariants = {
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
        delay: 0.3,
      }
    }
  };


  const projects = [
    {
      id: 1,
        image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "invest"
    },
    {
      id: 2,
        image: '/images/projects/client-logo-2.png',
      title: "GCC BUSINESS WATCH",
      subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "gcc"
    },
    {
      id: 3,
        image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "invest"
    },
    {
      id: 4,
        image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "invest"
    },
    {
      id: 5,
        image: '/images/projects/client-logo-2.png',
      title: "GCC BUSINESS WATCH",
      subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "gcc"
    },
    {
      id: 6,
        image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "invest"
    },
    {
      id: 7,
        image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "invest"
    },
    {
      id: 8,
        image: '/images/projects/client-logo-2.png',
      title: "GCC BUSINESS WATCH",
      subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "gcc"
    },
    {
      id: 9,
        image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Invest first\nDubai",
      type: "invest"
    }
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.15,
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
        delay: index * 0.1,
      }
    })
  };

  return (
    <div className="w-full ">
      {/* Hero Banner */}
      {/* <ProjectsPageTitle /> */}
      
      {/* Main Content Section */}
      <motion.div 
        className="min-h-screen relative overflow-hidden container-custom "
        initial="hidden"
        whileInView="visible"
        viewport={{ 
          once: true, 
          amount: 0.1,
          margin: "-100px 0px"
        }}
        variants={contentVariants}
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-0 py-16 lg:py-24">
          {/* Section Header */}
          {/* <motion.div 
            className="text-center mb-16"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Explore our carefully crafted digital solutions that showcase innovation, 
              creativity, and technical excellence across various industries.
            </p>
          </motion.div> */}

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className={`group relative overflow-hidden rounded-2xl backdrop-blur-sm border transition-all duration-500 ${

                //  'bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/30 hover:border-indigo-400/50'
                 'bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border-indigo-500/30 hover:border-indigo-400/50'
                }`}
              >
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Logo/Icon Area */}
                  <div className="mb-6">
        <Image
          src={project.image}
          alt={`${project.title} Logo`}
            width={145}
            height={114}
            className="  object-contain"
            priority
        />
                  </div>



                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Location/Footer */}
                  <div className="mt-auto">
                    <div className="text-right">
                      <div className="text-blue-400 text-sm font-medium">
                        {project.location.split('\n').map((line, i) => (
                          <div key={i}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16 lg:mt-20"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }
              }
            }}
          >
            <p className="text-gray-400 text-lg mb-8">
              Ready to bring your ideas to life?
            </p>
            <motion.button 
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};