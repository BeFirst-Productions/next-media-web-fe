import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'

import { ProjectsSection } from '@/components/ProjectsSection/ProjectsSection'
import PremiumVideoBanner from '@/components/videoBanner/VideoBanner'
import React from 'react'

export default function project ()  {
  return (
    <>
  <Navbar/>
        <PremiumVideoBanner BannerTitle={'Our Projects'}/>
  
     <ProjectsSection/>
      <Footer/>
    </>
  )
}

