import styled from 'styled-components'

import TeamsLocale from '../../data/lang/AboutUs-en.json'
import TeamMember from './TeamMember'

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Jane Doe',
      role: 'COO',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Sarah Butt',
      role: 'Senior Architect',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Jake Rafael',
      role: 'Senior Architect',
      image: 'https://via.placeholder.com/150',
    },
  ]

  return (
    <TeamContainer>
      <TextSection>
        <Title>{TeamsLocale.team.title}</Title>
        <Description>{TeamsLocale.team.desc}</Description>
        <Description>{TeamsLocale.team.desc2}</Description>
      </TextSection>
      <MembersSection>
        {teamMembers.map((member) => (
          <TeamMember member={member} key={member.id} />
        ))}
      </MembersSection>
    </TeamContainer>
  )
}

export default OurTeam

const TeamContainer = styled.div`
  width: 100%;
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
`

const Title = styled.h4`
  text-align: left;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textPrimary};
  font-size: 4rem;
  margin-bottom: 2rem;
`

const MembersSection = styled(TextSection)`
  height: 40rem;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  ::-webkit-scrollbar {
    display: none;
  }
`

const Description = styled.p`
  margin: 0;
  padding: 0.5rem;
  color: ${(props) => props.theme.textTertiary};
  text-align: justify;
  font-size: 1.1rem;
  width: 90%;
`
