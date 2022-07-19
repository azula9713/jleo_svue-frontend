import styled from 'styled-components'
import { RiLoader2Fill } from 'react-icons/ri'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const InfoSection = ({ iconStyle, qg }) => {
  return (
    <InfoWrapper>
      <InfoItem>
        <RiLoader2Fill style={iconStyle} size={20} />
        {qg.steps.step1}
      </InfoItem>
      <InfoItem>
        <AiOutlineCheckCircle style={iconStyle} size={20} />
        {qg.steps.step2}
      </InfoItem>
      <InfoItem>
        <AiOutlineCheckCircle style={iconStyle} size={20} />
        {qg.steps.step3}
      </InfoItem>
    </InfoWrapper>
  )
}

export default InfoSection

export const InfoWrapper = styled.div`
  border: ${(props) => props.theme.borderSecondary};
  padding: 3rem;
  height: 100%;
  grid-column-start: 1;
  grid-column-end: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const InfoItem = styled.div`
  color: ${(props) => props.theme.textPrimary};
  letter-spacing: 0.02em;
  margin: 1rem 0;
  cursor: default;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    font-size: 0.9rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`
