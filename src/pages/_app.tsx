import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { client } from '../services/apolloClient'
import { NprogressConfig } from '../utils/NprogressConfig'

import { ThemeContextProvider } from '../contexts/ThemeContext'
import { SearchContextProvider } from '../contexts/SearchContext'
import { PurchaseContextProvider } from '../contexts/PurchaseContext'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

import 'nprogress/nprogress.css'
import '../styles/global.scss'
import '../styles/fonts.scss'

NprogressConfig()

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