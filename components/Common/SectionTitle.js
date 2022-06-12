import styled from 'styled-components'

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>
}

export default SectionTitle

const Title = styled.h2`
  text-transform: uppercase;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 700;
  font-size: 6rem;
  line-height: 8rem;
  height: max-content;
`
