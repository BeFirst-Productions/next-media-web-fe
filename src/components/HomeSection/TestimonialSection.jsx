"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Emily Carter",
    role: "CEO, BrightTech Solutions",
    feedback:
      "Working with your team was seamless and efficient. The project was delivered on time and exceeded our expectations.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "David Kim",
    role: "Marketing Head, Nova Agency",
    feedback:
      "Your professionalism and creativity helped us boost our brand presence. We’re extremely satisfied with the results.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "HR Manager, GlobalCorp",
    feedback:
      "A reliable partner who truly understands client needs. Communication was smooth, and the support was top-notch.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-20 " id="testimonials">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 ">
          What Our Clients Say
        </h2>

        <Swiper
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 4000 }}
          loop={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="pb-12"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black/55 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center py-28">
                {/* <img
                  src={t.image}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-gray-200"
                /> */}
                <p className=" mb-6 italic max-w-xl">
                  “{t.feedback}”
                </p>
                <h4 className="font-semibold  text-lg">
                  {t.name}
                </h4>
                <span className="text-sm">{t.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
