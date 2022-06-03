import styled from 'styled-components'
import Image from 'next/image'

const WeDoItem = ({ item }) => {
  return (
    <ItemContainer>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemData>
        <Image src={item.image} alt={item.title} height={200} width={340} />
      </ItemData>
    </ItemContainer>
  )
}

export default WeDoItem

const ItemContainer = styled.div`
  width: 100%;
  border: ${(props) => props.theme.borderSecondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
`
const ItemTitle = styled.h4`
  margin: 0;
  font-weight: 600;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
  font-size: 1.1rem;
  text-align: left;
  color: ${(props) => props.theme.textPrimary};
  max-width: 20rem;
`
const ItemData = styled.div`
  margin-top: 5rem;
  margin-bottom: 10rem;
`
