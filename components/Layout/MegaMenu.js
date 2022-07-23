import { useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { Fade } from 'react-reveal'
import { useRecoilState } from 'recoil'

import MenuItem from './MenuItem'

import { hoveredNavAtom } from '../../atoms/headerAtom'

const MegaMenu = ({ menuTitle }) => {
  const router = useRouter()

  const path = router.pathname

  const [hoveredTitle, setHoveredTitle] = useRecoilState(hoveredNavAtom)

  useEffect(() => {
    //check if path contains the hoverd title
    if (path.includes(hoveredTitle.toLowerCase()) && path !== '/') {
      setHoveredTitle('')
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MegaMenuContainer>
      <Fade left ssrFadeout duration={500}>
        <Wrapper
          onMouseLeave={() => {
            setHoveredTitle('')
          }}
        >
          <MenuItem navItem={menuTitle} />
        </Wrapper>
      </Fade>
    </MegaMenuContainer>
  )
}

export default MegaMenu

const MegaMenuContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 28rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5rem;
  z-index: 55;
  max-width: 2000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  height: 28rem;
  background-color: ${(props) => props.theme.white};
`
