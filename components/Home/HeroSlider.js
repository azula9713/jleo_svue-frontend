import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useSetRecoilState } from 'recoil'
import styled, { css } from 'styled-components'

import { hoveredPortfolioAtom } from '../../atoms/miniPortfolioAtom'

const HeroSlider = ({ slides, isPortfolio, current }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const setCurrSlide = useSetRecoilState(hoveredPortfolioAtom)
  const timeout = useRef(null)

  const length = slides.length

  function nextSlide() {
    clearTimeout(timeout.current)
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
  }

  function prevSlide() {
    clearTimeout(timeout.current)
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
  }

  useEffect(() => {
    clearTimeout(timeout.current)
    timeout.current = setTimeout(nextSlide, 5000)

    if (isPortfolio) {
      setCurrSlide(currentSlide)
    }

    return () => clearTimeout(timeout.current)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, length])

  useEffect(() => {
    if (isPortfolio) {
      setCurrentSlide(current)
    }
  }, [current])

  if (!Array.isArray(slides) || slides.length === 0) {
    return null
  }

  return (
    <SliderContainer>
      <SliderWrapper>
        {slides?.map((slide, index) => (
          <HeroSlide key={index}>
            {index === currentSlide && (
              <Slider>
                <HeroImage src={slide.image} alt={slide.alt} layout="fill" />
              </Slider>
            )}
          </HeroSlide>
        ))}
        <SliderButtons>
          <PrewArrow onClick={prevSlide}>Previous</PrewArrow>
          <NextArrow onClick={nextSlide}>Next</NextArrow>
        </SliderButtons>
      </SliderWrapper>
    </SliderContainer>
  )
}

export default HeroSlider

const arrowButtons = css`
  color: ${(props) => props.theme.textSecondary};
  cursor: pointer;
  background: transparent;
  margin-right: 1rem;
  border: none;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 1rem;

  &:hover {
    color: ${(props) => props.theme.white};
  }
`

const SliderContainer = styled.div`
  height: 100%;
  position: relative;
  overflow: hidden;
`

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`
const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`

const HeroImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: fadeIn 0.9s ease-in-out;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

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

const SliderButtons = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 3rem;
  z-index: 10;
  display: flex;
`

const PrewArrow = styled.button`
  ${arrowButtons}
`

const NextArrow = styled(PrewArrow)``
