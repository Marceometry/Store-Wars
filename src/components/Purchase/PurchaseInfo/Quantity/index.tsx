import style from './style.module.scss'

type QuantityProps = {
    defaultValue?: number
}

export function Quantity({ defaultValue = 1 }: QuantityProps) {
    return (
        <fieldset className={style.fieldset}>
            <label htmlFor="quantity">Quantidade:</label>
            <input type="number" name="quantity"
                id="quantity" defaultValue={defaultValue} min={1} />
        </fieldset>
    )
}