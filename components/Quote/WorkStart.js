import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { DayPicker } from 'react-day-picker'
import Modal from 'react-modal'

import PickerTitle from './PickerTitle'

import MonthConverter from '../../utils/MonthConverter'
import {
  dayPickerCustomStyles,
  ItemsContainer,
  modalBasicStyles,
  SectionContainer,
} from '../../styles/js/customStyles'
import 'react-day-picker/dist/style.css'

const WorkStart = () => {
  const [pickerVisible, setPickerVisible] = useState(false)
  const [date, setDate] = useState(new Date())
  const [exactDate, setExactDate] = useState('')
  const [exactMonth, setExactMonth] = useState('')
  const [exactYear, setExactYear] = useState('')

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
    <SectionContainer>
      <PickerTitle title="Whem would you like to start the work?" />
      <ItemsContainer>
        <DateDisplay onClick={handleModal}>
          <DateSection>{exactDate}</DateSection>
          <MonthSection>{exactMonth}</MonthSection>
          <YearSection>{exactYear}</YearSection>
        </DateDisplay>
      </ItemsContainer>
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
            ]}
          />
        </Modal>
      )}
    </SectionContainer>
  )
}

export default WorkStart

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
