import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { client } from '../services/apolloClient'
import { GET_PRODUCTS } from '../services/graphql/getProducts'

import { Banner } from '../components/Banner'
import { ProductsListRow } from '../components/Products/ProductsListRow'
import { Product } from '../utils/productType'

type HomeProps = {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
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
      
      {/* <ProductsListRow
        products={products}
        type="sale"
        title="Em Promoção"
      /> */}
    </main>
  )
}

export const getStaticProps: GetServerSideProps = async () => {    
  const { data } = await client.query({ query: GET_PRODUCTS })

  const { products } = data

  return { props: { products } }
}