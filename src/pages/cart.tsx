import { useEffect, useState } from 'react'
import Head from 'next/head'

import { StyledButton, StyledLink } from '../components/LinkButton'
import { PurchaseInfo } from '../components/Purchase/PurchaseInfo'
import { CartListItem } from '../components/Purchase/CartListItem'
import { usePurchase } from '../contexts/PurchaseContext'
import products, { Products } from '../data/products'

import style from '../styles/cartPage.module.scss'

export default function Cart() {
    const { productsInCart } = usePurchase()
    const [totalPrice, setTotalPrice] = useState(0)
    const [productsList, setProductsList] = useState([] as Products)

    useEffect(() => {
        const productsList = products.filter(product => {
            const isInCart = productsInCart.filter(id => {
                return product.id === id
            })
            
            return isInCart[0]
        })
        setProductsList(productsList)
    }, [productsInCart])
    
    useEffect(() => {
        const totalPrice = productsList.reduce((total, product) => {
            total += product.price
            return total
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
                <ul>
                    {productsList.length === 0 ? (
                        <h1 className={style.emptyCart}>O carrinho está vazio</h1>
                    ) : (
                        productsList.map(product => (
                            <CartListItem key={product.id} product={product} />
                        )
                    ))}
                </ul>

                <PurchaseInfo price={totalPrice} isOnCart>
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