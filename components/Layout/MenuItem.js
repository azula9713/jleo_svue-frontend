import Image from 'next/image'
import { useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState, useSetRecoilState } from 'recoil'

import LayeredItems from './LayeredItems'

import {
  MegaMenuItems,
  SecondLayerItems,
  ThirdLayerItems,
} from '../../data/constants/MegaMenuItems'
import {
  firstLayerAtom,
  secondLayerAtom,
  thirdLayerAtom,
} from '../../atoms/headerAtom'
import { MenuLayerStructure } from '../../data/constants/LayerStructure'

const MenuItem = ({ navItem }) => {
  const [firstLayer, setFirstLayer] = useRecoilState(firstLayerAtom)
  const [secondLayer, setSecondLayer] = useRecoilState(secondLayerAtom)
  const setThirdLayer = useSetRecoilState(thirdLayerAtom)

  const firstLayerLinks = MegaMenuItems[navItem.toLowerCase()]
  const secondLayerLinks = SecondLayerItems[firstLayer]
  const thirdLayerLinks = ThirdLayerItems[secondLayer]

  useEffect(() => {
    return () => {
      setSecondLayer('')
      setFirstLayer('')
      setThirdLayer('')
    }
  }, [])

  return (
    <ItemContainer>
      <DataSection>
        <Title>{navItem}</Title>
        <MenuLinks>
          <LayeredItems
            layerPosition={MenuLayerStructure.firstLayer}
            menuLinks={firstLayerLinks}
          />
          <LayeredItems
            layerPosition={MenuLayerStructure.secondLayer}
            menuLinks={secondLayerLinks}
          />
          <LayeredItems
            layerPosition={MenuLayerStructure.thirdLayer}
            menuLinks={thirdLayerLinks}
          />
        </MenuLinks>
      </DataSection>
      <ImageSection>
        <Image layout="fill" src="/stories.png" objectFit="cover" />
      </ImageSection>
    </ItemContainer>
  )
}

export default MenuItem

const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 28rem;
`

const DataSection = styled.div`
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`

const ImageSection = styled.div`
  width: 30%;
  height: 100%;
  position: relative;
`
const Title = styled.label`
  text-transform: uppercase;
  letter-spacing: 1rem;
  font-size: 3.5rem;
  font-weight: 700;
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;
  margin-top: 2rem;
  border-bottom: ${({ theme }) => theme.borderSecondary};
`

const MenuLinks = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin: 0rem 8rem;
  font-weight: 300;
  font-size: 1.1rem;
  height: 20rem;
`
