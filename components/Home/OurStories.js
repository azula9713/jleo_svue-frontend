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
        <StoryImage
          height={920}
          width={920}
          src="/stories.png"
          objectFit="cover"
        />
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
`

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
`
const BlogPostContainer = styled.div`
  height: 40%;
  width: 100%;
  border: ${(props) => props.theme.borderSecondary};
  padding: 3rem;
`

const PaginationContainer = styled.div`
  height: 15rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StoryImage = styled(Image)`
  height: 100%;
  width: 100%;
`
const PaginationButtons = styled.div`
  margin-right: 2rem;
`

const PaginationDots = styled.div`
  margin-right: 2rem;
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
