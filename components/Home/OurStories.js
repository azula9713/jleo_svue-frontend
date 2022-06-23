import styled from 'styled-components'
import Image from 'next/image'

import TitleContainer from '../Common/TitleContainer'
import BlogPost from './BlogPost'

import HomeLocale from '../../data/lang/Home-en.json'
import BlogPosts from '../../data/constants/BlogData'

const OurStories = () => {
  return (
    <OurStoriesContainer>
      <DescWrapper>
        <TitleContainer title={HomeLocale.ourStories.title} />
        <BlogPostContainer>
          <BlogPost post={BlogPosts[0]} />
        </BlogPostContainer>
        <PaginationContainer>
          <PaginationButtons>
            <PrevButton>{HomeLocale.ourStories.prevBtn}</PrevButton>
            <NextButton>{HomeLocale.ourStories.nextBtn}</NextButton>
          </PaginationButtons>
          <PaginationDots>. . . .</PaginationDots>
        </PaginationContainer>
      </DescWrapper>
      <ImageWrapper>
        <StoryImage layout="fill" src="/stories.png" objectFit="cover" />
      </ImageWrapper>
    </OurStoriesContainer>
  )
}

export default OurStories

const OurStoriesContainer = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`
const DescWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
  height: 46rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
    height: 100%;
  }
`
const BlogPostContainer = styled.div`
  height: 22rem;
  width: 100%;
  border: ${(props) => props.theme.borderSecondary};
  border-bottom: none;
  padding: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 1rem;
    border: none;
    height: 100%;
  }
`

const PaginationContainer = styled.div`
  height: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border: ${(props) => props.theme.borderSecondary};
  border-top: none;
  border-bottom: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    border: none;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
`

const StoryImage = styled(Image)`
  height: 100%;
  width: 100%;
`
const PaginationButtons = styled.div`
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0rem;
  }
`

const PaginationDots = styled.div`
  margin-right: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-right: 0rem;
  }
`
const PrevButton = styled.button`
  color: ${(props) => props.theme.textPrimary};
  cursor: pointer;
  background: transparent;
  margin-right: 1rem;
  border: none;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;
  line-height: 1rem;

  &:hover {
    color: ${(props) => props.theme.black};
  }
`

const NextButton = styled(PrevButton)``
