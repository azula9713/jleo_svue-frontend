import styled from 'styled-components'

import SectionTitle from '../Common/SectionTitle'
import HeroSlider from './HeroSlider'

import HomeLocale from '../../data/lang/Home-en.json'
import portfolioData from '../../data/constants/MiniPortfolioData'
import OurWorkTabs from './OurWorkTabs'

const OurWork = () => {
  return (
    <OurWorkContainer>
      <TitleContainer>
        <SectionTitle title={HomeLocale.ourWork.title} />
      </TitleContainer>
      <WorkContainer>
        <SliderContainer>
          <HeroSlider slides={portfolioData} isPortfolio />
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
  margin: 2rem 0;
  padding: 2rem 0;
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
  border: ${(props) => props.theme.borderSecondary};
`

const SliderContainer = styled.div`
  width: 80%;
  height: 40rem;
`

const TabContainer = styled.div`
  width: 30%;
  height: 40rem;
`
