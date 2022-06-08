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
          <PaginationButtons>Prev Next</PaginationButtons>
          <PaginationDots>. . . .</PaginationDots>
        </PaginationContainer>
      </DescWrapper>
      <ImageWrapper>
        <StoryImage
          height={916}
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
  margin-bottom: 2rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 45rem;
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
  height: 30%;
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
  width: 100%;
`

const PaginationDots = styled.div`
  margin-right: 2rem;
`
