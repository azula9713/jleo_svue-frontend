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
  align-items: flex-start;
  padding: 2rem 2.5rem;
`
const ItemTitle = styled.h4`
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${(props) => props.theme.textPrimary};
  width: 100%;
`
const ItemData = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
const ItemDesc = styled.p`
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.3rem;
  color: ${(props) => props.theme.textPrimary};
  margin-bottom: 1.1rem;
  width: 70%;
`
