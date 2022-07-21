import styled from 'styled-components'

import GalleryItem from '../../../components/Architecture/GalleryItem'
import Hero from '../../../components/Case-study/Hero'
import LetsTalk from '../../../components/Common/LetsTalk'
import Footer from '../../../components/Layout/Footer'
import HeadSection from '../../../components/Layout/HeadSection'

const Architecture = () => {
  return (
    <>
      <HeadSection title="Architecture" />
      <MainSection>
        <Hero
          title="SAVOY GRILL - GORDON RAMSAY"
          heroImg="https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059050-50-savoyoutside.jpg"
        />
        <GalleryContainer>
          <GalleryItem align="left" />
          <GalleryItem align="right" />
        </GalleryContainer>
        <LetsTalk bgImage="/images/lets-talk-bg.jpeg" />
      </MainSection>
      <Footer />
    </>
  )
}

export default Architecture

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem;
  }
`

const GalleryContainer = styled.div`
  width: 100%;
  height: 100%;
`
