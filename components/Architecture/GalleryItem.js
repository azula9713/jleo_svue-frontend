import Image from 'next/image'
import styled from 'styled-components'

const GalleryItem = ({ align }) => {
  return (
    <Container>
      {align === 'right' && (
        <SideImage>
          <Image
            layout="fill"
            src="/images/gr-savoy.jpeg"
            alt="Savoy Grill"
            objectFit="cover"
          />
        </SideImage>
      )}
      <DataSection>
        <DetailSection>
          <CardTitle>
            <WorkType>Remodel</WorkType>
            <Location>London</Location>
          </CardTitle>
          <Description>
            The integration of architecture and the environment is at the heart
            of what we do here. We believe that every project requires a
            personalized approach, one where your needs are considered in order
            for you to enjoy living or working more comfortably day-in/day-out.
          </Description>
        </DetailSection>
        <ImageSection align={align}>
          <Image
            layout="fill"
            src="/images/gr-savoy.jpeg"
            alt="Savoy Grill"
            objectFit="cover"
          />
        </ImageSection>
      </DataSection>
      {align === 'left' && (
        <SideImage>
          <Image
            layout="fill"
            src="/images/gr-savoy.jpeg"
            alt="Savoy Grill"
            objectFit="cover"
          />
        </SideImage>
      )}
    </Container>
  )
}

export default GalleryItem

const Container = styled.div`
  height: 30rem;
  margin: 0.5rem 0;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 50rem;
  }
`
const SideImage = styled.div`
  position: relative;
  height: 100%;
  width: 30%;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    display: none;
  }
`

const DataSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`

const WorkType = styled.label`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.35em;
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`

const Location = styled(WorkType)`
  color: ${({ theme }) => theme.secondary};
`

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    font-size: 1rem;
  }
`

const ImageSection = styled.div`
  position: relative;
  width: 98%;
  height: 60%;
  margin-left: ${({ align }) => (align === 'left' ? '0' : '2rem')};
  margin-right: ${({ align }) => (align === 'right' ? '0' : '2rem')};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-left: 0;
    margin-right: 0;
    height: 70%;
  }
`

const DetailSection = styled.div`
  height: 40%;
  width: 98%;
  padding: 0.5rem 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0.5rem 1rem;
    height: 30%;
  }
`
