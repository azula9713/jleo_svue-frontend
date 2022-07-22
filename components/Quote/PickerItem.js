import styled from 'styled-components'

const PickerItem = ({ label, value, selected, action }) => {
  return (
    <ItemContainer value={value} onClick={action} selected={selected}>
      {label}
    </ItemContainer>
  )
}

export default PickerItem

const ItemContainer = styled.div`
  border: ${(props) =>
    props.selected === props.value ? 'none' : props.theme.borderPrimary};
  background: ${(props) =>
    props.selected === props.value ? props.theme.primary : 'transparent'};
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  width: 22%;
  margin: 0.2rem 0.5rem;
  white-space: nowrap;
  font-weight: bold;
  color: ${(props) =>
    props.selected === props.value
      ? props.theme.white
      : props.theme.textPrimary};
  cursor: pointer;
  v &:hover {
    border: ${(props) =>
      props.selected === props.value ? 'none' : props.theme.borderTertiary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`
