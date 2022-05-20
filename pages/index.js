import styled from 'styled-components'
import Button from '../components/Common/Button'
import HeroSlider from '../components/Home/HeroSlider'
import TestComp from '../components/Home/TestComp'

import Header from '../components/Layout/Header'

export default function Home() {
  return (
    <div>
      <Header />

      <Main>
        <HeroSlider />
        <Button />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
        <TestComp />
      </Main>

      <footer>Footer</footer>
    </div>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
