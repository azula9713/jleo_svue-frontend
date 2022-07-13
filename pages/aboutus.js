import styled from 'styled-components'

import MainBanner from '../components/AboutUs/MainBanner'
import Footer from '../components/Layout/Footer'
import WhyUsSection from '../components/AboutUs/WhyUsSection'
import LetsTalk from '../components/Common/LetsTalk'
import HeadSection from '../components/Layout/HeadSection'

export default function AboutUs() {
  return (
    <>
      <HeadSection title="About Us" />
      <MainSection>
        <MainBanner />
        <WhyUsSection />
        <LetsTalk />
      </MainSection>
      <Footer />
    </>
  )
}

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 0;
  max-width: 2000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 1rem;
  }
`
