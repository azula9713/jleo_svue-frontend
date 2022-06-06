import Image from 'next/image'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'

import { hoveredPortfolioAtom } from '../../atoms/miniPortfolioAtom'

import HomeLocale from '../../data/lang/Home-en.json'

const OurWorkTabs = ({ data }) => {
  const [hoveredItem, setHoveredItem] = useRecoilState(hoveredPortfolioAtom)

  return (
    <PortfolioContainer>
      {data.map((item) => (
        <WorkTab
          key={item.id}
          isHovered={item.id === hoveredItem + 1}
          onMouseEnter={() => {
            setHoveredItem(item.id - 1)
          }}
          onMouseLeave={() => {
            setHoveredItem(0)
          }}
        >
          <TypeAndLocation isHovered={item.id === hoveredItem + 1}>
            <WorkType>{item.type}</WorkType>
            <Loc>{item.location}</Loc>
          </TypeAndLocation>
          {item.id === hoveredItem + 1 && (
            <Navigator>
              <Text>{HomeLocale.ourWork.navigatingText}</Text>
              <Arrow>
                <Image
                  src="/simple-right-arrow.svg"
                  width={80}
                  height={20}
                  style={{ marginLeft: '10px' }}
                />
              </Arrow>
            </Navigator>
          )}
        </WorkTab>
      ))}
    </PortfolioContainer>
  )
}

export default OurWorkTabs

const PortfolioContainer = styled.div`
  height: 100%;
`

const WorkTab = styled.div`
  height: ${(props) => (props.isHovered ? '40%' : '20%')};
  transition: height 0.2s ease-in-out;
  border: ${(props) => props.theme.borderSecondary};
  border-bottom: none;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 2rem;

  //remove border bottom for last item
  &:last-child {
    border-bottom: ${(props) => props.theme.borderSecondary};
  }
`
const TypeAndLocation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.isHovered ? 'flex-start' : 'space-between'};
  height: 50%;
  width: 100%;
`

const WorkType = styled.label`
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${(props) => props.theme.textPrimary};
`

const Loc = styled.label`
  margin: 0;
  line-height: 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.textSecondary};
  letter-spacing: 0.3rem;
`

const Navigator = styled.div`
  height: 50%;
  padding: 0.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`

const Arrow = styled.div``

const Text = styled.label`
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.primary};
  letter-spacing: 0.3rem;
  cursor: pointer;
  animation: ${(props) =>
    props.isHovered ? 'fadeIn 0.5s ease-in-out' : 'fadeOut 0.5s ease-in-out'};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
