import styled from 'styled-components'

import CaseStudyItem from '../Architecture/CaseStudyItem'
import LetsTalk from '../Common/LetsTalk'
import HeadSection from '../Layout/HeadSection'
import Footer from '../Layout/Footer'
import MasonryLayout from '../MasonryLayout/MasonryLayout'

const Portfolio = ({ title, images, bgImage, coverImg, leftImg }) => {
  return (
    <>
      <HeadSection title={title} />
      <MainSection>
        <GalleryContainer>
          <CaseStudyItem
            align="right"
            title={title}
            coverImg={coverImg}
            leftImg={leftImg}
          />
          <MasonryLayout images={images} />
        </GalleryContainer>
        <LetsTalk bgImage={bgImage} />
      </MainSection>
      <Footer />
    </>
  )
}

export default Portfolio

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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 5rem;
  }
`
