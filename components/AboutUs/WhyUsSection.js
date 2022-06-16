import styled from 'styled-components'

import WhyUsItem from './WhyUsItem'
import SectionTitle from '../Common/SectionTitle'

import WhyUsItems from '../../data/constants/WhyUsItems'
import AboutUsLocale from '../../data/lang/AboutUs-en.json'

const WhyUsSection = () => {
  return (
    <>
      <Info>
        <SectionTitle title={AboutUsLocale.whyUs.title} />
        <Desc>{AboutUsLocale.whyUs.desc}</Desc>
      </Info>
      <ItemsWrapper>
        {WhyUsItems.map((item) => (
          <WhyUsItem key={item.id} item={item} />
        ))}
      </ItemsWrapper>
    </>
  )
}

export default WhyUsSection

const Info = styled.div`
  padding: 2rem 6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Desc = styled.p`
  margin: 0;
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2rem;
  color: ${(props) => props.theme.textPrimary};
`

const ItemsWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`
