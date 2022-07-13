import styled from 'styled-components'

const UserTitle = ({ titleMain, subtitle }) => {
  return (
    <TitleWrapper>
      <Title>{titleMain}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </TitleWrapper>
  )
}

export default UserTitle

const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
`

const Title = styled.h5`
  color: ${(props) => props.theme.textPrimary};
  margin: 0;
  font-size: 2rem;
`

const SubTitle = styled.p`
  margin: 0;
  color: ${(props) => props.theme.textPrimary};
  margin-top: 0.4rem;
`
