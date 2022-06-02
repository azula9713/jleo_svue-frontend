import styled from 'styled-components'
import HomeLocale from '../../data/lang/Home-en.json'

const CTASection = () => {
  return (
    <div>
      <Title>{HomeLocale.heroBanner.title}</Title>
    </div>
  )
}

export default CTASection

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 3rem;
  color: #5c5c5c;
  text-transform: uppercase;
  text-align: left;
  max-width: 38rem;
  letter-spacing: 0.3rem;
`
