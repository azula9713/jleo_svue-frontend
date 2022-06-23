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

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    font-size: 5rem;
    line-height: 6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 4rem;
    height: 100%;
    margin: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`
