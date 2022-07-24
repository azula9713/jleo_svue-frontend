import CaseStudyItem from '../../components/Architecture/CaseStudyItem'
import ProductItem from '../../components/Architecture/ProductItem'
import LetsTalk from '../../components/Common/LetsTalk'
import Footer from '../../components/Layout/Footer'
import HeadSection from '../../components/Layout/HeadSection'

import { MainSection } from '../../styles/js/customStyles'

const Architecture = () => {
  const architectProds = [
    {
      id: 1,
      name: 'Commercial',
      desc: `We offer a design and build service in London, transforming workspaces into productive places. 
      We also provide our interior services to other companies for their commercial interiors needs--we have experience of designing spaces that work well across many industries! 
      The best thing about working with us? No matter what type or size your project is on - 
      you can count on seeing originality at every stage as we go along together through planning stages all the way up.`,
      path: '/architecture/commercial',
      sideImage: '/images/side.png',
      bannerImage: '/images/talk.jpg',
    },
    {
      id: 2,
      name: 'Planning Application',
      desc: `We offer a design and build service in London, transforming workspaces into productive places. 
      We also provide our interior services to other companies for their commercial interiors needs--we have experience of designing spaces that work well across many industries! 
      The best thing about working with us? No matter what type or size your project is on - 
      you can count on seeing originality at every stage as we go along together through planning stages all the way up.`,
      path: '/architecture/planning-application',
      sideImage: '/images/side.png',
      bannerImage: '/images/talk.jpg',
    },
    {
      id: 3,
      name: 'Change of build',
      desc: `We offer a design and build service in London, transforming workspaces into productive places. 
      We also provide our interior services to other companies for their commercial interiors needs--we have experience of designing spaces that work well across many industries! 
      The best thing about working with us? No matter what type or size your project is on - 
      you can count on seeing originality at every stage as we go along together through planning stages all the way up.`,
      path: '/architecture/change-of-build',
      sideImage: '/images/side.png',
      bannerImage: '/images/talk.jpg',
    },
  ]

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
        {architectProds.map((prod) => (
          <ProductItem key={prod.id} product={prod} />
        ))}
        <LetsTalk bgImage="/img/others/talk.jpg" />
      </MainSection>
      <Footer />
    </>
  )
}

export default Architecture
