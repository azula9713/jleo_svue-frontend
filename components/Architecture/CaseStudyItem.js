import Image from 'next/image'
import styled from 'styled-components'

import CommonLocale from '../../data/lang/Common-en.json'

const CaseStudyItem = ({
  align,
  title,
  leftImg,
  coverImg,
  subtitleVisible = true,
}) => {
  return (
    <Container>
      {align === 'right' && (
        <SideImage>
          <Image layout="fill" src={leftImg} alt="" objectFit="cover" />
        </SideImage>
      )}
      <DataSection>
        {align === 'right' ? (
          <>
            <DetailSection>
              <CardTitle>
                <Title>{title}</Title>
                {subtitleVisible && <SubTitle>Case Studies</SubTitle>}
              </CardTitle>
            </DetailSection>
            <ImageSection align={align}>
              <Image layout="fill" src={coverImg} alt="" objectFit="cover" />
            </ImageSection>
          </>
        ) : (
          <>
            <ImageSection align={align}>
              <Image
                layout="fill"
                src="/images/gr-savoy.jpeg"
                alt="Savoy Grill"
                objectFit="cover"
              />
            </ImageSection>
            <CTASection>
              <Title>{CommonLocale.talk}</Title>
              <CTA>{CommonLocale.quote}</CTA>
            </CTASection>
          </>
        )}
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

export default CaseStudyItem

const Container = styled.div`
  height: 30rem;
  margin: 0.5rem 0;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    height: auto;
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
  justify-content: flex-start;
  width: 100%;
  height: 100%;
`

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 2rem 0;
  height: 60%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`

const Title = styled.label`
  text-transform: uppercase;
  color: ${({ theme }) => theme.textPrimary};
  letter-spacing: 0.35em;
  font-size: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1.7rem;
  }
`

const SubTitle = styled(Title)`
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
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
    display: none;
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
const CTASection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`

const CTA = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.primary};
  letter-spacing: 0.21em;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 1.4rem 2.4rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: max-content;

  &:hover {
    background-color: ${(props) => props.theme.primaryDark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    width: 100%;
    text-align: center;
  }
`
