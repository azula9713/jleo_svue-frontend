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
  padding: 1rem 6rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    padding: 1rem 2rem;
  }
`

const Desc = styled.p`
  margin: 0;
  padding: 1rem 0;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: center;
  line-height: 2rem;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 0.9rem;
    line-height: 1.4rem;
  }
`

const ItemsWrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    flex-direction: column;
  }
`
