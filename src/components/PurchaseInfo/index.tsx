import style from './style.module.scss'

type PurchaseProps = {
    price: number
    id: string
}

export function PurchaseInfo({ price, id }: PurchaseProps) {
    return (
        <div className={style.container}>
            <h1>R${price.toLocaleString('pt-BR')}</h1>

            <fieldset>
                <label htmlFor="quantity">Quantidade:</label>
                <input type="number" name="quantity"
                    id="quantity" defaultValue={1} min={1} />
            </fieldset>

            <div className={style.buttons}>
                <button className={style.filled}>Comprar</button>
                <button>Carrinho +</button>
            </div>
        </div>
    )
}