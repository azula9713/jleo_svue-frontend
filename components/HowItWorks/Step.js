import styled from 'styled-components'

const Step = ({ step }) => {
  return (
    <StepContainer>
      <CounterSection>{step.step}</CounterSection>
      <DetailSection>
        <StepTitle>{step.name}</StepTitle>
        <StepContext>{step.description}</StepContext>
      </DetailSection>
    </StepContainer>
  )
}

export default Step

const StepContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    margin: 1rem 0.5rem;
  }
`

const CounterSection = styled.div`
  //light gray color with thinnest font
  color: ${({ theme }) => theme.textSecondary};
  font-size: 2rem;
  font-weight: 300;
  padding: 2rem;
  width: 35%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const DetailSection = styled.div`
  color: ${({ theme }) => theme.white};
  width: 65%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

const StepTitle = styled.h5`
  margin: 0.5rem 0;
  font-size: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    font-size: 1.2rem;
  }
`

const StepContext = styled.p`
  margin: 0;
  font-size: 0.9rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
  }
`
