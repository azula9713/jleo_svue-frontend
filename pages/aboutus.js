import Head from 'next/head'
import styled from 'styled-components'
import MainBanner from '../components/AboutUs/MainBanner'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import WhyUsSection from '../components/AboutUs/WhyUsSection'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>J&apos;LEO SVUE - About Us</title>
      </Head>
      <Header />
      <Main>
        <MainBanner />
        <WhyUsSection />
        {/* Let's talk CTA to be added */}
      </Main>
      <Footer />
    </>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  width: 100%;
`
