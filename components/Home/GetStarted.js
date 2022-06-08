import styled from 'styled-components'

import TitleContainer from '../Common/TitleContainer'
import HeaderButton from '../Common/HeaderButton'

import HomeLocale from '../../data/lang/Home-en.json'
import defaultTheme from '../../styles/js/themeConfig'

const GetStarted = () => {
  return (
    <CTASection>
      <TitleContainer title={HomeLocale.getStarted.title} />
      <CTAContainer>
        <Quote>
          <Subtitle>{HomeLocale.getStarted.subTitleQuote}</Subtitle>
          <Desc>{HomeLocale.getStarted.quoteDesc}</Desc>
          <CTABtn>
            <HeaderButton
              btnColor={defaultTheme.primary}
              btnText="I want a quote"
              btnIcon="DocumentTextIcon"
              textColor={defaultTheme.white}
              customWidth={'16rem'}
              borderColor={defaultTheme.primary}
            />
          </CTABtn>
        </Quote>
        <Appointment>
          <Subtitle>{HomeLocale.getStarted.subTitleAppointment}</Subtitle>
          <Desc>{HomeLocale.getStarted.appointmentDesc}</Desc>
          <CTABtn>
            <HeaderButton
              btnColor="transparent"
              btnText="I want an appointment"
              btnIcon="CalendarIcon"
              textColor={defaultTheme.primary}
              customWidth={'16rem'}
              borderColor={defaultTheme.primary}
            />
          </CTABtn>
        </Appointment>
      </CTAContainer>
    </CTASection>
  )
}

export default GetStarted

const CTASection = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: ${(props) => props.theme.borderSecondary};
  border-bottom: none;
`
const CTAContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  border-top: ${(props) => props.theme.borderSecondary};
  border-right: ${(props) => props.theme.borderSecondary};
  padding: 2rem;
`

const Appointment = styled(Quote)`
  border-right: none;
`
const Subtitle = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textPrimary};
`
const Desc = styled.p`
  width: 65%;
  line-height: 2rem;
  color: ${(props) => props.theme.textPrimary};
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 1400px) {
    line-height: 1.5rem;
    font-size: 0.9rem;
  }
`
const CTABtn = styled.div`
  margin: 3rem 0;
`
