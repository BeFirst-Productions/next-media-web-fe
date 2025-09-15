import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { ProjectsPageTitle } from '@/components/PageTitle/ProjectsPageTitle';

import { ProjectsSection } from '@/components/ProjectsSection/ProjectsSection';
import ScrollToTop from '@/components/ScrollToTop/ScrollToTop';
import PremiumVideoBanner from '@/components/videoBanner/VideoBanner';
import React from 'react';

export default function project() {
  return (
    <>
      <Navbar />
      {/* <PremiumVideoBanner BannerTitle={'Our Projects'} /> */}
      {/* <ProjectsPageTitle /> */}
      <ProjectsSection />
      <Footer />
      <ScrollToTop />
    </>
  );
}
