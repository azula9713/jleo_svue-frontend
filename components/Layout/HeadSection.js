import Head from 'next/head'
import Header from './Header'

const HeadSection = ({ title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>J&apos;LEO SVUE - {title}</title>
      </Head>
      <Header />
    </>
  )
}

export default HeadSection
