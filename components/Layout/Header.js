import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import NavLinks from '../../data/NavLinks'
import HeaderButton from '../Common/HeaderButton'
import MegaMenu from './MegaMenu'
import { useEffect, useState } from 'react'

const Header = () => {
  const [hoveredTitle, setHoveredTitle] = useState('')

  useEffect(() => {
    console.log('hovering over: ' + hoveredTitle)
  }, [hoveredTitle])

  return (
    <>
      <Head>
        <title>J&apos;LEO SVUE</title>
        <meta
          name="description"
          content="We provide Planning Drawing and Submission, Interior & Architectural Design and Supply & Installation"
        />
        <meta content="Interior Design Studio" property="og:title" />
        <meta
          property="og:image"
          content="https://static.wixstatic.com/media/b6fff4_f3bbc1cc480145648db2c761fc438350~mv2.png/v1/fill/w_1080,h_1080,al_c/b6fff4_f3bbc1cc480145648db2c761fc438350~mv2.png"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                    onMouseLeave={() => {
                      setHoveredTitle('')
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
    </>
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
  height: 72px;

  //make sure header is always at the top
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
  max-height: 72px;
  padding: 0 36px;
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
  padding: 0 36px;
`
const NavLinkItem = styled.a`
  font-size: 1.1rem;
  color: #5c5c5c;
  margin: 0 16px;
  cursor: pointer;
`

const ButtonContainer = styled(NavLinkContainer)`
  justify-content: flex-end;
  padding: 0;
  width: max-content;
`
