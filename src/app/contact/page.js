import ContactPage from '@/components/ContactSection/Contact';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import PremiumVideoBanner from '@/components/videoBanner/VideoBanner';
import React from 'react';
export const metadata = {
  title: 'Contact | Next Media',
  description:
    'Get in touch with Next Media for queries, support, or collaboration opportunities.',
  keywords: 'Next Media, Contact, Support, Collaboration',
  openGraph: {
    title: 'Contact | Next Media',
    description:
      'Get in touch with Next Media for queries, support, or collaboration opportunities.',
    url: 'https://yourwebsite.com/contact',
    images: ['/images/og-contact.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Next Media',
    description:
      'Get in touch with Next Media for queries, support, or collaboration opportunities.',
    images: ['/images/og-contact.png'],
  },
};

export default function contact() {
  return (
    <div>
      <Navbar />
      {/* <PremiumVideoBanner BannerTitle={'Contact'}/> */}
      <div className="py-36">
        <ContactPage />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
