import styled from 'styled-components'
import CustomIcon from './CustomIcon'

const HeaderButton = ({ btnText, btnColor, btnIcon, textColor }) => {
  return (
    <Container btnColor={btnColor} textClr={textColor}>
      <ButtonLabel textClr={textColor}>{btnText}</ButtonLabel>
      <CustomIcon icon={btnIcon} isOutline color={textColor} />
    </Container>
  )
}

export default HeaderButton

const Container = styled.div`
  background-color: ${({ btnColor }) => btnColor};
  padding: 26px 32px;
  width: 100%;
  max-height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 4px;
    bottom: 20px;
    left: 30px;
    right: 10px;
    background-color: ${({ textClr }) => textClr};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const ButtonLabel = styled.span`
  color: ${({ textClr }) => textClr};
  //make sure text is one line
  white-space: nowrap;
  overflow: hidden;
  margin-right: 16px;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1600px) {
    font-size: 0.8rem;
  }
`
