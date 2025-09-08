"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is JobOrbit?",
    answer: "JobOrbit is a platform that connects job seekers with employers, offering advanced search, real-time notifications, and secure communication.",
  },
  {
    question: "How do I create an account?",
    answer: "Click on the 'Sign Up' button at the top right corner, fill in your details, and verify your email to get started.",
  },
  {
    question: "Is JobOrbit free to use?",
    answer: "Yes, JobOrbit offers free access for job seekers. Premium features are available with subscription plans.",
  },
  {
    question: "How can employers post a job?",
    answer: "Employers can log in to their account, navigate to the dashboard, and click 'Post a Job' to add job listings.",
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team via the 'Contact Us' page or by emailing support@joborbit.com.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 container-custom " id="faq">
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
                <span className="text-lg font-medium ">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <p className="mt-3 ">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
