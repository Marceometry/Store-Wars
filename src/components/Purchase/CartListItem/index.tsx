import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePurchase } from "../../../contexts/PurchaseContext"
import { Product } from "../../../utils/productType"
import { Quantity } from "../Quantity"

import style from "./style.module.scss"

type CartListItemProps = {
    product: Product
}

export function CartListItem({ product }: CartListItemProps) {
    const { removeProductFromCart, changeProductQuantity } = usePurchase()
    const [quantity, setQuantity] = useState(product.quantity ?? 1)

    useEffect(() => {
        changeProductQuantity(product._id, quantity)
    }, [quantity])

    return (
        <li className={style.li}>
            <div className={style.img}>
                <Image width={160} height={160} alt={product.name}
                    src={`/images/products/${product._id}/${product.images[0]}`}
                />
            </div>
            <div className={style.productInfo}>
                <div>
                    <Link href={`/products/${product._id}`}>
                        <a> <h1>{product.name}</h1> </a>
                    </Link>

                    <p>{product.description}</p>
                </div>

                <Quantity quantity={quantity} setQuantity={setQuantity} />
            </div>
            <div className={style.alignRight}>
                <h2>R${product.price.toLocaleString('pt-BR')}</h2>

                <div className={style.buttons}>
                    <button onClick={() => removeProductFromCart(product._id)}>Remover</button>
                </div>
            </div>
        </li>
    )
}