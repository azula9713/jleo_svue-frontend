import MainBanner from '../components/AboutUs/MainBanner'
import Footer from '../components/Layout/Footer'
import WhyUsSection from '../components/AboutUs/WhyUsSection'
import HeadSection from '../components/Layout/HeadSection'
import OurTeam from '../components/AboutUs/OurTeam'

import { MainSection } from '../styles/js/customStyles'
import AboutUsLocale from '../data/lang/AboutUs-en.json'

export default function AboutUs() {
  return (
    <>
      <HeadSection title={AboutUsLocale.tabHeader} />
      <MainSection>
        <MainBanner />
        <WhyUsSection />
        <OurTeam />
      </MainSection>
      <Footer />
    </>
  )
}
