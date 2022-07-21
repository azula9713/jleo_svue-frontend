import { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRecoilState } from 'recoil'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import { firstLayerAtom, hoveredNavAtom } from '../../atoms/headerAtom'
import NavLinks from '../../data/constants/NavLinks'
import MegaMenuItems from '../../data/constants/json/MegaMenuItems.json'
import SecondLayerItems from '../../data/constants/json/SecondLayerItems.json'

const MobileNavLinks = () => {
  const [hoveredTitle, setHoveredTitle] = useRecoilState(hoveredNavAtom)
  const [firstLayer, setFirstLayer] = useRecoilState(firstLayerAtom)

  const firstLayerLinks = MegaMenuItems[hoveredTitle.toLowerCase()]
  const secondLayerLinks = SecondLayerItems[firstLayer]

  useEffect(() => {
    return () => {
      setFirstLayer('')
    }
  }, [])

  useEffect(() => {
    console.log('firstLayerLinks', firstLayerLinks)
    console.log('secondLayerLinks', secondLayerLinks)
  }, [firstLayerLinks, secondLayerLinks])

  return (
    <NavContainer>
      {NavLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.link}>
          <LinkItem>
            <LinkTitle>
              {navLink.name}
              {hoveredTitle === navLink.name && navLink.isMultiple ? (
                <BiChevronUp
                  onClick={() => {
                    if (navLink.link === '#') {
                      setHoveredTitle('')
                    }
                  }}
                />
              ) : hoveredTitle !== navLink.name && navLink.isMultiple ? (
                <BiChevronDown
                  onClick={() => {
                    if (navLink.link === '#') {
                      setHoveredTitle(navLink.name)
                    }
                  }}
                />
              ) : null}
            </LinkTitle>
            {hoveredTitle === navLink.name && (
              <ExpandedItems>
                {firstLayerLinks?.links?.map((item) => (
                  <label key={item.link} id={item.link}>
                    {item.name}
                  </label>
                ))}
                z
              </ExpandedItems>
            )}
          </LinkItem>
        </Link>
      ))}
    </NavContainer>
  )
}

export default MobileNavLinks

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

const LinkItem = styled.div`
  margin: 1rem;
`

const LinkTitle = styled.div`
  color: ${(props) => props.theme.primary};
`

const ExpandedItems = styled.div``
