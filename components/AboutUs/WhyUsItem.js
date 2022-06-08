import styled from 'styled-components'
import Image from 'next/image'

const WhyUsItem = ({ item }) => {
  return (
    <ItemContainer>
      <ItemTitle>{item.title}</ItemTitle>
      <ItemData>
        <ItemDesc>{item.desc}</ItemDesc>
        <Image
          src={item.image}
          alt={item.title}
          height="103px"
          width="80px"
          objectFit="cover"
        />
      </ItemData>
    </ItemContainer>
  )
}

export default WhyUsItem

const ItemContainer = styled.div`
  width: 50%;
  border: ${(props) => props.theme.borderSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2.5rem;
`
const ItemDesc = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 1.1rem;
  max-width: 20rem;
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
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
`
