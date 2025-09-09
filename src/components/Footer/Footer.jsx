import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <>
      <footer className="relative border-t border-gray-300/30 bg-gradient-to-br from-purple-800/30 via-gray-900/30 to-black text-white py-12 container-custom overflow-hidden">
        {/* Geometric Background Pattern */}
        {/* <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M800 50 L1100 150 L900 250 L1050 350" stroke="currentColor" strokeWidth="1" />
            <path d="M1000 20 L1200 100 L1000 200 L1150 300" stroke="currentColor" strokeWidth="1" />
            <path d="M900 100 L1200 180 L950 280" stroke="currentColor" strokeWidth="1" />
            <circle cx="1050" cy="150" r="3" fill="currentColor" />
            <circle cx="950" cy="250" r="2" fill="currentColor" />
            <circle cx="1100" cy="200" r="2" fill="currentColor" />
            <polygon points="1080,120 1090,140 1070,140" fill="currentColor" opacity="0.6" />
            <polygon points="980,200 995,220 965,220" fill="currentColor" opacity="0.4" />
          </svg>
        </div> */}

        {/* Enhanced Right Side Geometric Element */}
        <div className="absolute right-0 bottom-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="relative w-full h-full">
            {/* Main Geometric Image */}
            <div className="absolute right-0 bottom-0 lg:right-[-180] lg:top-[-60]  md:right-4 md:bottom-4 sm:right-2 sm:bottom-2">
              <Image
                src="/3d-vector-2.png"
                alt="Geometric Design"
                width={1000}
                height={780}
                className="w-64 h-64 lg:w-180 lg:h-130 md:w-72 md:h-72 sm:w-60 sm:h-60 opacity-70 -rotate-y-12"
                style={{
                  animation: 'pulse 8s ease-in-out infinite',
                }}
              />
            </div>

            <div className="absolute right-16 bottom-1/4 lg:right-24 lg:bottom-1/3 opacity-20">
              <svg
                className="w-16 h-16 lg:w-20 lg:h-20"
                viewBox="0 0 80 80"
                fill="none"
              >
                <rect
                  x="30"
                  y="30"
                  width="20"
                  height="20"
                  fill="#F53A7A"
                  opacity="0.4"
                  transform="rotate(45 40 40)"
                  style={{
                    animation: 'scale 3s ease-in-out infinite',
                  }}
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-8">
                <Image
                  src="/logos/footer-logo.png"
                  alt="Logo"
                  width={195}
                  height={70}
                  className=" "
                  priority
                />
              </div>

              <p className="text-gray-300 text-sm font-normal leading-5 mb-8">
                We create branding solutions that help businesses grow.
              </p>

              {/* Social Media Icons */}
              <div className="flex space-x-3 ">
                <a
                  href="https://www.instagram.com/nextdigital.ae"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-glass"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-glass"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-glass"
                >
                  <FaXTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://in.linkedin.com/company/nextdm"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon-glass"
                >
                  <FaLinkedinIn className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Our Pages */}
            <div className="lg:col-span-1 md:ps-2 ps-4 lg:ps-0">
              <h3 className="text-2xl leading-tight font-medium mb-6 text-white">
                Our Pages
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base  font-normal"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1 md:ps-2 ps-4 lg:ps-0 lg:-ml-8">
              <h3 className="text-2xl leading-tight font-medium mb-6 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal"
                  >
                    Term Of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal"
                  >
                    Disclaimer
                  </Link>
                </li>
                {/* <li>
                  <Link href='#' className='text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal'>
                    Credits
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Get In Touch */}
            <div className="lg:col-span-1 md:ps-2 ps-4 lg:ps-0 lg:-ml-16 lg:mr-8">
              <h3 className="text-2xl leading-tight font-medium mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="flex flex-col space-y-1">
                    <p className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal cursor-pointer">
                      +971 52 516 2071
                    </p>
                    <p className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal cursor-pointer">
                      +971 56 471 2381
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-5 h-5 text-gray-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal cursor-pointer">
                      info.nextdms@gmail.com
                    </p>
                  </div>
                </div>
                {/* <div className='flex items-end space-x-3'>
                  <div className='flex-shrink-0 mt-1'>
                    <svg className='w-5 h-5 text-gray-200' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.148.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <p className='text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300 text-base font-normal cursor-pointer'>
                      www.nextdigital.ae
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="border-t border-gray-300 mt-8 pt-6">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2025 Next Digital Marketing. All rights reserved.</p>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-10px) rotate(2deg);
            }
          }
          
          @keyframes scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          
          @keyframes dash {
            0% {
              stroke-dasharray: 0, 20;
            }
            50% {
              stroke-dasharray: 10, 10;
            }
            100% {
              stroke-dasharray: 20, 0;
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 0.7;
              transform: scale(1);
            }
            50% {
              opacity: 0.9;
              transform: scale(1.05);
            }
          }

          /* Glassmorphic Social Icons */
          .social-icon-glass {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.8);
            transition: all 0.3s ease;
            transform-style: preserve-3d;
            overflow: hidden;
          }

          .social-icon-glass::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, #E337E0, #29ABE2);
            opacity: 0;
            transition: opacity 0.3s ease;
            border-radius: 12px;
          }

          .social-icon-glass:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 8px 32px rgba(227, 55, 224, 0.3);
            color: white;
            border-color: rgba(227, 55, 224, 0.4);
          }

          .social-icon-glass:hover::before {
            opacity: 1;
          }

          .social-icon-glass svg {
            position: relative;
            z-index: 1;
            transition: transform 0.3s ease;
          }

          .social-icon-glass:hover svg {
            transform: scale(1.1);
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
