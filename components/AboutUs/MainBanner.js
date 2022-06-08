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
        <MainImage
          src={aboutUsData.mainImage}
          alt={aboutUsData.mainImageAlt}
          objectFit="cover"
          height={100}
          width={100}
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
  height: 100%;
  background-color: ${(props) => props.theme.bgPrimary};
`

const TextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 55%;
  height: 100%;
  padding: 2rem 3rem;
`

const MainImageSection = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const MainImage = styled(Image)`
  height: 100%;
  width: 100%;
`
