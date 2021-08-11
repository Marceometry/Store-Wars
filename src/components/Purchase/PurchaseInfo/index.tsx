import { ReactNode } from 'react'
import { Quantity } from './Quantity'
import style from './style.module.scss'

type PurchaseProps = {
    price: number
    isOnCart?: boolean
    children: ReactNode
    quantity: number
    setQuantity: (value: number) => void
}

export function PurchaseInfo({ price, isOnCart, quantity, setQuantity, children }: PurchaseProps) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                {isOnCart ? <h1>Total:</h1> : ''}

                <h1>R${price.toLocaleString('pt-BR')}</h1>
            </div>

            {!isOnCart ? (
                <Quantity quantity={quantity} setQuantity={setQuantity} />
            ) : ''}

            <div className={style.buttons}>
                { children }
            </div>
        </div>
    )
}