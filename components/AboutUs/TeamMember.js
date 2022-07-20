import styled from 'styled-components'

const TeamMember = ({ member }) => {
  return (
    <MemberContainer>
      <MemberData>
        <MemberName>{member.name}</MemberName>
        <MemberRole>{member.role}</MemberRole>
      </MemberData>
      <MemberImageContainer>
        <MemberImage src={member.image} alt={member.name} />
      </MemberImageContainer>
    </MemberContainer>
  )
}

export default TeamMember

const MemberContainer = styled.div`
  height: 18rem;
  width: 90%;
  margin: 0.5rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

const MemberData = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`

const MemberName = styled.h6`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.textPrimary};
  margin-right: 2rem;
`

const MemberRole = styled.label`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textTertiary};
  margin-right: 2rem;
`

const MemberImageContainer = styled(MemberData)``

const MemberImage = styled.img`
  height: 17rem;
`
