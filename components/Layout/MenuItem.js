import Link from 'next/link'
import styled from 'styled-components'

import MegaMenuItems from '../../data/constants/MegaMenuItems'

const MenuItem = ({ navItem }) => {
  const menuLinks = MegaMenuItems[navItem.toLowerCase()]

  return (
    <ItemContainer>
      <DataSection>
        <Title>{navItem}</Title>
        <MenuLinks>
          {menuLinks?.links?.map((item, index) => {
            if (item.isExpandable) {
              return <Item key={index}>{item.name}</Item>
            }

            return (
              <LinkItem key={index} href={item.link}>
                {item.name}
              </LinkItem>
            )
          })}
        </MenuLinks>
      </DataSection>
      <ImageSection>imaghe</ImageSection>
    </ItemContainer>
  )
}

export default MenuItem

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const DataSection = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 2rem;
`

const ImageSection = styled.div`
  width: 30%;
`
const Title = styled.label`
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 3.5rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
`

const MenuLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Item = styled.div``

const LinkItem = styled(Link)`
  cursor: pointer;
`
