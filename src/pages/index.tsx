import Head from 'next/head'
import { Banner } from '../components/Banner'
import { ProductsListRow } from '../components/Products/ProductsListRow'
import products from '../data/products'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Store Wars | Home</title>
      </Head>

      <Banner />

      <ProductsListRow
        products={products}
        type="featured"
        title="Produtos em Destaque"
      />
      
      <ProductsListRow
        products={products}
        type="sale"
        title="Em Promoção"
      />
    </main>
  )
}
