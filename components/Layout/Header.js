import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import NavLinks from '../../data/NavLinks'
import HeaderButton from '../Common/HeaderButton'
import MegaMenu from './MegaMenu'
import { useRecoilState } from 'recoil'
import { hoveredNavAtom } from '../../atoms/headerAtom'

const Header = () => {
  const [hoveredTitle, setHoveredTitle] = useRecoilState(hoveredNavAtom)

  return (
    <Headbar>
      <HeaderSection>
        <LinkContainer>
          <ImageContainer>
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
            textColor="#5C5C5C"
          />
          <HeaderButton
            btnColor="#485879"
            btnText="I want a quote"
            btnIcon="DocumentTextIcon"
            textColor="#ffffff"
          />
        </ButtonContainer>
      </HeaderSection>
      {/* add a revealing effect to mega menu */}
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
  width: 60%;
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
  color: #5c5c5c;
  margin: 0 1.1rem;
  cursor: pointer;
`

const ButtonContainer = styled(NavLinkContainer)`
  justify-content: flex-end;
  padding: 0;
  width: max-content;
  margin-right: 0.1rem;
`
