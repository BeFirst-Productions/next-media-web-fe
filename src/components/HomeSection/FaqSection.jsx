'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Next Digital offer?',
    answer:
      'We provide a full range of digital solutions, including branding, creative design, digital marketing, and strategic consulting. Our goal is to help businesses connect with their audiences, elevate their brand presence, and achieve measurable results.',
  },
  {
    question: 'Who can benefit from working with Next Digital?',
    answer:
      'Whether you’re a startup aiming to establish your identity or an established business looking to evolve and expand, we craft strategies tailored to your goals.',
  },
  {
    question: 'What makes Next Digital different from other digital agencies?',
    answer:
      'We blend creativity with technology and strategy. Our focus isn’t just on making things look great — it’s on delivering impactful solutions that engage audiences, drive growth, and inspire long-term success.',
  },
  {
    question: 'Do you only work with companies in certain industries?',
    answer:
      'Not at all. Our expertise spans across industries. From retail to tech, healthcare to lifestyle brands, we adapt our strategies to suit your unique market and audience.',
  },
  {
    question: 'How does Next Digital approach a new project?',
    answer:
      'We start by understanding your brand, goals, and challenges. Then, we develop a customized strategy that combines creative design, data-driven insights, and digital marketing techniques to deliver the best results.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 container-custom" id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-black/50 shadow-md rounded-2xl p-4 transition-all duration-300"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <div className="w-full flex justify-between items-center text-left">
                  <span className="text-lg font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100 mt-3' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
