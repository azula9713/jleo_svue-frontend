import Head from 'next/head'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { hoveredNavAtom } from '../../atoms/headerAtom'

import Header from './Header'

const HeadSection = ({ title }) => {
  const setHoveredTitle = useSetRecoilState(hoveredNavAtom)

  const headTitle = `J'LEO SVUE - ${title}`

  useEffect(() => {
    setHoveredTitle('')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{headTitle}</title>
      </Head>
      <Header />
    </>
  )
}

export default HeadSection
