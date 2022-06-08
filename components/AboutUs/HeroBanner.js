import styled from 'styled-components'
import CTASection from './CTASection'

import aboutUsData from '../../data/constants/AboutUsData'

const HeroBanner = () => {
  return (
    <HeroSection>
      <CtaContainer>
        <CTASection />
      </CtaContainer>
      <HeroImageContainer>
        {/* <HeroImage src={aboutUsData.mainImage} alt={aboutUsData.mainImageAlt} /> */}

        <HeroImage src={aboutUsData.mainImage} alt={aboutUsData.mainImageAlt} />
      </HeroImageContainer>
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

const HeroImageContainer = styled.div`
  width: 48%;
  height: calc(100vh - 8rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0vh;
    left: 0;
    opacity: 0.5;
    overflow: hidden;
    //add linear-gradient background
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Slider = styled.div`
  justify-content: flex-start;

  &::before {
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    bottom: 0vh;
    left: 0;
    opacity: 0.5;
    overflow: hidden;
    //add linear-gradient background
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }
`
