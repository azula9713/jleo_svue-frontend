import styled from 'styled-components'

const MegaMenu = ({ menuTitle }) => {
  return <MegaMenuContainer>{menuTitle}</MegaMenuContainer>
}

export default MegaMenu

const MegaMenuContainer = styled.div`
  background-color: red;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 72px;
  left: 0;
  z-index: 55;
`
