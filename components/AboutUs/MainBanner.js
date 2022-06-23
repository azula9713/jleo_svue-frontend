import styled from 'styled-components'
import TextContainer from './TextContainer'
import Image from 'next/image'

import aboutUsData from '../../data/constants/AboutUsData'

const MainBanner = () => {
  return (
    <MainSection>
      <TextSection>
        <TextContainer />
      </TextSection>
      <MainImageSection>
        <Image
          src={aboutUsData.mainImage}
          alt={aboutUsData.mainImageAlt}
          objectFit="cover"
          layout="fill"
        />
      </MainImageSection>
    </MainSection>
  )
}

export default MainBanner

const MainSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 35rem;
  background-color: ${(props) => props.theme.bgPrimary};
`

const TextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  height: 100%;
  padding: 1rem 3rem;
  background-image: linear-gradient(to right, #9e9e9e, #312e2b);
`

const MainImageSection = styled.div`
  width: 45%;
  height: 100%;
  position: relative;
`
