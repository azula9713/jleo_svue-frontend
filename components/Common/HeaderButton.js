import styled from 'styled-components'
import { useRouter } from 'next/router'

import CustomIcon from './CustomIcon'

const HeaderButton = ({
  btnText,
  btnColor,
  btnIcon,
  textColor,
  customWidth,
  borderColor,
  link,
}) => {
  const router = useRouter()

  const handleRouting = () => {
    router.push(link)
  }

  return (
    <Container
      btnColor={btnColor}
      textClr={textColor}
      width={customWidth}
      borderColor={borderColor}
      onClick={() => {
        if (link) {
          handleRouting()
        }
      }}
    >
      <ButtonLabel textClr={textColor}>{btnText}</ButtonLabel>
      <CustomIcon icon={btnIcon} isOutline color={textColor} />
    </Container>
  )
}

export default HeaderButton

const Container = styled.div`
  background-color: ${({ btnColor }) => btnColor};
  padding: 1.4rem 1.3rem;
  width: ${({ width }) => (width ? width : 'max-content')};
  max-height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: 0.1rem solid
    ${({ borderColor }) => (borderColor ? borderColor : 'transparent')};

  &::after {
    content: '';
    position: absolute;
    width: 80%;
    transform: scaleX(0);
    height: 0.2rem;
    bottom: 1rem;
    left: 1.5rem;
    right: 0.5rem;
    background-color: ${({ textClr }) => textClr};
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    padding: 1.4rem 1rem;
    width: 100%;

    &::after {
      left: 1rem;
      right: 0.2rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.xl}) {
    margin: 0rem;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
`

const ButtonLabel = styled.span`
  color: ${({ textClr }) => textClr};
  white-space: nowrap;
  overflow: hidden;
  margin-right: 0.7rem;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    font-size: 0.8rem;
    margin-right: 0.4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: left;
    width: 100%;
  }
`
