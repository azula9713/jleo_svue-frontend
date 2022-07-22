import { useState } from 'react'
import styled from 'styled-components'

import AppointmentField from '../Appointment/AppointmentField'

import CreateAppointmentLocale from '../../data/lang/CreateAppointment-en.json'

const UserData = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [addressFirst, setAddressFirst] = useState('')
  const [addressSecond, setAddressSecond] = useState('')
  const [postalCode, setPostalCode] = useState('')

  return (
    <UserDataContainer>
      <LeftSection>
        <AppointmentField
          labelTitle={CreateAppointmentLocale.form.name}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          fieldName="fullName"
          inputType="text"
          fieldType="input"
        />

        <AppointmentField
          labelTitle={CreateAppointmentLocale.form.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fieldName="email"
          inputType="email"
          fieldType="input"
        />
        <AppointmentField
          labelTitle={CreateAppointmentLocale.form.phone}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fieldName="phone"
          inputType="tel"
          fieldType="input"
        />
      </LeftSection>
      <RightSection>
        <AppointmentField
          labelTitle={CreateAppointmentLocale.form.addressFirst}
          value={addressFirst}
          onChange={(e) => setAddressFirst(e.target.value)}
          fieldName="addressFirst"
          inputType="text"
          fieldType="input"
        />

        <AppointmentField
          labelTitle={CreateAppointmentLocale.form.addressSecond}
          value={addressSecond}
          onChange={(e) => setAddressSecond(e.target.value)}
          fieldName="addressSecond"
          inputType="text"
          fieldType="input"
        />
        <AppointmentField
          labelTitle={CreateAppointmentLocale.form.postalCode}
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          fieldName="postalCode"
          inputType="text"
          fieldType="input"
        />
      </RightSection>
    </UserDataContainer>
  )
}

export default UserData

const UserDataContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`

const LeftSection = styled.div`
  width: 47%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`
const RightSection = styled(LeftSection)``
