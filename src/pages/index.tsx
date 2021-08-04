import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ProductsSection } from '../components/ProductsSection'
import products from '../data/products'

export default function Home() {
  return (
    <>
      <Head>
        <title>Store Wars | Home</title>
      </Head>

      <Header />

      <Banner />

      <main>
        <ProductsSection
          products={products}
          type="featured"
          title="Produtos em Destaque"
        />
        
        <ProductsSection
          products={products}
          type="sale"
          title="Em Promoção"
        />
      </main>

      <Footer />
    </>
  )
}
