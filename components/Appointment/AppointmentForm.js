import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DayPicker } from 'react-day-picker'
import Modal from 'react-modal'

import AppointmentField from './AppointmentField'
import FieldLabel from '../Common/FieldLabel'

import CreateAppointmentLocale from '../../data/lang/CreateAppointment-en.json'
import MonthConverter from '../../utils/MonthConverter'

import {
  dayPickerCustomStyles,
  modalBasicStyles,
} from '../../styles/js/customStyles'
import 'react-day-picker/dist/style.css'

const AppointmentForm = () => {
  Modal.setAppElement('#root')

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [date, setDate] = useState(new Date())
  const [timeSlot, setTimeSlot] = useState('')
  const [description, setDescription] = useState('')
  const [pickerVisible, setPickerVisible] = useState(false)
  const [exactDate, setExactDate] = useState('')
  const [exactMonth, setExactMonth] = useState('')
  const [exactYear, setExactYear] = useState('')

  const timeSlots = [
    {
      id: 1,
      value: '10AM',
    },
    {
      id: 2,
      value: '12NOON',
    },
    {
      id: 3,
      value: '2PM',
    },
    {
      id: 4,
      value: '4PM',
    },
  ]

  const handleModal = () => {
    setPickerVisible(!pickerVisible)
  }

  useEffect(() => {
    setPickerVisible(false)

    if (date) {
      setExactDate(date.getDate())
      setExactMonth(MonthConverter[date.getMonth()])
      setExactYear(date.getFullYear())
    }

    return () => {
      setPickerVisible(false)
    }
  }, [date])

  return (
    <FormContainer
      onSubmit={(e) => {
        e.preventDefault()
        alert('submitted')
      }}
    >
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
      <AppointmentField
        labelTitle={CreateAppointmentLocale.form.desc}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fieldName="desc"
        inputType="text"
        fieldType="textarea"
        textBoxRows={10}
      />
      <TitleLabel>{CreateAppointmentLocale.form.freeTalk}</TitleLabel>
      <CustomContainer>
        <DateWrapper>
          <Label labelTitle={CreateAppointmentLocale.form.date} />
          <DateDisplay onClick={handleModal}>
            <DateSection>{exactDate}</DateSection>
            <MonthSection>{exactMonth}</MonthSection>
            <YearSection>{exactYear}</YearSection>
          </DateDisplay>
          {pickerVisible && (
            <Modal
              isOpen={pickerVisible}
              onRequestClose={handleModal}
              style={modalBasicStyles}
              contentLabel="Select the date"
            >
              <style>{dayPickerCustomStyles}</style>
              <DayPicker
                mode="single"
                modifiersClassNames={{
                  selected: 'my-selected',
                }}
                modifiersStyles={{
                  disabled: { fontSize: '75%' },
                }}
                selected={date}
                onSelect={setDate}
                disabled={[
                  new Date(),
                  {
                    //disabling weekend selection
                    dayOfWeek: [0, 6],
                  },

                  {
                    //disabling previous dates
                    before: new Date(),
                  },
                  {
                    //add 7 days from today date
                    after: new Date(
                      new Date().getTime() + 7 * 24 * 60 * 60 * 1000
                    ),
                  },
                ]}
              />
            </Modal>
          )}
        </DateWrapper>
        <TimeSlotWrapper>
          <Label labelTitle={CreateAppointmentLocale.form.time} />
          <SlotsContainer>
            {timeSlots.map((slot) => (
              <Slot
                selectedSlot={timeSlot}
                key={slot.id}
                faceValue={slot.value}
                onClick={() => setTimeSlot(slot.value)}
              >
                {slot.value}
              </Slot>
            ))}
          </SlotsContainer>
        </TimeSlotWrapper>
      </CustomContainer>
      <SubmitButtonContainer>
        <SubmitButton type="submit">Submit</SubmitButton>
      </SubmitButtonContainer>
    </FormContainer>
  )
}

export default AppointmentForm

const FormContainer = styled.form`
  margin-top: 2rem;
  width: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

const TitleLabel = styled.label`
  color: ${(props) => props.theme.textTertiary};
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 1.4rem;
  margin-top: 1rem;
`

const CustomContainer = styled.div`
  margin-top: 2rem;
`

const Label = styled(FieldLabel)`
  font-size: 1rem;
  color: ${(props) => props.theme.textPrimary};
`

const DateWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
`

const DateDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 50%;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
  }
`

const DateSection = styled.div`
  border: ${(props) => props.theme.borderPrimary};
  padding: 0.7rem 1rem;
  margin-top: 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  color: ${(props) => props.theme.textPrimary};
`

const MonthSection = styled(DateSection)``

const YearSection = styled(DateSection)``

const TimeSlotWrapper = styled.div``

const SlotsContainer = styled(DateDisplay)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-start;
`

const Slot = styled(DateSection)`
  width: 7rem;
  color: ${(props) =>
    props.selectedSlot === props.faceValue && props.theme.white};
  background: ${(props) =>
    props.selectedSlot === props.faceValue && props.theme.primary};
  margin-right: 1rem;
`

const SubmitButtonContainer = styled.div`
  padding: 6rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
  }
`

const SubmitButton = styled.button`
  border: ${(props) => props.theme.borderTertiary};
  /* background: ${(props) => props.theme.white}; */
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.primary};
  text-align: center;
  text-transform: uppercase;
  /* color: ${(props) => props.theme.primary}; */
  letter-spacing: 0.5rem;
  padding: 1rem 4rem;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.primaryDark};
  }
`
