import Head from 'next/head'
import LetsTalk from '../../components/Common/LetsTalk'
import Footer from '../../components/Layout/Footer'

import Header from '../../components/Layout/Header'

const Architecture = () => {
  return (
    <>
      <Head>
        <title>Case Study - Architecture</title>
      </Head>
      <Header />
      <main className="main">
        <div>Hero</div>
        <div>
          <div>1st potion gallery</div>
          <div>2nd potion gallery</div>
        </div>
        <LetsTalk bgImage="/images/lets-talk-bg.jpeg" />
      </main>
      <Footer />
    </>
  )
}

export default Architecture
