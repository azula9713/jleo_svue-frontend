import styled from 'styled-components'
import { Fade } from 'react-reveal'

import HeaderButton from '../Common/HeaderButton'

import HomeLocale from '../../data/lang/Home-en.json'
import defaultTheme from '../../styles/js/themeConfig'

const CTASection = () => {
  return (
    <CtaWrapper>
      <Fade left ssrFadeout duration={500}>
        <Title>{HomeLocale.heroBanner.title}</Title>
        <Desc>{HomeLocale.heroBanner.desc}</Desc>
      </Fade>
      <Fade left ssrFadeout duration={1000}>
        <ActionContainer>
          <HeaderButton
            btnColor={defaultTheme.primary}
            btnText="I want a quote"
            btnIcon="DocumentTextIcon"
            textColor={defaultTheme.white}
            customWidth={'17.5rem'}
            borderColor={defaultTheme.primary}
            link="/create-quote"
          />
          <HeaderButton
            btnColor="transparent"
            btnText="I want an appointment"
            btnIcon="CalendarIcon"
            textColor={defaultTheme.primary}
            customWidth={'17.5rem'}
            borderColor={defaultTheme.primary}
            link="/create-appointment"
          />
        </ActionContainer>
      </Fade>
    </CtaWrapper>
  )
}

export default CTASection

const CtaWrapper = styled.div`
  padding: 2rem;
  max-width: 40rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1 0.5rem;
    max-width: max-content;
    width: 100%;
    height: 100%;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.2rem;
    letter-spacing: 1eem;
    line-height: 2rem;
  }
`

const Desc = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.textPrimary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 0.9rem;
  }
`
const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
  }
`
