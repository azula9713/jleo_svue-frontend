import styled from 'styled-components'
import CTASection from './CTASection'
import HeroSlider from './HeroSlider'

const HeroBanner = () => {
  return (
    <HeroSection>
      <CtaContainer>
        <CTASection />
      </CtaContainer>
      <SliderContainer>
        <HeroSlider />
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
  height: calc(100vh - 5rem);
  background-color: ${(props) => props.theme.bgPrimary};
`

const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: ${(props) => props.theme.borderSecondary};
  width: 45%;

  height: 90%;
`

const SliderContainer = styled.div`
  width: 45%;
  border-left: ${(props) => props.theme.borderPrimary};
`
