'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ValuesSection = () => {
  const [is2xl, setIs2xl] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIs2xl(window.innerWidth >= 1536); // Tailwind 2xl breakpoint
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously explore new ideas and creative solutions.',
      icon: '/images/our-values/innovation.png',
    },
    {
      title: 'Results-Driven',
      description:
        'We focus on delivering measurable outcomes and impactful results.',
      icon: '/images/our-values/results driven.png',
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared success.',
      icon: '/images/our-values/collaboration.png',
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace growth and stay ahead of industry trends.',
      icon: '/images/our-values/continuous-learning.png',
    },
    {
      title: 'Integrity',
      description: 'We build trust through honesty and transparency.',
      icon: '/images/our-values/integrity.png',
    },
  ];

  return (
    <section className="relative py-16 overflow-hidden container-custom">
      {/* Heading */}
      <div className="relative mb-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold z-10">
          Our Values
        </h2>
      </div>

      {/* Values Display */}
      {is2xl ? (
        // Static row for 2XL screens
        <div className="grid grid-cols-5 gap-6 w-full">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-6 w-full shadow-lg border border-blue-700/30 transition-all duration-300"
            >
              <div className="relative w-20 h-20 mb-6 mx-auto">
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-300 text-base text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        // Carousel for smaller screens
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {values.concat(values).map((value, index) => (
              <div
                key={index}
                className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-6 w-[280px] flex-shrink-0 shadow-lg border border-blue-700/30 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="relative w-20 h-20 mb-6 mx-auto">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-300 text-base text-center">
                  {value.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default ValuesSection;
