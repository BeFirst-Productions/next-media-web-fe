'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ValuesSection = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      borderColor: 'rgba(59,130,246,0.8)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    tap: { scale: 0.97 },
  };

  const iconVariants = {
    float: {
      y: [0, -6, 0],
      transition: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
    },
  };

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Heading */}
      <div className="relative mb-16 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold z-10">
          Our Values
        </h2>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ['0%', '-50%'] }} // move half since we duplicated
          transition={{
            duration: 25, // speed of scrolling
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {values.concat(values).map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="show"
              whileHover="hover"
              whileTap="tap"
              className="bg-gray-800/80 backdrop-blur-md text-white rounded-xl p-6 w-[350px] 2xl:w-[450px] flex-shrink-0 shadow-lg border border-blue-700/30 transition-all duration-300"
            >
              <motion.div
                className="relative w-20 h-20 mb-6 mx-auto"
                variants={iconVariants}
                animate="float"
                transition={{ delay: index * 0.2 }}
              >
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-center">
                {value.title}
              </h3>
              <p className="text-gray-300 text-base text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
