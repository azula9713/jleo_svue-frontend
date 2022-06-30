import styled from 'styled-components'

import SectionTitle from '../Common/SectionTitle'

import HomeLocale from '../../data/lang/Home-en.json'
import portfolioData from '../../data/constants/MiniPortfolioData'

const OurWorkMobile = () => {
  return (
    <MobileContainer>
      <SectionTitle title={HomeLocale.ourWork.title} />
      <WorkModules>
        {portfolioData.map((item) => (
          <Module key={item.id} bg={item.image}>
            <ItemType>{item.type}</ItemType>
          </Module>
        ))}
      </WorkModules>
    </MobileContainer>
  )
}

export default OurWorkMobile

const MobileContainer = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: inline;
    margin-top: 1rem;
    width: 100%;
    padding: 0 1.5rem;
  }
`
const WorkModules = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

const Module = styled.div`
  width: 100%;
  height: 12rem;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
  margin: 0.4rem 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const ItemType = styled.h3`
  color: ${(props) => props.theme.white};
  z-index: 1;
  margin: 0;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.05em;
`
