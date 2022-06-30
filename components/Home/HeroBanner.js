import styled from 'styled-components'
import Image from 'next/image'

import CTASection from './CTASection'
import HeroSlider from './HeroSlider'

import sliderData from '../../data/constants/SliderData'

const HeroBanner = () => {
  return (
    <HeroSection>
      <MobileHeroBg>
        <HeroImage layout="fill" src="/stories.png" objectFit="cover" />
      </MobileHeroBg>
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

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 0.2rem;
    justify-content: flex-start;
    flex-direction: column;
    height: max-content;
  }
`

const MobileHeroBg = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    position: relative;
    width: 100%;
    height: calc(100vh / 3);
    display: block;
  }
`

const HeroImage = styled(Image)`
  height: 100%;
  width: 100%;
`

const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${(props) => props.theme.borderSecondary};
  width: 48%;
  height: 90%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    justify-content: flex-start;
    height: max-content;
    border: none;
  }
`

const SliderContainer = styled.div`
  width: 48%;
  height: calc(100vh - 8rem);

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`
