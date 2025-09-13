import Footer from '@/components/Footer/Footer';

import AboutSection from '@/components/HomeSection/AboutSection';
import ClientSections from '@/components/HomeSection/ClientSections';
import FAQSection from '@/components/HomeSection/FaqSection';
import HeroSection from '@/components/HomeSection/HeroSection';
import ImageTextSection from '@/components/HomeSection/ImageTextSection';
import ServiceSection from '@/components/HomeSection/ServiceSection';
import TestimonialSection from '@/components/HomeSection/TestimonialSection';
import ValuesSection from '@/components/HomeSection/ValuesSection';
import Navbar from '@/components/Navbar/Navbar';
export const metadata = {
  title: 'Home | Next Media',
  description:
    'Welcome to Next Media. Explore our services, gallery, clients, and more.',
  keywords: 'Next Media, Services, Gallery, Clients, Portfolio',
  openGraph: {
    title: 'Home | Next Media',
    description:
      'Welcome to Next Media. Explore our services, gallery, clients, and more.',
    url: 'https://yourwebsite.com',
    images: ['/images/og-home.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Home | Next Media',
    description:
      'Welcome to Next Media. Explore our services, gallery, clients, and more.',
    images: ['/images/og-home.png'],
  },
};

import { NewsletterSubscription } from '@/components/NewsletterSubscription/NewsletterSubscription';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';

export default function Home() {
  return (
    <main className="relative z-20">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ImageTextSection />
      <ValuesSection />
      <FAQSection />
      <ClientSections />
      <TestimonialSection />
      <NewsletterSubscription />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
