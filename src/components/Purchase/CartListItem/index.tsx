import Image from "next/image"
import { usePurchase } from "../../../contexts/PurchaseContext"
import { Product } from "../../../data/products"
import { Quantity } from "../PurchaseInfo/Quantity"

import style from "./style.module.scss"

type CartListItemProps = {
    product: Product
}

export function CartListItem({ product }: CartListItemProps) {
    const { removeProductFromCart } = usePurchase()

    return (
        <li className={style.li}>
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

                <Quantity defaultValue={product.quantity} />
            </div>
            <div className={style.alignRight}>
                <h2>R${product.price.toLocaleString('pt-BR')}</h2>

                <div className={style.buttons}>
                    <button onClick={() => removeProductFromCart(product.id)}>Remover</button>
                </div>
            </div>
        </li>
    )
}