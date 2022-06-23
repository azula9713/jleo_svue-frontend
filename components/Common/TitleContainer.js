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

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0rem 1.5rem;
  }
`
