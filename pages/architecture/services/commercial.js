import styled from 'styled-components'

import CaseStudyItem from '../../../components/Architecture/CaseStudyItem'
import LetsTalk from '../../../components/Common/LetsTalk'
import Footer from '../../../components/Layout/Footer'
import HeadSection from '../../../components/Layout/HeadSection'
import MasonryLayout from '../../../components/MasonryLayout/MasonryLayout'

import SampleImages from '../../../data/constants/json/Images.json'

const Commercial = () => {
  return (
    <>
      <HeadSection title="Commercial" />
      <MainSection>
        <GalleryContainer>
          <CaseStudyItem align="right" />
          <MasonryLayout images={SampleImages.categories.all} />
        </GalleryContainer>
        <LetsTalk bgImage="/img/others/talk.jpg" />
      </MainSection>
      <Footer />
    </>
  )
}

export default Commercial

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
