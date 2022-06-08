import Head from 'next/head'
import styled from 'styled-components'
import GetStarted from '../components/Home/GetStarted'
import HeroBanner from '../components/Home/HeroBanner'
import OurStories from '../components/Home/OurStories'
import OurWork from '../components/Home/OurWork'
import WeDoSection from '../components/Home/WeDoSection'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>J&apos;LEO SVUE</title>
      </Head>
      <Header />
      <Main>
        <HeroBanner />
        <WeDoSection />
        <OurWork />
        <OurStories />
        <GetStarted />
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
  margin-bottom: 0;
`
