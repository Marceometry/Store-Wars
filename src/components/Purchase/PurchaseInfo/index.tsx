import { ReactNode } from 'react'
import { Quantity } from './Quantity'
import style from './style.module.scss'

type PurchaseProps = {
    price: number
    isOnCart?: boolean
    children: ReactNode
}

export function PurchaseInfo({ price, isOnCart, children }: PurchaseProps) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                {isOnCart ? <h1>Total:</h1> : ''}

                <h1>R${price.toLocaleString('pt-BR')}</h1>
            </div>

            {!isOnCart ? (
                <Quantity />
            ) : ''}

            <div className={style.buttons}>
                { children }
            </div>
        </div>
    )
}