'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'SHAFI',
    position: 'UI/UX',
    image: '/images/about-us/person.png',
  },
  {
    id: 2,
    name: 'SARFAS',
    position: 'Graphic Designer',
    image: '/images/about-us/person.png',
  },
  {
    id: 6,
    name: 'DIYA',
    position: 'Graphic Designer',
    image: '/images/about-us/person.png',
  },
  {
    id: 3,
    name: 'DASARATH',
    position: 'Fullstack Developer',
    image: '/images/about-us/person.png',
  },
  {
    id: 5,
    name: 'ARJUN',
    position: 'Fullstack Developer',
    image: '/images/about-us/person.png',
  },
  {
    id: 4,
    name: 'NAZMAL',
    position: 'Digital Marketing',
    image: '/images/about-us/person.png',
  },
  {
    id: 7,
    name: 'DIYA KRISHNA',
    position: 'Digital Marketing',
    image: '/images/about-us/person.png',
  },
  {
    id: 8,
    name: 'VISMAYA',
    position: 'Social Media',
    image: '/images/about-us/person.png',
  },
];

export default function AboutUs() {
  return (
    <section className="container-custom pt-15">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold sm:text-5xl md:pt-6 lg:pt-0">
          About Us
        </h2>
      </div>

      <div className="space-y-12 text-start">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row-reverse items-stretch min-h-[24rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 relative">
            <div className="relative group h-full w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/about-us/image1.jpg"
                  alt="About Next Digital"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 py-5 xl:pr-4 md:py-6 flex flex-col justify-start">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <h3 className="text-2xl font-bold mb-1">About Us</h3>
              <p className="mb-3 text-md xl:text-base">
                As a{' '}
                <span className="font-bold ">
                  leading digital marketing agency in Dubai{' '}
                </span>
                , Next Digital believes in the power of creativity and strategy
                to help businesses grow in today’s competitive market. We
                specialize in SEO content writing in the UAE, content marketing,
                and digital storytelling that builds strong connections between
                brands and their audiences. Our team provides tailored digital
                solutions, including blog writing, social media marketing in
                Dubai, Instagram marketing, Facebook ads in the UAE, and
                branding services such as corporate identity, logo design, and
                brand development strategies.
              </p>
              <p className="mb-3 text-md xl:text-base">
                With expertise in{' '}
                <span className="font-bold "> web design in Dubai</span>,
                responsive website development, and business website solutions,
                we create impactful online experiences. Our videography
                services, corporate video production, and professional brand
                storytelling deliver engaging content. We empower brands,
                strengthen digital presence, and accelerate growth through
                creativity, innovation, and smart strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch min-h-[24rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 h-72 md:h-96 relative ">
            <div className="relative group h-full w-full">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/about-us/image2.jpg"
                  alt="Next Digital Mission"
                  fill
                  className="rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 p-5 md:p-6 flex flex-col justify-center gap-4">
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
              <p className="text-sm md:text-base">
                Our mission is to provide smart and creative{' '}
                <span className="font-bold "> digital marketing </span>{' '}
                solutions that help businesses grow, build trust, engage
                customers, and achieve real results. As a digital marketing
                agency in Dubai, we work to create simple and effective
                strategies that bring lasting success.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
              <p className="text-sm md:text-base ">
                We aim to become a leading{' '}
                <span className="font-bold ">
                  digital marketing agency in Dubai{' '}
                </span>{' '}
                that drives business growth through creativity, smart
                strategies, and technology. Our focus is on building global
                recognition while keeping digital marketing simple and
                effective.
              </p>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}

        {/* Company Message Section - Without Image */}
        <div className="flex flex-col items-stretch min-h-[18rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-50/30 to-purple-50/30 p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 ">
              Message from Next Media
            </h3>

            <p className="text-lg md:text-xl mb-6 leading-relaxed ">
              At <span className="font-bold ">Next Media</span>, we believe
              creativity and strategy go hand in hand. Our mission is to empower
              businesses with innovative digital solutions that build
              visibility, spark engagement, and drive growth. From web design
              and branding to social media and content creation, we craft
              experiences that connect brands with people in meaningful ways.
            </p>

            <p className="text-lg md:text-xl mb-6 leading-relaxed  italic">
              We don’t just deliver services—we build partnerships. Every
              project is an opportunity to tell a story, create an impact, and
              take your business to the next level.
            </p>

            <p className="text-xl md:text-2xl font-semibold mt-6  border-t border-gray-300 pt-4">
              Next Media – Where ideas meet impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stretch min-h-[20rem] w-full xl:w-[100%] 2xl:w-[100%] mx-auto hover:shadow-3xl rounded-2xl overflow-hidden transition-all duration-300 bg-gradient-to-br from-blue-50/20 to-purple-50/20 p-8 md:p-10">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-center">
              Message from our CEO
            </h3>

            <div className="flex flex-col  lg:flex-row items-center gap-12 mb-6">
              {/* Changed to square */}
              <div className="w-96 h-96 mx-auto lg:mx-0 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/team/Rasheeq.jpg" // Replace with actual CEO image path
                  alt="CEO of Next Digital"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 text-center lg:text-left">
                <div className="border-l-0 lg:border-l-4 border-blue-500 lg:pl-6 mb-4">
                  <p className="text-lg italic mb-4">
                    "At Next Digital, we believe that great digital experiences
                    begin with a deep understanding of our clients' vision and a
                    commitment to excellence in execution."
                  </p>
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-lg">Rasheeq Abdurahman</p>
                  <p className="text-sm text-stone-300">
                    Founder & CEO, Next Digital
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl md:text-4xl  font-bold mb-10">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 max-w-8xl  xl:gap-y-8 2xl:gap-x-36 xl:gap-0 mx-auto">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center group">
              <div className="relative h-72 w-64 mx-auto mb-4 rounded-xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={256}
                  height={288}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
