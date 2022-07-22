import { useState } from 'react'
import styled from 'styled-components'

import PickerTitle from './PickerTitle'
import { ItemsContainer, SectionContainer } from '../../styles/js/customStyles'

const ConstructionBudget = () => {
  const Budgets = [
    {
      value: '50000',
      label: 'Less than £50,000',
    },
    {
      value: '100000',
      label: '£50,000 - £100,000',
    },
    {
      value: '150000',
      label: '£100,000 - £150,000',
    },
    {
      value: '200000',
      label: '£150,000 - £200,000',
    },
    {
      value: '300000',
      label: '£200,000 - £300,000',
    },
    {
      value: '400000',
      label: '£300,000 - £400,000',
    },
    {
      value: '500000',
      label: '£400,000 - £500,000',
    },
    {
      value: '1M',
      label: '£500,000 - £1M',
    },
    {
      value: '5M',
      label: '£1M - £5M',
    },
    {
      value: '5MPlus',
      label: 'More than £5M',
    },
  ]

  const [selectedBudget, setSelectedBudget] = useState('50000')

  return (
    <SectionContainer>
      <PickerTitle title="What is your estimated construction budget?" />
      <PickerContainer>
        <BudgetPicker
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
        >
          {Budgets.map((budget, index) => (
            <option key={index} value={budget.value}>
              {budget.label}
            </option>
          ))}
        </BudgetPicker>
      </PickerContainer>
    </SectionContainer>
  )
}

export default ConstructionBudget

const BudgetPicker = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.textPrimary};
  border: ${({ theme }) => theme.borderPrimary};

  &:focus {
    outline: none;
  }
`

const PickerContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`
