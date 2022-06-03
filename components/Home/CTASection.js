import styled from 'styled-components'
import HomeLocale from '../../data/lang/Home-en.json'
import HeaderButton from '../Common/HeaderButton'

const CTASection = () => {
  return (
    <CtaWrapper>
      <Title>{HomeLocale.heroBanner.title}</Title>
      <Desc>{HomeLocale.heroBanner.desc}</Desc>
      <ActionContainer>
        <HeaderButton
          btnColor="#485879"
          btnText="I want a quote"
          btnIcon="DocumentTextIcon"
          textColor="#ffffff"
          customWidth={'16rem'}
          borderColor="#485879"
        />
        <HeaderButton
          btnColor="transparent"
          btnText="I want an appointment"
          btnIcon="CalendarIcon"
          textColor="#5C5C5C"
          customWidth={'16rem'}
          borderColor="#5C5C5C"
        />
      </ActionContainer>
    </CtaWrapper>
  )
}

export default CTASection

const CtaWrapper = styled.div`
  padding: 2rem;
  max-width: 37rem;
`

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: 800;
  line-height: 3rem;
  color: #5c5c5c;
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 0.3rem;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 0.95rem;
  line-height: 1.3rem;
  color: #5c5c5c;
`
const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`
