import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { PurchaseInfo } from '../components/Products/ProductPage/PurchaseInfo'
import { Quantity } from '../components/Products/ProductPage/PurchaseInfo/Quantity'
import products from '../data/products'
import style from '../styles/cartPage.module.scss'

export default function Cart() {
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(() => {
        const totalPrice = products.reduce((total, product) => {
            total += product.price
            return total
        }, 0)
        setTotalPrice(totalPrice)
    }, [products])

    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>Carrinho | Store Wars</title>
            </Head>

            <h1>Carrinho</h1>

            <div className={style.cart}>
                <ul>
                    {products.map(product => (
                        <li key={product.name}>
                            <div className={style.img}>
                                <Image width={160} height={160} alt={product.name}
                                    src={`/images/products/${product.id}/${product.images[0]}`}
                                />
                            </div>
                            <div className={style.productInfo}>
                                <div>
                                    <h1>{product.name}</h1>

                                    <p>{product.description}</p>
                                </div>

                                <Quantity />
                            </div>
                            <div className={style.alignRight}>
                                <h2>R${product.price.toLocaleString('pt-BR')}</h2>

                                <div className={style.buttons}>
                                    <button>Remover</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <PurchaseInfo price={totalPrice} isOnCart />
            </div>
        </main>
    )
}