'use client';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const ClientSections = () => {
  // Sample client data
  const clients = [
    { id: 1, name: 'wide-range', logo: '/images/our-clients/wide_range1.png' },
    {
      id: 2,
      name: 'kozhicode restaurant',
      logo: '/images/our-clients/kozhicode restaurant.png',
    },
    {
      id: 3,
      name: 'shay al karam.',
      logo: '/images/our-clients/shay_al_karam1.png',
    },
    { id: 4, name: 'emirates', logo: '/images/our-clients/emirates1.png' },
    { id: 5, name: 'OIP', logo: '/images/our-clients/OIP1.png' },
    {
      id: 6,
      name: 'FaceASCENTAM_LOGO_black-DGCKZOSibook',
      logo: '/images/our-clients/ASCENTAM_LOGO_black-DGCKZOSi.png',
    },
    { id: 7, name: 'befirst', logo: '/images/our-clients/befirst.png' },
    { id: 8, name: 'befirst-hr', logo: '/images/our-clients/befirst-hr.png' },
    { id: 9, name: 'bizdoc', logo: '/images/our-clients/bizdoc.png' },
    { id: 10, name: 'NOORA', logo: '/images/our-clients/NOORA.png' },
    { id: 11, name: 'EWF', logo: '/images/our-clients/EWF.png' },
    { id: 12, name: 'B&B', logo: '/images/our-clients/B&B.png' },
    {
      id: 12,
      name: 'IF-Logo_Artboard',
      logo: '/images/our-clients/IF-Logo_Artboard.png',
    },
    { id: 12, name: 'Smash', logo: '/images/our-clients/Smash.png' },
    {
      id: 12,
      name: 'adams aurum ',
      logo: '/images/our-clients/adams aurum.png',
    },
    {
      id: 12,
      name: 'AL-ADEED-BUSINESS-GROUP',
      logo: '/images/our-clients/AL-ADEED-BUSINESS-GROUP.png',
    },
  ];

  const duplicatedClients = [...clients, ...clients];

  const [itemWidth, setItemWidth] = useState(250); // Default width for desktop

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 640) {
          setItemWidth(150);
        } else if (window.innerWidth < 768) {
          setItemWidth(180);
        } else if (window.innerWidth < 1024) {
          setItemWidth(200);
        } else {
          setItemWidth(250);
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="py-8 md:py-12 lg:py-16 overflow-hidden container-custom">
      <div className="w-full mx-auto">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our Happy Clients
          </h2>
        </div>

        {/* First Carousel (Right to Left) */}
        <div className="relative w-full overflow-hidden mb-8 md:mb-10 lg:mb-12">
          <div className="infinite-scroll flex bg-gray-100/50">
            {duplicatedClients.map((client, index) => (
              <div
                key={`first-${client.id}-${index}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 group">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Carousel (Left to Right) */}
        <div className="relative w-full overflow-hidden">
          <div className="infinite-scroll-reverse flex bg-gray-100/50">
            {duplicatedClients.map((client, index) => (
              <div
                key={`second-${client.id}-${index}`}
                className="flex-shrink-0 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8"
                style={{ width: `${itemWidth}px` }}
              >
                <div className="rounded-lg md:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex items-center justify-center h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 group">
                  <div className="relative w-full h-full">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain filter group-hover:grayscale-0 transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes infiniteScrollReverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .infinite-scroll {
          animation: infiniteScroll 30s linear infinite;
          display: flex;
          width: ${clients.length * itemWidth * 2}px;
        }
        .infinite-scroll-reverse {
          animation: infiniteScrollReverse 30s linear infinite;
          display: flex;
          width: ${clients.length * itemWidth * 2}px;
        }

        .infinite-scroll:hover,
        .infinite-scroll-reverse:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .infinite-scroll,
          .infinite-scroll-reverse {
            animation-duration: 20s;
          }
        }
      `}</style>
    </section>
  );
};

export default ClientSections;
