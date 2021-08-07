import { StyledButton } from '../../../LinkButton'
import { Quantity } from './Quantity'
import style from './style.module.scss'

type PurchaseProps = {
    price: number
    // ids: string[]
    isOnCart?: boolean
}

export function PurchaseInfo({ price, isOnCart }: PurchaseProps) {
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
                <StyledButton
                    href="/"
                    bgColor="var(--yellow)"
                    color="var(--black)"
                >
                    Comprar
                </StyledButton>
                {!isOnCart ? (
                    <StyledButton
                        href="/"
                        bgColor="var(--yellow)"
                        outlined
                    >
                        Carrinho +
                    </StyledButton>
                ): ''}
            </div>
        </div>
    )
}