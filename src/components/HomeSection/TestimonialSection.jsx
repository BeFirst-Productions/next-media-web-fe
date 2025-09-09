'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: 'Emily Carter',
    role: 'CEO, BrightTech Solutions',
    feedback:
      'Working with your team was seamless and efficient. The project was delivered on time and exceeded our expectations.',
  },
  {
    name: 'David Kim',
    role: 'Marketing Head, Nova Agency',
    feedback:
      'Your professionalism and creativity helped us boost our brand presence. We’re extremely satisfied with the results.',
  },
  {
    name: 'Sarah Johnson',
    role: 'HR Manager, GlobalCorp',
    feedback:
      'A reliable partner who truly understands client needs. Communication was smooth, and the support was top-notch.',
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
          autoplay={{ delay: 4000 }}
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
                <span className="text-sm">{t.role}</span>
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
