'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const ImageTextSection = () => {
  const [isHovering, setIsHovering] = useState(false);

  const HighlightWord = ({ children }) => (
    <span className="inline-block">
      <span
        className="text-transparent"
        style={{ WebkitTextStroke: '0.5px #fff' }}
      >
        {children}
      </span>
    </span>
  );

  return (
    <section className="py-16 container-custom">
      <div className="w-full mx-auto">
        <div className="flex flex-col justify-self-center w-full lg:flex-row items-center gap-0 lg:gap-32">
          {/* Left side - Falling image */}
          <motion.div
            className="w-full lg:w-3/5 xl:w-2/5 -ml-0 flex justify-center"
            animate={{
              x: isHovering ? 120 : 0,
              y: isHovering ? 140 : [0, -10, 0, 8, 0], // floating effect when idle
              rotate: isHovering ? 15 : [0, 1, -1, 0], // subtle tilt when idle
            }}
            transition={{
              type: isHovering ? 'spring' : 'tween',
              stiffness: isHovering ? 80 : undefined,
              damping: isHovering ? 12 : undefined,
              duration: isHovering ? undefined : 6, // smooth idle animation
              repeat: isHovering ? 0 : Infinity, // keep looping idle motion
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.02 }}
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            <motion.div
              className="relative w-full max-w-md  md:max-w-lg lg:max-w-none xl:max-w-full h-80 sm:h-96 md:h-[450px] lg:h-[400px] 2xl:h-[500px] rounded-3xl overflow-hidden cursor-pointer origin-top-left will-change-transform"
              animate={{
                x: isHovering ? 10 : 0, // slide right
                y: isHovering ? 10 : 0, // slide down
                rotate: isHovering ? 10 : 0, // tilt to the right
              }}
              transition={{
                type: 'spring',
                stiffness: 80,
                damping: 12,
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 1.02 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              onTouchStart={() => setIsHovering(true)}
              onTouchEnd={() => setIsHovering(false)}
            >
              <Image
                src="/images/gaming.png"
                alt="Description of your image"
                fill
                className="object-contain md:object-contain lg:mt-8 lg:object-contain xl:object-cover select-none pointer-events-none"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 60vw, (max-width: 1280px) 50vw, 40vw"
                priority
              />

              {/* Subtle shadow overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                animate={{ opacity: isHovering ? 0.08 : 0 }}
                transition={{ duration: 0.25 }}
              />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            className="w-full lg:w-2/5 xl:w-3/5 lg:mr-8 xl:mr-16"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 lg:space-y-12 flex justify-center lg:justify-end lg:pl-0 xl:pl-20">
              <h2 className="text-3xl md:text-6xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-bold text-white leading-tight text-center lg:text-left">
                <span className="block">your strategic</span>
                <span className="block">partner in driving</span>
                <span className="block">
                  <HighlightWord>brand growth</HighlightWord> &
                </span>
                <span className="block">market success.</span>
              </h2>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;
