import Head from 'next/head'
import styled from 'styled-components'
import HeroBanner from '../components/Home/HeroBanner'
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
`
