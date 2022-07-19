import styled from 'styled-components'

const PropertyItem = ({ item }) => {
  return (
    <ItemContainer>
      <ItemImage src={item.img} alt={item.slug} />
      <ItemName>{item.name}</ItemName>
    </ItemContainer>
  )
}

export default PropertyItem

const ItemContainer = styled.div`
  margin-right: 1.5rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: ${(props) => props.theme.borderPrimary};

  //remove margin-right from the last item
  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: ${(props) => props.theme.borderTertiary};
  }
`
const ItemImage = styled.img`
  width: 11rem;
  object-fit: cover;
`

const ItemName = styled.div`
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme.textTertiary};
  width: 100%;
  text-align: center;
`
