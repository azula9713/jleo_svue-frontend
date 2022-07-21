import styled from 'styled-components'

import Portfolio from '../../../components/Portfolio/Portfolio'

import SampleImages from '../../../data/constants/json/Images.json'

const Commercial = () => {
  return (
    <Portfolio
      title="Commercial"
      images={SampleImages.categories.all}
      bgImage="/img/others/talk.jpg"
      coverImg="/img/others/comm-cover.jpg"
      leftImg="/img/others/5.jpg"
    />
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
