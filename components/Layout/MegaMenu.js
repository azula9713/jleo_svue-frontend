import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { useSetRecoilState } from 'recoil'

import MenuItem from './MenuItem'

import { hoveredNavAtom } from '../../atoms/headerAtom'

const MegaMenu = ({ menuTitle }) => {
  const setHoveredTitle = useSetRecoilState(hoveredNavAtom)

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
  left: 0;
  z-index: 55;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  height: 28rem;
  background-color: ${(props) => props.theme.white};
`
