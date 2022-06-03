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
  background-color: #eeeeee;
`

const CtaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 0.1rem solid #e3c79d;
  width: 45%;
  margin: 2rem;
  height: 90%;
`

const SliderContainer = styled.div`
  width: 45%;
  border-left: 0.1rem solid #ccc;
`
