import Head from 'next/head'
import { Banner } from '../components/Banner'
import { ProductsSection } from '../components/ProductsSection'
import products from '../data/products'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Store Wars | Home</title>
      </Head>

      <Banner />

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
  )
}
