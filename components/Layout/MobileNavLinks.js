import styled, { css } from 'styled-components'
import Link from 'next/link'

import NavLinks from '../../data/constants/NavLinks'

const MobileNavLinks = () => {
  return (
    <NavContainer>
      {NavLinks.map((navLink) => (
        <Link key={navLink.id} href={navLink.link}>
          <LinkItem multiple={navLink.isMultiple}>{navLink.name}</LinkItem>
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

const LinkItem = styled.label`
  margin: 1rem;
  color: ${(props) => props.theme.primary};

  ${(props) =>
    props.multiple &&
    css`
      &:after {
        content: ' >';
        margin-left: 0.5rem;
      }
    `}
`
