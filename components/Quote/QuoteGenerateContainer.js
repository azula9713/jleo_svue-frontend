import styled from 'styled-components'

import UserTitle from '../Common/UserTitle'

import GenerateQuoteLocale from '../../data/lang/GenerateQuote-en.json'
import InfoSection, { InfoWrapper } from './InfoSection'
import CategoryPicker from './CategoryPicker'
import PropertyPicker from './PropertyPicker'
import BedroomPicker from './BedroomPicker'
import WorkPlan from './WorkPlan'
import AreaCheck from './AreaCheck'
import ConstructionBudget from './ConstructionBudget'
import WorkStart from './WorkStart'
import Extra from './Extra'
import UserData from './UserData'

const QuoteGenerateContainer = ({ method, category }) => {
  const qg = GenerateQuoteLocale

  const outlienCircleStyle = {
    marginRight: '1rem',
  }

  return (
    <MainContainer>
      <UserTitle titleMain={qg.title.main} subtitle={qg.title.subtitle} />
      <FormContainer>
        <InfoSection iconStyle={outlienCircleStyle} qg={qg} />
        <FormWrapper>
          {method === 'scratch' && <CategoryPicker />}
          {category === 'architecture' && <PropertyPicker />}
          {category === 'architecture' && <BedroomPicker />}
          {category === 'architecture' && <WorkPlan />}
          {category === 'architecture' && <AreaCheck />}
          {category === 'architecture' && <ConstructionBudget />}
          {category === 'architecture' && <WorkStart />}
          {category === 'architecture' && <Extra />}
          <UserData />
          <SubmitButton>Submit</SubmitButton>
        </FormWrapper>
      </FormContainer>
    </MainContainer>
  )
}

export default QuoteGenerateContainer

const MainContainer = styled.div`
  height: max-content;
  background-color: ${(props) => props.theme.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 5rem;
    width: 100%;
  }
`

const FormContainer = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 2rem 0.5rem;
  }
`

const FormWrapper = styled(InfoWrapper)`
  border-left: none;
  grid-column-start: 2;
  grid-column-end: 4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline;
    padding: 1rem 0.5rem;
    border-left: ${(props) => props.theme.borderSecondary};
  }
`

const SubmitButton = styled.button`
  background: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 0.2rem;
  padding: 0.5rem 3rem;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
  }
`
