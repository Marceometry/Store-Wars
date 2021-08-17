import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apolloClient'

import { ThemeContextProvider } from '../contexts/ThemeContext'
import { SearchContextProvider } from '../contexts/SearchContext'
import { PurchaseContextProvider } from '../contexts/PurchaseContext'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import Router from 'next/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

import '../styles/global.scss'
import '../styles/fonts.scss'

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
      <SearchContextProvider>
        <PurchaseContextProvider>
          <Header />
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </PurchaseContextProvider>
        <Footer />
      </SearchContextProvider>
    </ThemeContextProvider>
  )
}
export default MyApp