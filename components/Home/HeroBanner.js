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
  height: 100vh;
  background-color: #eeeeee;
`

const CtaContainer = styled.div`
  border-right: 0.1rem solid #ccc;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const SliderContainer = styled.div`
  width: 100%;
`
