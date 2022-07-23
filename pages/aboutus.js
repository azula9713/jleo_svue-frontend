import MainBanner from '../components/AboutUs/MainBanner'
import Footer from '../components/Layout/Footer'
import WhyUsSection from '../components/AboutUs/WhyUsSection'
import HeadSection from '../components/Layout/HeadSection'
import OurTeam from '../components/AboutUs/OurTeam'
import { MainSection } from '../styles/js/customStyles'

export default function AboutUs() {
  return (
    <>
      <HeadSection title="About Us" />
      <MainSection>
        <MainBanner />
        <WhyUsSection />
        <OurTeam />
      </MainSection>
      <Footer />
    </>
  )
}
