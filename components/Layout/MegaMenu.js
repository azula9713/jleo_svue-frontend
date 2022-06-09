import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { useSetRecoilState } from 'recoil'

import { hoveredNavAtom } from '../../atoms/headerAtom'
import MenuItem from './MenuItem'

const MegaMenu = ({ menuTitle }) => {
  const setHoveredTitle = useSetRecoilState(hoveredNavAtom)

  return (
    <MegaMenuContainer>
      {/* apply fade effect on closing */}
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
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5rem;
  left: 0;
  z-index: 55;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 20rem;
  background-color: ${(props) => props.theme.white};
`
