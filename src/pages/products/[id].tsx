import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { Header } from '../../components/Header'
import products, { Product } from '../../data/products'

type ProductProps = {
    product: Product
}

export default function ProductPage({ product }: ProductProps) {
    return (
        <>
            <Head>
                <title>{product.name} | Store Wars</title>
            </Head>

            <Header />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = products.map((product) => ({
        params: { id: product.id },
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const product = products.find((product) => {
        return product.id === params?.id
    })

    return {
        props: { product },
        revalidate: 60 * 60 * 8
    }
}