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
      // subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "invest"
    },
    {
      id: 2,
      image: '/images/projects/client-logo-2.png',
      title: "GCC BUSINESS WATCH",
      // subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "gcc"
    },
    {
      id: 3,
      image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      // subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "invest"
    },
    {
      id: 4,
      image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      // subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "invest"
    },
    {
      id: 5,
      image: '/images/projects/client-logo-2.png',
      title: "GCC BUSINESS WATCH",
      // subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "gcc"
    },
    {
      id: 6,
      image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      // subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "invest"
    },
    {
      id: 7,
      image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      // subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "invest"
    },
    {
      id: 8,
      image: '/images/projects/client-logo-2.png',
      title: "GCC BUSINESS WATCH",
      // subtitle: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
      type: "gcc"
    },
    {
      id: 9,
      image: '/images/projects/client-logo-1.png',
      title: "Invest First",
      // subtitle: "BUSINESS SERVICES",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      location: "Dubai",
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
                      <div className="text-[#29ABE2] text-xl font-medium">
                        {project.title }

                        {/* // .map((line, i) => (
                          // <div key={i}>{line}</div>
                        // ))} */}
                      </div>
                      <div className="text-[#FFFFFF] text-sm font-normal">
                        {project.location}
                        
                        {/* .map((line, i) => (
                          <div key={i}>{line}</div>
                        ))} */}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>





          {/* Call to Action Card */}

          <motion.div
            className="text-center mt-16 lg:mt-20 flex justify-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut", delay: 0.5 }
              }
            }}
          >
            <div className="relative max-w-6xl w-full">
              {/* Glassmorphic Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-2xl">
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10"></div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-pink-400/20 to-blue-400/20 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-16">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left">

                      {/* Title */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 mt-4">
                        Ready to{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                          Transform
                        </span>{' '}
                        Your Ideas?
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
                        Let's collaborate to bring your vision to life with cutting-edge technology
                        and innovative design solutions.
                      </p>

                    </div>

                    {/* Right CTA Buttons */}
                    <div className="flex flex-col items-center lg:items-end space-y-6">
                      {/* Primary CTA - Enquiry */}
                      <motion.button
                        className="relative overflow-hidden bg-gradient-to-r from-[#E337E0]  to-[#3C20B7] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 group w-full max-w-xs"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // Add your enquiry redirect logic here
                          window.location.href = '/contact';
                        }}
                      >
                        {/* Button Glow Effect */}
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur"></div> */}

                        <span className="relative z-10 flex items-center justify-center space-x-1 md:space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className='text-sm md:text-lg'>Start Enquiry</span>
                        </span>
                      </motion.button>

                      {/* Secondary CTA - Email Contact */}
                      <motion.button
                        className="relative overflow-hidden border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-2xl text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm w-full max-w-xs group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          // Add your email contact logic here
                          window.location.href = 'mailto:hello@yourcompany.com';
                        }}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span>Email Us</span>
                        </span>
                      </motion.button>

                      {/* Additional Info */}
                      {/* <div className="text-center lg:text-right mt-6">
              <p className="text-gray-400 text-sm mb-2">
                Quick Response Time
              </p>
              <div className="flex items-center justify-center lg:justify-end space-x-2">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></div>
                </div>
                <span className="text-green-400 text-xs font-medium">Online Now</span>
              </div>
            </div> */}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-8 right-8 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
};