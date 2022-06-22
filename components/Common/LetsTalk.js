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

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 0 2rem;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`
const Title = styled.h3`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 4rem;
  z-index: 1;
  letter-spacing: 0.35em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }
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
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    text-align: center;
  }
`
