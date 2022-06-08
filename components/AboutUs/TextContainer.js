import styled from 'styled-components'
import AboutUsLocale from '../../data/lang/AboutUs-en.json'

const TextContainer = () => {
  return (
    <TextWrapper>
      <Title>{AboutUsLocale.heroBanner.title}</Title>
      <Desc>{AboutUsLocale.heroBanner.desc1}</Desc>
      <Desc>{AboutUsLocale.heroBanner.desc2}</Desc>
    </TextWrapper>
  )
}

export default TextContainer

const TextWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  /* max-width: 37rem; */
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 6.5em;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: #fdfdfd;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 1.1rem;
  width: 80%;
  text-align: justify;
`
