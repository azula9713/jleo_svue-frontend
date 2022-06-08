import styled from 'styled-components'

import { useRecoilValue } from 'recoil'
import SectionTitle from '../Common/SectionTitle'
import HeroSlider from './HeroSlider'
import OurWorkTabs from './OurWorkTabs'

import HomeLocale from '../../data/lang/Home-en.json'
import portfolioData from '../../data/constants/MiniPortfolioData'
import { hoveredPortfolioAtom } from '../../atoms/miniPortfolioAtom'

const OurWork = () => {
  const currSlide = useRecoilValue(hoveredPortfolioAtom)

  return (
    <OurWorkContainer>
      <TitleContainer>
        <SectionTitle title={HomeLocale.ourWork.title} />
      </TitleContainer>
      <WorkContainer>
        <SliderContainer>
          <HeroSlider slides={portfolioData} isPortfolio current={currSlide} />
        </SliderContainer>
        <TabContainer>
          <OurWorkTabs data={portfolioData} />
        </TabContainer>
      </WorkContainer>
    </OurWorkContainer>
  )
}

export default OurWork

const OurWorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`
const TitleContainer = styled.div`
  padding: 2rem 6rem;
`

const WorkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const SliderContainer = styled.div`
  width: 80%;
  height: 40rem;
`

const TabContainer = styled.div`
  width: 30%;
  height: 40rem;
  border: ${(props) => props.theme.borderSecondary};
`
