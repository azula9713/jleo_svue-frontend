import styled from 'styled-components'

import CTASection from './CTASection'
import HeroSlider from './HeroSlider'

import sliderData from '../../data/constants/SliderData'

const HeroBanner = () => {
  return (
    <HeroSection>
      <CtaContainer>
        <CTASection />
      </CtaContainer>
      <SliderContainer>
        <HeroSlider slides={sliderData} />
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 0.2rem;
    align-items: flex-start;
  }
`

const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${(props) => props.theme.borderSecondary};
  width: 48%;
  height: 90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    justify-content: flex-start;
    height: max-content;
  }
`

const SliderContainer = styled.div`
  width: 48%;
  height: calc(100vh - 8rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`
