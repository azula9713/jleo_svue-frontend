import styled from 'styled-components'

import CTASection from './CTASection'
import HeroSlider from './HeroSlider'

import sldierData from '../../data/constants/SliderData'

const HeroBanner = () => {
  return (
    <HeroSection>
      <CtaContainer>
        <CTASection />
      </CtaContainer>
      <SliderContainer>
        <HeroSlider slides={sldierData} />
      </SliderContainer>
    </HeroSection>
  )
}

export default HeroBanner

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 8rem);
  background-color: ${(props) => props.theme.bgPrimary};
  padding: 0 2rem;
  margin-top: 2rem;
`

const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${(props) => props.theme.borderSecondary};
  width: 48%;

  height: 90%;
`

const SliderContainer = styled.div`
  width: 48%;
  height: calc(100vh - 8rem);
`
