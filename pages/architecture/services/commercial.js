import styled from 'styled-components'
import CaseStudyItem from '../../../components/Architecture/CaseStudyItem'

import HeadSection from '../../../components/Layout/HeadSection'

const Commercial = () => {
  return (
    <>
      <HeadSection title="Commercial" />
      <MainSection>
        <GalleryContainer>
          <CaseStudyItem align="right" />
          <GalleryItems></GalleryItems>
        </GalleryContainer>
      </MainSection>
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

const GalleryItems = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    /* margin: 1rem; */
  }
`
