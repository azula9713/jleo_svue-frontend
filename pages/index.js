import styled from 'styled-components'
import HeroBanner from '../components/Home/HeroBanner'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <Main>
        <HeroBanner />
      </Main>

      <Footer />
    </div>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
