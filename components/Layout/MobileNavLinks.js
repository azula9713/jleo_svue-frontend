import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled, { css } from 'styled-components'
import { useRecoilState } from 'recoil'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'

import { firstLayerAtom, hoveredNavAtom } from '../../atoms/headerAtom'
import NavLinks from '../../data/constants/NavLinks'
import MegaMenuItems from '../../data/constants/json/MegaMenuItems.json'
import SecondLayerItems from '../../data/constants/json/SecondLayerItems.json'

const MobileNavLinks = () => {
  const [hoveredTitle, setHoveredTitle] = useRecoilState(hoveredNavAtom)
  const [firstLayer, setFirstLayer] = useRecoilState(firstLayerAtom)
  const [isFirstLayerSelected, setIsFirstLayerSelected] = useState(false)

  const firstLayerLinks = MegaMenuItems[hoveredTitle.toLowerCase()]
  const secondLayerLinks = SecondLayerItems[firstLayer]

  useEffect(() => {
    return () => {
      setFirstLayer('')
    }
  }, [])

  return (
    <NavContainer>
      <MenuTitle>Menu</MenuTitle>
      {NavLinks.map((navLink) => (
        <LinkItem key={navLink.id}>
          <LinkTitle>
            <Link href={navLink.link}>
              <Name>{navLink.name}</Name>
            </Link>
            {hoveredTitle === navLink.name && navLink.isMultiple ? (
              <BiChevronUp
                onClick={() => {
                  if (navLink.isMultiple) {
                    setHoveredTitle('')
                    // setIsFirstLayerSelected(false)
                  }
                }}
              />
            ) : hoveredTitle !== navLink.name && navLink.isMultiple ? (
              <BiChevronDown
                onClick={() => {
                  if (navLink.isMultiple) {
                    setHoveredTitle(navLink.name)
                  }
                }}
              />
            ) : null}
          </LinkTitle>
          <ExpandedItems hoveredTitle={hoveredTitle} navName={navLink.name}>
            {firstLayerLinks?.links?.map((item, index) => {
              if (item.isExpandable) {
                return (
                  <ExpandableItem
                    firstLayer={firstLayer}
                    itemLink={item.link}
                    firstLayerSelected={isFirstLayerSelected}
                    key={index}
                    onClick={() => {
                      if (firstLayer === item.link) {
                        setFirstLayer('')
                        setIsFirstLayerSelected(false)
                      } else {
                        setFirstLayer(item.link)
                        setIsFirstLayerSelected(true)
                      }
                    }}
                  >
                    <ItemText firstLayer={firstLayer} itemLink={item.link}>
                      {item.name}
                      {item.isExpandable && firstLayer === item.link ? (
                        <BiChevronUp />
                      ) : (
                        <BiChevronDown />
                      )}
                    </ItemText>
                    {firstLayer === item.link && (
                      <ItemContent>
                        {secondLayerLinks.links.map((link, i) => (
                          <Link key={i} href={link.link}>
                            <ExpandedItem>{link.name}</ExpandedItem>
                          </Link>
                        ))}
                      </ItemContent>
                    )}
                  </ExpandableItem>
                )
              } else {
                return (
                  <MainLink
                    key={index}
                    href={item.link}
                    firstLayer={firstLayer}
                    itemLink={item.link}
                    firstLayerSelected={isFirstLayerSelected}
                  >
                    <ExpandedItem>
                      {item.name}
                      {item.isExpandable && (
                        <BiChevronDown
                          onClick={() => {
                            setFirstLayer(item.link)
                          }}
                        />
                      )}
                    </ExpandedItem>
                  </MainLink>
                )
              }
            })}
          </ExpandedItems>
        </LinkItem>
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

const MenuTitle = styled.label`
  color: ${(props) => props.theme.textSecondary};
  text-transform: uppercase;
`

const LinkItem = styled.div`
  margin: 1rem;
  width: 100%;
`

const Name = styled.span`
  margin-right: 1rem;
`

const LinkTitle = styled.div`
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const ExpandedItems = styled.div`
  display: ${(props) =>
    props.hoveredTitle === props.navName ? 'flex' : 'none'};
  flex-direction: column;
  padding-top: 1rem;
  padding-left: 1rem;
`

const ExpandedItem = styled.a`
  color: ${(props) => props.theme.bgPrimary};
  font-weight: 300;
  margin: 0.4rem 0.2rem;
`
const ExpandableItem = styled.div`
  color: ${(props) => props.theme.bgPrimary};
  font-weight: 300;
  margin: 0.4rem 0.2rem;

  /* ${(props) =>
    props.firstLayerSelected
      ? css`
          display: ${() =>
            props.firstLayer === props.itemLink ? 'block' : 'none'};
        `
      : css`
          display: block;
        `} */
`

const MainLink = styled(Link)`
  /* ${(props) =>
    props.firstLayerSelected
      ? css`
          display: ${() =>
            props.firstLayer === props.itemLink ? 'block' : 'none'};
        `
      : css`
          display: block;
        `} */
`

const ItemText = styled.div`
  text-decoration: ${(props) =>
    props.firstLayer === props.itemLink && 'underline'};
  text-underline-position: under;
`

const ItemContent = styled.div`
  margin: 1rem 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
