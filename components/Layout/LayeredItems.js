import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'

import {
  firstLayerAtom,
  secondLayerAtom,
  thirdLayerAtom,
} from '../../atoms/headerAtom'
import { MenuLayerStructure } from '../../data/constants/LayerStructure'

const LayeredItems = ({ menuLinks, layerPosition }) => {
  const [firstLayer, setFirstLayer] = useRecoilState(firstLayerAtom)
  const [secondLayer, setSecondLayer] = useRecoilState(secondLayerAtom)
  const [thirdLayer, setThirdLayer] = useRecoilState(thirdLayerAtom)

  const [isLayerVisible, setIsLayerVisible] = useState(false)

  const checkLayerVisibility = () => {
    if (layerPosition === MenuLayerStructure.firstLayer) {
      setIsLayerVisible(true)
    } else if (layerPosition === MenuLayerStructure.secondLayer) {
      if (firstLayer !== '') {
        setIsLayerVisible(true)
      }
    } else if (layerPosition === MenuLayerStructure.thirdLayer) {
      if (firstLayer !== '' && secondLayer !== '') {
        setIsLayerVisible(true)
      }
    }
  }

  const checkLayerSelected = (item) => {
    if (
      layerPosition === MenuLayerStructure.firstLayer &&
      firstLayer === item.link
    ) {
      return true
    } else if (
      layerPosition === MenuLayerStructure.secondLayer &&
      secondLayer === item.link
    ) {
      return true
    } else if (
      layerPosition === MenuLayerStructure.thirdLayer &&
      thirdLayer === item.link
    ) {
      return true
    } else {
      return false
    }
  }

  const resetLayerPosition = () => {
    if (layerPosition === MenuLayerStructure.firstLayer) {
      setFirstLayer('')
    }

    if (layerPosition === MenuLayerStructure.secondLayer) {
      setSecondLayer('')
    }

    if (layerPosition === MenuLayerStructure.thirdLayer) {
      setThirdLayer('')
    }
  }

  useEffect(() => {
    checkLayerVisibility()

    return () => {
      setIsLayerVisible(false)
    }
  }, [firstLayer, secondLayer])

  return (
    <LayerItems visible={isLayerVisible} layerPosition={layerPosition}>
      {menuLinks?.links?.map((item, index) => {
        if (item.isExpandable) {
          return (
            <Item
              layerPosition={layerPosition}
              isSelected={checkLayerSelected(item)}
              key={index}
              onClick={() => {
                if (layerPosition === MenuLayerStructure.firstLayer) {
                  setFirstLayer(item.link)
                }
                if (layerPosition === MenuLayerStructure.secondLayer) {
                  setSecondLayer(item.link)
                }
                if (layerPosition === MenuLayerStructure.thirdLayer) {
                  setThirdLayer(item.link)
                }
              }}
            >
              {item.name}
            </Item>
          )
        }

        return (
          <Link key={index} href={item.link}>
            <LinkItem
              layerPosition={layerPosition}
              onMouseEnter={() => {
                resetLayerPosition()
              }}
              onMouseLeave={() => {
                resetLayerPosition()
              }}
            >
              {item.name}
            </LinkItem>
          </Link>
        )
      })}
    </LayerItems>
  )
}

export default LayeredItems

const LayerItems = styled.div`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  width: ${({ layerPosition }) =>
    layerPosition === MenuLayerStructure.firstLayer ? '13rem' : '15rem'};
  padding: 1rem;
  height: 100%;
  border: ${({ theme }) => theme.borderSecondary};
  border-top: none;
  border-right: none;
`

const LinkItem = styled.div`
  cursor: pointer;
  margin: 0.5rem 0;
  transition: all 0.2s ease-in-out;
  height: ${({ layerPosition }) =>
    layerPosition === MenuLayerStructure.firstLayer ? '2.7rem' : '1.95rem'};
  font-weight: 300;
  font-size: ${({ layerPosition }) =>
    layerPosition === MenuLayerStructure.firstLayer ? '1.1rem' : '0.9rem'};

  &:hover {
    font-weight: 600;
  }
`

const Item = styled(LinkItem)`
  font-weight: ${({ isSelected }) => (isSelected ? 600 : 300)};

  &:after {
    content: ' >';
    margin-left: 0.5rem;
  }
`
