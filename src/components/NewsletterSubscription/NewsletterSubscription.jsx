'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [loading, setLoading] = useState(false);

  // client-side validation
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubscribe = async () => {
    setMessage('');

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    const clearMessage = () => {
      setTimeout(() => {
        setSuccessMessage('');
      }, 2000);
    };

    try {
      setLoading(true);

      const res = await axios.post('/api/subscribe', { email });

      // axios puts response data inside res.data
      setSuccessMessage(res.data.message);
      clearMessage();

      if (res.status === 200) setEmail(''); // clear input on success
    } catch (err) {
      if (err.response) {
        // server responded with error
        setMessage(err.response.data.message || 'Subscription failed.');
      } else {
        // network or other error
        setMessage('Something went wrong, try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[31.25rem] md:min-h-[40.5rem] p-4">
      <motion.div
        className="relative w-full max-w-[602px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3, margin: '-100px 0px -100px 0px' }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              ease: 'easeOut',
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="relative p-[2px] rounded-[2rem] bg-gradient-to-b from-[#A529A5] via-blue-400 to-[#29ABE2]">
          <div className="relative bg-black rounded-[calc(2rem-2px)] px-6 md:px-12 py-8 md:py-16">
            <div className="flex flex-col items-center justify-center text-start">
              <motion.h2 className="text-white text-center md:text-start text-lg md:text-2xl font-medium mb-4 tracking-wider">
                SUBSCRIBE TO OUR NEWSLETTER
              </motion.h2>

              <motion.p className="text-white/90 text-sm font-normal mb-8 leading-relaxed max-w-[340px]">
                Join our community and receive exclusive updates, Branding,
                productions, and marketing tips to inspire growth.
              </motion.p>

              <motion.div className="relative w-full max-w-md">
                <div className="relative p-[1px] rounded-full bg-gradient-to-r from-[#A529A5] to-[#008FFD]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-2 md:py-4 px-3 md:px-6 rounded-full bg-black text-white placeholder-gray-400 focus:outline-none pr-32 transition-colors"
                  />
                </div>
                <motion.button
                  onClick={handleSubscribe}
                  disabled={loading}
                  className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-[#A529A5] to-[#008FFD] text-white font-normal px-3 md:px-6 rounded-r-full hover:opacity-90 transition-opacity disabled:opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? '...' : 'Subscribe'}
                </motion.button>
              </motion.div>

              {message && (
                <p className="mt-4 text-sm text-red-500">{message}</p>
              )}
              {successMessage && (
                <p className="mt-4 text-sm text-green-500">{successMessage}</p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
