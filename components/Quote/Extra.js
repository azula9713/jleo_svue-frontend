import { useState } from 'react'
import styled from 'styled-components'

import AppointmentField from '../Appointment/AppointmentField'
import PickerTitle from './PickerTitle'
import { SectionContainer } from '../../styles/js/customStyles'

const Extra = () => {
  const [comment, setComment] = useState('')

  return (
    <SectionContainer>
      <PickerTitle title="Please feel free to add any additional details (optional)" />
      <AppointmentField
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        fieldName="desc"
        inputType="text"
        fieldType="textarea"
        textBoxRows={7}
      />
      <BottomBorder />
    </SectionContainer>
  )
}

export default Extra

const BottomBorder = styled.div`
  border-top: ${(props) => props.theme.borderPrimary};
  height: 0.1rem;
  width: 100%;
  margin-top: 2rem;
`
