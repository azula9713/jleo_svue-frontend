import styled from 'styled-components'

import PickerTitle from './PickerTitle'
import { ItemsContainer, SectionContainer } from '../../styles/js/customStyles'
import PickerItem from './PickerItem'
import { useState } from 'react'

const AreaCheck = () => {
  const [conserveAnswer, setConserveAnswer] = useState('no')
  const [simialrProjectsAnswer, setSimialrProjectsAnswer] = useState('no')

  const Answers = [
    {
      id: 1,
      name: 'Yes',
      slug: 'yes',
    },
    {
      id: 2,
      name: 'No',
      slug: 'no',
    },
    {
      id: 3,
      name: 'Not Sure',
      slug: 'not-sure',
    },
  ]

  return (
    <SectionContainer>
      <ConserveSection>
        <PickerTitle title="Is this building listed or in a conservationa area?" />
        <ItemsContainer>
          {Answers.map((ans) => (
            <PickerItem
              key={ans.id}
              value={ans.slug}
              label={ans.name}
              selected={conserveAnswer}
              action={() => setConserveAnswer(ans.slug)}
            />
          ))}
        </ItemsContainer>
      </ConserveSection>
      <SimilarProjectsSection>
        <PickerTitle title="Is there any history of similar projects being carried out in this area?" />
        <ItemsContainer>
          {Answers.map((ans) => (
            <PickerItem
              key={ans.id}
              value={ans.slug}
              label={ans.name}
              selected={simialrProjectsAnswer}
              action={() => setSimialrProjectsAnswer(ans.slug)}
            />
          ))}
        </ItemsContainer>
      </SimilarProjectsSection>
    </SectionContainer>
  )
}

export default AreaCheck

const ConserveSection = styled.div`
  margin-bottom: 4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }
`

const SimilarProjectsSection = styled(ConserveSection)``
