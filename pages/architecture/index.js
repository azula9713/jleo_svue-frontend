import CaseStudyItem from '../../components/Architecture/CaseStudyItem'
import Footer from '../../components/Layout/Footer'
import HeadSection from '../../components/Layout/HeadSection'

import { MainSection } from '../../styles/js/customStyles'

const Architecture = () => {
  return (
    <>
      <HeadSection title="Architecture" />
      <MainSection>
        <CaseStudyItem
          align="right"
          title="Architecture"
          coverImg="/img/others/talk.jpg"
          leftImg="/img/others/comm-cover.jpg"
          subtitleVisible={false}
        />
      </MainSection>
      <Footer />
    </>
  )
}

export default Architecture
