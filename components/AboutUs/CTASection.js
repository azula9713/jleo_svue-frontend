import styled from 'styled-components'
import AboutUsLocale from '../../data/lang/AboutUs-en.json'

const CTASection = () => {
  return (
    <CtaWrapper>
      <Title>{AboutUsLocale.heroBanner.title}</Title>
      <Desc>{AboutUsLocale.heroBanner.desc1}</Desc>
      <Desc>{AboutUsLocale.heroBanner.desc2}</Desc>
      {/* <ActionContainer>
        <HeaderButton
          btnColor={defaultTheme.primary}
          btnText="I want a quote"
          btnIcon="DocumentTextIcon"
          textColor={defaultTheme.white}
          customWidth={'16rem'}
          borderColor={defaultTheme.primary}
        />
        <HeaderButton
          btnColor="transparent"
          btnText="I want an appointment"
          btnIcon="CalendarIcon"
          textColor={defaultTheme.primary}
          customWidth={'16rem'}
          borderColor={defaultTheme.primary}
        />
      </ActionContainer> */}
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
  color: ${(props) => props.theme.textPrimary};
  text-transform: uppercase;
  text-align: left;
  letter-spacing: 0.3rem;
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 1.1rem;
`
const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
`
