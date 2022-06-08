import styled from 'styled-components'

import HomeLocale from '../../data/lang/Home-en.json'

const BlogPost = ({ post }) => {
  return (
    <Container>
      <TitleAuthor>
        <PostTitle>{post.title}</PostTitle>
        <PostAuthor>{post.author}</PostAuthor>
      </TitleAuthor>
      <Preview>
        {post.preview.length > 220
          ? `${post.preview.substring(0, 220)} ...`
          : post.preview}
      </Preview>
      <Button>{HomeLocale.ourStories.ctaText}</Button>
    </Container>
  )
}

export default BlogPost

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

const TitleAuthor = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem;
`

const Preview = styled.p`
  padding: 0.5rem;
  margin: 0;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme.textPrimary};
`

const Button = styled.div`
  color: ${(props) => props.theme.primary};
  border: 0.1rem solid ${(props) => props.theme.primary};
  padding: 0.2rem 3rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.7rem;
  line-height: 1.25rem;
  letter-spacing: 0.2rem;
  transition: all 0.24s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.white};
  }
`

const PostTitle = styled.label`
  font-weight: 900;
  letter-spacing: 0.05rem;
  font-size: 1.1rem;
  color: ${(props) => props.theme.textPrimary};
  line-height: 1.5rem;
`

const PostAuthor = styled.label`
  font-weight: 600;
  font-size: 0.7rem;
  color: ${(props) => props.theme.textSecondary};
  letter-spacing: 0.05rem;
`
