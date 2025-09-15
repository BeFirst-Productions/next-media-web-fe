'use client';
import { useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/gallery/ADAMS AURUM [LETTER HEAD].jpg',
  '/images/gallery/noora logo mockups-02.jpg',
  '/images/gallery/EWF BRAND  GUIDELINES 2-01.jpg',
  '/images/gallery/smash.jpg',
  '/images/gallery/adams aurum GUIDLINES-01.jpg',
  '/images/gallery/EWF-BRAND-GUIDELINES.jpg',
  '/images/gallery/POSTER-MOCKUP.jpg',
  '/images/gallery/noor2.png',
  '/images/gallery/GOLDEN VISA MOCKUP.jpg',
];

export default function Gallery() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const ratios = [
    'aspect-[4/3]',
    'aspect-[3/4]',
    'aspect-[16/9]',
    'aspect-square',
  ];

  return (
    <section className="container-custom pt-15">
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12">
          Our Gallery
        </h2>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 md:columns-4 gap-6">
          {images.map((src, index) => {
            const ratio = ratios[index % ratios.length];
            return (
              <div
                key={index}
                className={`mb-6 rounded-xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300 ${ratio}`}
                onClick={() => setHoveredImage(src)} // Changed from hover to click
              >
                <Image
                  src={src}
                  alt={`Gallery ${index}`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Preview on Click */}
      {hoveredImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setHoveredImage(null)} // Close on background click
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
            onClick={() => setHoveredImage(null)}
          >
            ×
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
          >
            <Image
              src={hoveredImage}
              alt="Hovered Preview"
              width={1200}
              height={800}
              className="object-contain w-auto h-auto max-h-[85vh] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
