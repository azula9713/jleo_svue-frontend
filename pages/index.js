import ScrollToTop from 'react-scroll-to-top'

import GetStarted from '../components/Home/GetStarted'
import HeroBanner from '../components/Home/HeroBanner'
import OurStories from '../components/Home/OurStories'
import OurWork from '../components/Home/OurWork'
import OurWorkMobile from '../components/Home/OurWorkMobile'
import WeDoSection from '../components/Home/WeDoSection'
import Footer from '../components/Layout/Footer'
import HeadSection from '../components/Layout/HeadSection'

import { MainSection } from '../styles/js/customStyles'
import defaultTheme from '../styles/js/themeConfig'

export default function Home() {
  return (
    <>
      <HeadSection title="Home" />
      <MainSection>
        <ScrollToTop smooth color={defaultTheme.secondary} />
        <HeroBanner />
        <WeDoSection />
        <OurWork />
        <OurWorkMobile />
        <OurStories />
        <GetStarted />
      </MainSection>
      <Footer />
    </>
  )
}
