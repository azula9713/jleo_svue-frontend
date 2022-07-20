import styled from 'styled-components'

import HeadSection from '../../../components/Layout/HeadSection'

const Commercial = () => {
  return (
    <>
      <HeadSection title="Commercial" />
      <MainSection>Hi</MainSection>
    </>
  )
}

export default Commercial

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem;
  }
`
