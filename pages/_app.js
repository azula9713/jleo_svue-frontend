import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'

import '../styles/css/globals.css'
import defaultTheme from '../styles/js/themeConfig'

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
