import styled from 'styled-components'
import Step from '../../components/HowItWorks/Step'

import Footer from '../../components/Layout/Footer'
import HeadSection from '../../components/Layout/HeadSection'

const HowItWorks = () => {
  const workSteps = [
    {
      id: 1,
      step: 'STEP 01',
      name: 'Get Your Estimate',
      description: 'You can get a rough estimate of how much it would cost.',
    },
    {
      id: 2,
      step: 'STEP 02',
      name: 'Survey & Design Consultation',
      description:
        'We will visit your premises and discuss with you what it is that we can do for your spaces.',
    },
    {
      id: 3,
      step: 'STEP 03',
      name: 'Drawing Production',
      description:
        'Using the latest CAD software, we will produce draft drawings for you to review and just let us know before submitting your application.',
    },
    {
      id: 4,
      step: 'STEP 04',
      name: 'Application',
      description:
        "When you're happy, we'll submit the application to your local council and liaise with them on behalf of you.",
    },
  ]

  return (
    <>
      <HeadSection title="How It Works" />
      <MainSection>
        <Background bg="/images/lets-talk-bg.jpeg">
          <TextField>
            <TextFieldLabel>Our Planning Process</TextFieldLabel>
          </TextField>
          <Steps>
            {workSteps.map((step) => (
              <Step key={step.id} step={step} />
            ))}
          </Steps>
        </Background>
      </MainSection>
      <Footer />
    </>
  )
}

export default HowItWorks

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  max-width: 2000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
  }
`

const Background = styled.div`
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  height: calc(100vh - 5rem);
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    padding: 3rem 0;
    margin-top: 5rem;
    height: auto;
  }
`

const TextField = styled.div`
  width: 35%;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const TextFieldLabel = styled.label`
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  width: 100%;
  font-size: 4rem;
  font-weight: 700;
  line-height: 6.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
    line-height: 2rem;
    text-align: center;
  }
`

const Steps = styled.div`
  width: 65%;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
