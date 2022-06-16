import styled from 'styled-components'

const LetsTalk = ({ bgImage }) => {
  return (
    <LetsTalkContainer bg={bgImage}>
      <Title>Lets Talk</Title>
      <CTA>I want a quote</CTA>
    </LetsTalkContainer>
  )
}

export default LetsTalk

const LetsTalkContainer = styled.section`
  //set image background
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  height: 24rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  padding: 0 5rem;
  align-items: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`
const Title = styled.h3`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4rem;
  z-index: 1;
  letter-spacing: 0.35em;
`

const CTA = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  z-index: 1;
  background-color: ${(props) => props.theme.primary};
  letter-spacing: 0.21em;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 1.4rem 2.4rem;
`
