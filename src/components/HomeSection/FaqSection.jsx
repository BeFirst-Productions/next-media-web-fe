'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does your company provide?',
    answer:
      'We offer end-to-end digital solutions including web development, mobile app development, UI/UX design, and digital marketing tailored to meet your business needs.',
  },
  {
    question: 'How can I request a project quote?',
    answer:
      'You can reach out through our Contact page by filling in your project details, or email us directly. Our team will get back to you with a detailed proposal.',
  },
  {
    question: 'Do you work with startups as well as large companies?',
    answer:
      'Yes, we collaborate with businesses of all sizes — from startups to enterprises — and customize solutions based on their unique requirements.',
  },
  {
    question: 'What is your typical project timeline?',
    answer:
      'Project timelines vary depending on the scope and complexity. On average, small projects may take 2–4 weeks, while larger projects can range from 2–3 months.',
  },
  {
    question: 'How do you provide support after project delivery?',
    answer:
      'We offer ongoing support and maintenance packages to ensure your product runs smoothly, stays updated, and continues to perform optimally.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 container-custom " id="faq">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 ">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 shadow-md rounded-2xl p-4 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="text-lg font-medium ">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && <p className="mt-3 ">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
