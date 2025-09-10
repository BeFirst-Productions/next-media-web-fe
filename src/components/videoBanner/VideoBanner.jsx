'use client';
import { useRef, useEffect, useState } from 'react';

const PremiumVideoBanner = ({ BannerTitle }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log('Autoplay prevented:', error);
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const HighlightWord = ({ children }) => (
    <span className=" inline-block">
      <span
        className="text-transparent"
        style={{
          WebkitTextStroke: '0.5px #fff',
        }}
      >
        {children}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <motion.span
          className="block w-2 h-2 rounded-full bg-white"
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </span>
    </span>
  );

  return (
    <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-1000 ${isLoaded ? 'opacity-40' : 'opacity-15'}`}
        ></div>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="data:image/gif,AAAA" // Tiny transparent GIF to avoid gray background
        >
          <source src="/video/Galaxy_Spiral.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1
          className={`text-4xl md:text-5xl font-bold pt-12  transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          {BannerTitle}
        </h1>
        {/* <p className={`text-xl md:text-2xl mb-8 transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          Discover the premium quality that sets us apart from the rest
        </p>
        <button className={`bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-500 transform hover:scale-105 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          Explore Now
        </button> */}
      </div>

      {/* Scroll indicator */}
      {/* <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-opacity duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div> */}
    </section>
  );
};

export default PremiumVideoBanner;
