import type { AppProps } from 'next/app'
import { ThemeContextProvider } from '../theme/ThemeContext'
import Router from 'next/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import '../styles/global.scss'

Nprogress.configure({
  showSpinner: false,
  trickleSpeed: 300
})

Router.events.on('routeChangeStart', () => {
  Nprogress.start()
})

Router.events.on('routeChangeComplete', () => {
  Nprogress.done()
})

Router.events.on('routeChangeError', () => {
  Nprogress.done()
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
    </ThemeContextProvider>
  )
}
export default MyApp