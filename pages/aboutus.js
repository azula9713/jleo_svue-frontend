import Head from 'next/head'
import MainBanner from '../components/AboutUs/MainBanner'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import WhyUsSection from '../components/AboutUs/WhyUsSection'
import LetsTalk from '../components/Common/LetsTalk'
import styled from 'styled-components'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>J&apos;LEO SVUE - About Us</title>
      </Head>
      <Header />
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
