import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import PrivacyPolicy from '@/components/PrivacyPolicySection/PrivacySection';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="py-36">
        <PrivacyPolicy />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PrivacyPolicyPage;
