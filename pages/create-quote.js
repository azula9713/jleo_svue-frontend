import { useRecoilValue } from 'recoil'
import styled from 'styled-components'

import { quoteCategoryState, quoteMethodState } from '../atoms/quoteAtom'

import HeadSection from '../components/Layout/HeadSection'
import QuoteGenerateContainer from '../components/Quote/QuoteGenerateContainer'

const CreateQuote = () => {
  const quoteMethod = useRecoilValue(quoteMethodState)
  const category = useRecoilValue(quoteCategoryState)

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <HeadSection title="Generate Free Quote" />
      <MainSection>
        <QuoteGenerateContainer method={quoteMethod} category={category} />
      </MainSection>
    </div>
  )
}

export default CreateQuote

const MainSection = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-bottom: 0;
  max-width: 2000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem;
  }
`
