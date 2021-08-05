import Head from 'next/head'
import Image from 'next/image'
import { PurchaseInfo } from '../components/Products/ProductPage/PurchaseInfo'
import { Quantity } from '../components/Products/ProductPage/PurchaseInfo/Quantity'
import style from '../styles/cartPage.module.scss'

const products = [
    { name: "atat-walker" },
    { name: "camisa yoda" },
    { name: "sabre de luz - kylo ren" },
    { name: "luminária - estrela da morte" },
    { name: "quadro - darth vader" },
]

export default function Cart() {
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
                                <Image width={192} height={192} alt={product.name}
                                    src={`/images/products/${product.name}/main.png`}
                                />
                            </div>
                            <div className={style.productInfo}>
                                <div>
                                    <h1>{product.name}</h1>

                                    <p>40cm de altura, acompanha Luke Skywalker!</p>
                                </div>

                                <Quantity />
                            </div>
                            <div className={style.alignRight}>
                                <h2>R$1.499,00</h2>

                                <div className={style.buttons}>
                                    <button className={style.removeAll}>Remover Todos</button>
                                    <button>Remover</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <PurchaseInfo price={2000} isOnCart />
            </div>
        </main>
    )
}