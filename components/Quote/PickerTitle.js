import styled from 'styled-components'

const PickerTitle = ({ title }) => {
  return <Title>{title}</Title>
}

export default PickerTitle

const Title = styled.h6`
  margin: 0;
  color: ${(props) => props.theme.textPrimary};
  font-size: 0.9rem;
  margin-bottom: 0.9rem;
`
