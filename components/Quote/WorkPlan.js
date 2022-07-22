import PickerTitle from './PickerTitle'
import { ItemsContainer, SectionContainer } from '../../styles/js/customStyles'
import styled from 'styled-components'
import { WorkPlans } from '../../data/constants/QuoteItems'

const WorkPlan = () => {
  return (
    <SectionContainer>
      <PickerTitle title="What type of work do you plan on doing?" />
      <ItemsContainer>
        {WorkPlans.map((wp) => (
          <WorkPlanItem key={wp.id} value={wp.slug}>
            {wp.name}
          </WorkPlanItem>
        ))}
      </ItemsContainer>
    </SectionContainer>
  )
}

export default WorkPlan

const WorkPlanItem = styled.div`
  border: ${(props) =>
    props.selected === props.value ? 'none' : props.theme.borderPrimary};
  background: ${(props) =>
    props.selected === props.value ? props.theme.primary : 'transparent'};
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28%;
  margin: 0.5rem 1rem;
  white-space: nowrap;
  font-weight: bold;
  color: ${(props) =>
    props.selected === props.value
      ? props.theme.white
      : props.theme.textPrimary};
  cursor: pointer;
  font-size: 0.8rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    border: ${(props) => props.theme.borderTertiary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`
