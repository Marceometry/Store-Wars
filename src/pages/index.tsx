import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { ProductsSection } from '../components/ProductsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Store Wars | Home</title>
      </Head>

      <Header />

      <Banner />

      <main>
        <ProductsSection />
        <ProductsSection />
      </main>
    </>
  )
}
