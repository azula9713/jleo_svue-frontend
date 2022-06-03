import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { hoveredPortfolioAtom } from '../../atoms/miniPortfolioAtom'

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
          {item.location}
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
  border: 1px solid red;
`
