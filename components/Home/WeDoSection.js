import styled from 'styled-components'

import HomeLocale from '../../data/lang/Home-en.json'

const WeDoSection = () => {
  return (
    <Section>
      <Title>{HomeLocale.weDo.title}</Title>
      <Desc>{HomeLocale.weDo.desc}</Desc>
    </Section>
  )
}

export default WeDoSection

const Section = styled.section`
  padding: 1rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: 0.1rem solid #e3c79d;
`

const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  color: #b4b4b4;
  font-weight: 700;
  font-size: 6rem;
  line-height: 8rem;
`

const Desc = styled.p`
  max-width: 56rem;
  margin: 0;
  padding-bottom: 1rem;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: justify;
  line-height: 2rem;
  color: #5c5c5c;
`
