import Head from 'next/head'
import MainBanner from '../components/AboutUs/MainBanner'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import WhyUsSection from '../components/AboutUs/WhyUsSection'
import LetsTalk from '../components/Common/LetsTalk'

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>J&apos;LEO SVUE - About Us</title>
      </Head>
      <Header />
      <main className="main">
        <MainBanner />
        <WhyUsSection />
        <LetsTalk />
      </main>
      <Footer />
    </>
  )
}
