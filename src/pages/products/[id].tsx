import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { ImagesGrid } from '../../components/Products/ImagesGrid'
import { PurchaseInfo } from '../../components/Purchase/PurchaseInfo'
import { NotFoundMessage } from '../../components/NotFoundMessage'
import { StyledButton } from '../../components/LinkButton'

import { usePurchase } from '../../contexts/PurchaseContext'
import products, { Product } from '../../data/products'

import style from '../../styles/productPage.module.scss'

type ProductProps = {
    product: Product
}

export default function ProductPage({ product }: ProductProps) {
    const { addProductToCart } = usePurchase()
    
    if (!product) return <NotFoundMessage message="Produto não encontrado" />

    const { id, name, description, images, price } = product
    
    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>{name} | Store Wars</title>
            </Head>

            <div>
                <ImagesGrid images={images} productID={id} />
                
                <div className={style.productDescription}>
                    <h1>{name}</h1>

                    <h2>Por: R${price.toLocaleString('pt-BR')}</h2>

                    <p><strong>Descrição:</strong> {description}</p>
                </div>

                <PurchaseInfo price={price}>
                    <StyledButton
                        bgColor="var(--yellow)"
                        color="var(--black)"
                    >
                        Comprar
                    </StyledButton>
                    
                    <StyledButton
                        onClick={() => addProductToCart(product.id, 1)}
                        bgColor="var(--yellow)"
                        outlined
                    >
                        Carrinho +
                    </StyledButton>
                </PurchaseInfo>
            </div>
        </main>
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

    if (!product) { return { props: { product: null } } }

    return {
        props: { product },
        revalidate: 60 * 60 * 8
    }
}