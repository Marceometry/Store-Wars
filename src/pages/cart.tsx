import { useEffect, useState } from 'react'
import Head from 'next/head'

import { StyledButton } from '../components/LinkButton'
import { PurchaseInfo } from '../components/Purchase/PurchaseInfo'
import { CartListItem } from '../components/Purchase/CartListItem'
import { usePurchase } from '../contexts/PurchaseContext'

import style from '../styles/cartPage.module.scss'

export default function Cart() {
    const { productsInCart } = usePurchase()
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        const totalPrice = productsInCart.reduce((total, product) => {
            total += product.price
            return total
        }, 0)
        setTotalPrice(totalPrice)
        console.log('renderizou')
    }, [productsInCart])

    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>Carrinho | Store Wars</title>
            </Head>

            <h1>Carrinho</h1>

            <div className={style.cart}>
                <ul>
                    {productsInCart.map(product => (
                        <CartListItem key={product.id} product={product} />
                    ))}
                </ul>

                <PurchaseInfo price={totalPrice} isOnCart>
                    <StyledButton
                        bgColor="var(--yellow)"
                        color="var(--black)"
                    >
                        Comprar
                    </StyledButton>
                </PurchaseInfo>
            </div>
        </main>
    )
}