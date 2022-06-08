import Head from 'next/head'
import styled from 'styled-components'
import HeroBanner from '../components/AboutUs/HeroBanner'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import WhyUsSection from '../components/AboutUs/WhyUsSection'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>J&apos;LEO SVUE</title>
      </Head>
      <Header />
      <Main>
        <HeroBanner />
        <WhyUsSection />
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
`
