import styled from 'styled-components'

const Hero = ({ heroImg, title }) => {
  return (
    <HeroContainer bg={heroImg}>
      <Info>
        <Title>{title}</Title>
      </Info>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.section`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  height: 30rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding: 2.5rem 2rem;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1rem;
    height: 40rem;
    justify-content: center;
  }
`

const Info = styled.div`
  z-index: 1;
  width: 100%;
  background-image: linear-gradient(to right, #696969, #312e2b);
  padding: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 2rem 1rem;
  }
`

const Title = styled.h1`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  text-align: left;
  font-weight: 700;
  letter-spacing: 0.35em;
  font-size: 2.5rem;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.1rem;
  }
`
