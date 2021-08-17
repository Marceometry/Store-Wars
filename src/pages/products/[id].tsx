import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { client } from '../../services/apolloClient'
import { GET_PRODUCT } from '../../services/graphql/getProduct'
import { GET_PRODUCTS } from '../../services/graphql/getProducts'

import { ImagesGrid } from '../../components/Products/ImagesGrid'
import { PurchaseInfo } from '../../components/Purchase/PurchaseInfo'
import { NotFoundMessage } from '../../components/Utils/NotFoundMessage'
import { StyledButton } from '../../components/Utils/LinkButton'
import { Quantity } from '../../components/Purchase/Quantity'

import { usePurchase } from '../../contexts/PurchaseContext'
import { Product } from '../../utils/productType'

import style from '../../styles/productPage.module.scss'

type ProductProps = {
    product: Product
}

export default function ProductPage({ product }: ProductProps) {
    const { productsInCart, addProductToCart, removeProductFromCart } = usePurchase()
    const [quantity, setQuantity] = useState(1)
    const [isInCart, setIsInCart] = useState(false)

    useEffect(() => {
        if (!product) return
        const isInCart = productsInCart.filter(productInCart => {
            return productInCart.id === product._id
        })
        
        setIsInCart(isInCart[0] ? true : false)
    }, [productsInCart, product])
    
    if (!product) return <NotFoundMessage message="Produto não encontrado" />

    const { _id, name, description, images, price } = product
    
    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>{name} | Store Wars</title>
            </Head>

            <div>
                <ImagesGrid images={images} productID={_id} />
                
                <div className={style.productDescription}>
                    <h1>{name}</h1>

                    <h2>Por: R${price.toLocaleString('pt-BR')}</h2>

                    <p><strong>Descrição:</strong> {description}</p>

                    <Quantity quantity={quantity} setQuantity={setQuantity} />
                </div>

                <PurchaseInfo price={price * quantity}>
                    <StyledButton
                        bgColor="var(--yellow)"
                        color="var(--black)"
                    >
                        Comprar
                    </StyledButton>
                    
                    <StyledButton
                        onClick={() => {
                            !isInCart ? (
                                addProductToCart(product._id, quantity)
                            ) : removeProductFromCart(product._id)
                        }}
                        bgColor="var(--yellow)"
                        outlined
                    >
                        {isInCart ? 'Remover do carrinho' : 'Adicionar no Carrinho'}
                    </StyledButton>
                </PurchaseInfo>
            </div>
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({ query: GET_PRODUCTS })

    const paths = data.products.map((product: Product) => ({
        params: { id: product._id },
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data, error } = await client.query({
        query: GET_PRODUCT,
        variables: { id: params?.id }
    })

    if (error) { return { props: { product: null } } }

    const { product } = data

    return {
        props: { product },
        revalidate: 60 * 60 * 8
    }
}