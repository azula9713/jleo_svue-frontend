import styled from 'styled-components'

import WeDoItem from './WeDoItem'

import WeDoData from '../../data/constants/WeDoItems'
import HomeLocale from '../../data/lang/Home-en.json'

const WeDoSection = () => {
  return (
    <>
      <Info>
        <Title>{HomeLocale.weDo.title}</Title>
        <Desc>{HomeLocale.weDo.desc}</Desc>
      </Info>
      <ItemsWrapper>
        {WeDoData.map((item) => (
          <WeDoItem key={item.id} item={item} />
        ))}
      </ItemsWrapper>
    </>
  )
}

export default WeDoSection

const Info = styled.div`
  padding: 2rem 6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  border: ${(props) => props.theme.borderSecondary};
  border-bottom: none;
`

const Title = styled.h2`
  margin: 0;
  text-transform: uppercase;
  color: ${(props) => props.theme.textSecondary};
  font-weight: 700;
  font-size: 6rem;
  line-height: 8rem;
`

const Desc = styled.p`
  max-width: 56rem;
  margin: 0;
  padding-bottom: 1rem;
  font-weight: 400;
  font-size: 1.1rem;
  text-align: justify;
  line-height: 2rem;
  color: ${(props) => props.theme.textPrimary};
`

const ItemsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
