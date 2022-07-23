import { useRecoilValue } from 'recoil'

import { quoteCategoryState, quoteMethodState } from '../atoms/quoteAtom'

import HeadSection from '../components/Layout/HeadSection'
import Footer from '../components/Layout/Footer'
import QuoteGenerateContainer from '../components/Quote/QuoteGenerateContainer'
import { MainSection } from '../styles/js/customStyles'

const CreateQuote = () => {
  const quoteMethod = useRecoilValue(quoteMethodState)
  const category = useRecoilValue(quoteCategoryState)

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <HeadSection title="Generate Free Quote" />
      <MainSection>
        <QuoteGenerateContainer method={quoteMethod} category={category} />
      </MainSection>
      <Footer />
    </div>
  )
}

export default CreateQuote
