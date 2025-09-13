'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: 'GCC Business Watch',
    url: 'https://gccbusinesswatch.com/',
    feedback:
      'Working with Next Media has been an outstanding experience. Their expertise in digital strategy and content creation helped us enhance our online visibility and connect with a wider audience across the GCC. The team is highly professional, responsive, and committed to delivering quality results.',
  },
  {
    name: 'Invest First',
    url: 'https://investfirst.ae/',
    feedback:
      'Next Media played a vital role in strengthening our brand presence. From creative campaigns to social media management, they delivered impactful solutions tailored to our business goals. We truly value their dedication and innovative approach.',
  },
  {
    name: 'ASCENTAM',
    url: 'https://ascentam.com/',
    feedback:
      'Next Media has been a reliable partner in our growth journey. Their ability to combine creativity with strategy has helped us showcase our services effectively and build strong engagement with our target market. A team you can always count on.',
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-16 container-custom" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <Swiper
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="pb-12 relative"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black/55 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
                <p className="mb-6 italic max-w-xl text-base md:text-xl">
                  “{t.feedback}”
                </p>
                <h4 className="font-semibold text-lg">{t.name}</h4>
                <a
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-[#F53A7A] hover:to-[#190CD2] transition-all duration-300"
                >
                  {t.url}
                </a>
              </div>
            </SwiperSlide>
          ))}

          {/* Prev Button inside slider */}
          <div className=" hidden sm:block swiper-button-prev-custom absolute top-1/2 -translate-y-1/2 left-4 z-10">
            <div className="p-[2px] bg-gradient-to-r from-[#E337E0] to-[#29ABE2] rounded-full">
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                ‹
              </button>
            </div>
          </div>

          {/* Next Button inside slider */}
          <div className=" hidden sm:block swiper-button-next-custom absolute top-1/2 -translate-y-1/2 right-4 z-10">
            <div className="p-[2px] bg-gradient-to-r from-[#E337E0] to-[#29ABE2] rounded-full">
              <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
                ›
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </section>
  );
}
