import { useState } from 'react'
import styled from 'styled-components'

import PickerTitle from './PickerTitle'
import PickerItem from './PickerItem'
import { ItemsContainer, SectionContainer } from '../../styles/js/customStyles'

const BedroomPicker = () => {
  const [bedRooms, setBedRooms] = useState('1')

  const bedRoomsCollection = [
    {
      id: 1,
      name: '1 - 4',
      value: '1',
    },
    {
      id: 2,
      name: '5 - 6',
      value: '5',
    },
    {
      id: 3,
      name: '7 or more',
      value: '7',
    },
  ]

  return (
    <SectionContainer>
      <PickerTitle title="How many bedrooms do you have?" />
      <ItemsContainer>
        {bedRoomsCollection.map((bed) => (
          <PickerItem
            key={bed.id}
            value={bed.value}
            label={bed.name}
            action={() => setBedRooms(bed.value)}
            selected={bedRooms}
          />
        ))}
      </ItemsContainer>
    </SectionContainer>
  )
}

export default BedroomPicker
