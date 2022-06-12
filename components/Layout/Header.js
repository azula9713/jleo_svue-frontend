import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import HeaderButton from '../Common/HeaderButton'
import MegaMenu from './MegaMenu'

import NavLinks from '../../data/constants/NavLinks'
import { hoveredNavAtom } from '../../atoms/headerAtom'
import defaultTheme from '../../styles/js/themeConfig'

const Header = () => {
  const router = useRouter()

  const [hoveredTitle, setHoveredTitle] = useRecoilState(hoveredNavAtom)

  return (
    <Headbar>
      <HeaderSection>
        <LinkContainer>
          <ImageContainer
            onClick={() => {
              router.push('/')
            }}
          >
            <Image
              src="/logojleo.svg"
              alt="J'LEO SVUE"
              height={72}
              width={180}
            />
          </ImageContainer>
          <NavLinkContainer>
            {NavLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.link}>
                <NavLinkItem
                  onMouseEnter={() => {
                    if (navLink.link === '#') {
                      setHoveredTitle(navLink.name)
                    }
                  }}
                >
                  {navLink.name}
                </NavLinkItem>
              </Link>
            ))}
          </NavLinkContainer>
        </LinkContainer>
        <ButtonContainer>
          <HeaderButton
            btnColor="transparent"
            btnText="I want an appointment"
            btnIcon="CalendarIcon"
            textColor={defaultTheme.textPrimary}
          />
          <HeaderButton
            btnColor={defaultTheme.primary}
            btnText="I want a quote"
            btnIcon="DocumentTextIcon"
            textColor={defaultTheme.white}
          />
        </ButtonContainer>
      </HeaderSection>

      {hoveredTitle !== '' && <MegaMenu menuTitle={hoveredTitle} />}
    </Headbar>
  )
}

export default Header

const Headbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 5rem;
  position: sticky;
  top: 0;
  z-index: 1;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url('/headerbg.jpeg');
`

const LinkContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const ImageContainer = styled.div`
  max-height: 5rem;
  padding: 0 1.7rem;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
`

const NavLinkContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  padding: 0 1.7rem;
`
const NavLinkItem = styled.a`
  font-size: 1.1rem;
  color: ${(props) => props.theme.textPrimary};
  margin: 0 1.1rem;
  cursor: pointer;
  white-space: nowrap;
`

const ButtonContainer = styled(NavLinkContainer)`
  justify-content: flex-end;
  padding: 0;
  width: max-content;
  margin-right: 0.1rem;
  width: 30%;
`
