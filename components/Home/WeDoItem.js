import styled from 'styled-components'
import Image from 'next/image'

const WeDoItem = ({ item }) => {
  const imgWidth = 340
  return (
    <ItemContainer>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemData>
        <Image
          src={item.image}
          alt={item.title}
          height={imgWidth + item.id * 50}
          width={imgWidth}
          objectFit="cover"
        />
      </ItemData>
    </ItemContainer>
  )
}

export default WeDoItem

const ItemContainer = styled.div`
  width: 100%;
  border: ${(props) => props.theme.borderSecondary};
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;

  &:last-child {
    border-right: ${(props) => props.theme.borderSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 1.5rem;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    max-width: max-content;
  }
`
const ItemData = styled.div`
  margin-top: 5rem;
  margin-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
  }
`
