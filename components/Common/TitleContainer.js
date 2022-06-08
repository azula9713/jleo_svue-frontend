import styled from 'styled-components'

import SectionTitle from './SectionTitle'

const TitleContainer = ({ title }) => {
  return (
    <Container>
      <SectionTitle title={title} />
    </Container>
  )
}

export default TitleContainer

const Container = styled.div`
  padding: 2rem;

  @media (max-width: 1400px) {
    padding: 2rem 1.5rem;
  }
`
