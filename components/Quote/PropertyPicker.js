import styled from 'styled-components'

import PickerTitle from './PickerTitle'
import PropertyItem from './PropertyItem'
import { PropertyItems } from '../../data/constants/QuoteItems'
import { SectionContainer } from '../../styles/js/customStyles'

const PropertyPicker = () => {
  return (
    <SectionContainer>
      <PickerTitle title="What type of property you currently own?" />
      <PropertyContainer>
        {PropertyItems.map((prp) => (
          <PropertyItem key={prp.id} item={prp} />
        ))}
      </PropertyContainer>
    </SectionContainer>
  )
}

export default PropertyPicker

const PropertyContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow-x: hidden;
    /* flex-direction: column; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`
