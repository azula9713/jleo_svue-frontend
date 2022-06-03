import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import defaultTheme from '../styles/themeConfig'

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
