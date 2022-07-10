import Head from 'next/head'
import styled from 'styled-components'
import AppointmentForm from '../components/Appointment/AppointmentForm'

import Header from '../components/Layout/Header'

import CreateAppointmentLocale from '../data/lang/CreateAppointment-en.json'

const CreateAppointment = () => {
  const crl = CreateAppointmentLocale

  return (
    <div style={{ backgroundColor: '#fff' }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>J&apos;LEO SVUE - Create Appointment</title>
      </Head>
      <Header />
      <AppointmentContainer>
        <TitleWrapper>
          <Title>{crl.title.main}</Title>
          <SubTitle>{crl.title.subtitle}</SubTitle>
        </TitleWrapper>
        <FormContainer>
          <InfoWrapper>
            <InfoItem>{crl.info.info1}</InfoItem>
            <InfoItem>{crl.info.info2}</InfoItem>
            <InfoItem>{crl.info.info3}</InfoItem>
          </InfoWrapper>
          <FormWrapper>
            <FormTitle>{crl.form.title}</FormTitle>
            <AppointmentForm />
          </FormWrapper>
        </FormContainer>
      </AppointmentContainer>
    </div>
  )
}

export default CreateAppointment

const AppointmentContainer = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 5rem;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`

const Title = styled.h5`
  color: ${(props) => props.theme.textPrimary};
  margin: 0;
  font-size: 2rem;
`

const SubTitle = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textPrimary};
  margin-top: 0.4rem;
`

const FormContainer = styled.div`
  display: grid;
  gap: 0;
  grid-template-columns: repeat(3, 1fr);
  margin: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
`

const InfoWrapper = styled.div`
  border: ${(props) => props.theme.borderSecondary};
  padding: 3rem;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const FormWrapper = styled(InfoWrapper)`
  border-left: none;
  grid-column-start: 2;
  grid-column-end: 4;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: inline;
    padding: 1rem 0.5rem;
    border-left: ${(props) => props.theme.borderSecondary};
  }
`

const InfoItem = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textTertiary};
  margin: 3rem 0;
  cursor: default;

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`

const FormTitle = styled.label`
  margin: 0;
  color: ${(props) => props.theme.textTertiary};
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 1.4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    font-size: 1.2rem;
  }
`
