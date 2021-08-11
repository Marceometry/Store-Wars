import { ReactNode } from 'react'
import style from './style.module.scss'

type PurchaseProps = {
    price: number
    children: ReactNode
}

export function PurchaseInfo({ price, children }: PurchaseProps) {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h1>Total:</h1>

                <h1>R${price.toLocaleString('pt-BR')}</h1>
            </div>

            <div className={style.buttons}>
                { children }
            </div>
        </div>
    )
}