import Portfolio from '../../../components/Portfolio/Portfolio'

import SampleImages from '../../../data/constants/json/Images.json'

const PlanningApplications = () => {
  return (
    <Portfolio
      title="Planning Applications"
      images={SampleImages.categories.all}
      bgImage="/img/others/talk.jpg"
      coverImg="/img/others/comm-cover.jpg"
      leftImg="/img/others/5.jpg"
    />
  )
}

export default PlanningApplications
