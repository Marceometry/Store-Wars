import { useEffect, useState } from 'react'
import Head from 'next/head'

import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../services/graphql/getProducts'

import { usePurchase } from '../contexts/PurchaseContext'
import { NotFoundMessage } from '../components/Utils/NotFoundMessage'
import { PurchaseInfo } from '../components/Purchase/PurchaseInfo'
import { CartListItem } from '../components/Purchase/CartListItem'
import { StyledButton, StyledLink } from '../components/Utils/LinkButton'

import { Product } from '../utils/productType'

import style from '../styles/cartPage.module.scss'

export default function Cart() {
    const { data, error, loading } = useQuery(GET_PRODUCTS)
    const { productsInCart } = usePurchase()
    const [productsList, setProductsList] = useState([] as Product[])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (error || loading) return

        const productsListArray = data.products.filter((product: Product) => {
            const isInCart = productsInCart.filter(productInCart => {
                return product._id === productInCart.id
            })
            
            return isInCart[0]
        })

        // productsListArray.forEach((product: Product) => {
        //     productsInCart.forEach(productInCart => {
        //         if (product._id !== productInCart.id) return
                
        //         product['quantity'] = productInCart.quantity
        //         return
        //     })
        // })

        setProductsList(productsListArray)
    }, [productsInCart, data])
    
    useEffect(() => {
        const totalPrice = productsList.reduce((total, product) => {
            if (!product.quantity) return total += product.price
            
            return total += product.price * product.quantity
        }, 0)
        setTotalPrice(totalPrice)
    }, [productsList])

    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>Carrinho | Store Wars</title>
            </Head>

            <h1>Carrinho</h1>

            <div className={style.cart}>
                <ul className={productsList.length === 0 ? style.emptyCart : ''}>
                    {productsList.length === 0 ? (
                        <NotFoundMessage message="O carrinho está vazio" />
                    ) : loading ? (
                        <h1>Carregando...</h1>
                    ) : (
                        productsList.map(product => (
                            <CartListItem key={product._id} product={product} />
                        ))
                    )}
                </ul>

                <PurchaseInfo price={totalPrice}>
                    {productsList.length === 0 ? (
                        <StyledLink
                            href="/search"
                            bgColor="var(--yellow)"
                            color="var(--black)"
                        >
                            Ver produtos
                        </StyledLink>
                    ) : (
                        <StyledButton
                            bgColor="var(--yellow)"
                            color="var(--black)"
                        >
                            Comprar
                        </StyledButton>
                    )}
                </PurchaseInfo>
            </div>
        </main>
    )
}