import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import Hero from '../../components/Case-study/Hero'
import LetsTalk from '../../components/Common/LetsTalk'
import Footer from '../../components/Layout/Footer'

import Header from '../../components/Layout/Header'

const Architecture = () => {
  return (
    <>
      <Head>
        <title>Case Study - Architecture</title>
      </Head>
      <Header />
      <main className="main">
        <Hero
          title="SAVOY GRILL - GORDON RAMSAY"
          heroImg="https://www.gordonramsayrestaurants.com/assets/Uploads/_resampled/CroppedFocusedImage160059050-50-savoyoutside.jpg"
        />
        <GalleryContainer>
          <GalleryItem>
            <DataSection>
              <DetailSection>
                <CardTitle>
                  <WorkType>Remodel</WorkType>
                  <Location>London</Location>
                </CardTitle>
                <Description>
                  The integration of architecture and the environment is at the
                  heart of what we do here. We believe that every project
                  requires a personalized approach, one where your needs are
                  considered in order for you to enjoy living or working more
                  comfortably day-in/day-out.
                </Description>
              </DetailSection>
              <ImageSection align="left">
                <Image
                  layout="fill"
                  src="/images/gr-savoy.jpeg"
                  alt="Savoy Grill"
                  objectFit="cover"
                />
              </ImageSection>
            </DataSection>
            <SideImage>
              <Image
                layout="fill"
                src="/images/gr-savoy.jpeg"
                alt="Savoy Grill"
                objectFit="cover"
              />
            </SideImage>
          </GalleryItem>
          <GalleryItem>
            <SideImage>
              <Image
                layout="fill"
                src="/images/gr-savoy.jpeg"
                alt="Savoy Grill"
                objectFit="cover"
              />
            </SideImage>
            <DataSection>
              <ImageSection align="right">
                <Image
                  layout="fill"
                  src="/images/gr-savoy.jpeg"
                  alt="Savoy Grill"
                  objectFit="cover"
                />
              </ImageSection>
              <DetailSection>
                <CardTitle>
                  <WorkType>Remodel</WorkType>
                  <Location>London</Location>
                </CardTitle>
                <Description>
                  The integration of architecture and the environment is at the
                  heart of what we do here. We believe that every project
                  requires a personalized approach, one where your needs are
                  considered in order for you to enjoy living or working more
                  comfortably day-in/day-out.
                </Description>
              </DetailSection>
            </DataSection>
          </GalleryItem>
        </GalleryContainer>
        <LetsTalk bgImage="/images/lets-talk-bg.jpeg" />
      </main>
      <Footer />
    </>
  )
}

export default Architecture

const GalleryContainer = styled.div`
  width: 100%;
  height: 65rem;
`

const GalleryItem = styled.div`
  height: 30rem;
  margin: 0.5rem 0;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SideImage = styled.div`
  position: relative;
  height: 100%;
  width: 30%;
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
`

const WorkType = styled.label`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.35em;
  font-size: 1.2rem;
`

const Location = styled(WorkType)`
  color: ${({ theme }) => theme.secondary};
`

const Description = styled.p`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 400;
`

const ImageSection = styled.div`
  position: relative;
  width: 98%;
  height: 60%;
  margin-left: ${({ align }) => (align === 'left' ? '0' : '2rem')};
  margin-right: ${({ align }) => (align === 'right' ? '0' : '2rem')};
`

const DetailSection = styled.div`
  height: 40%;
  width: 98%;
  padding: 0.5rem 3rem;
`
