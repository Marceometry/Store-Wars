import style from './style.module.scss'

type QuantityProps = {
    quantity: number
    setQuantity?: (value: number) => void
}

export function Quantity({ quantity, setQuantity }: QuantityProps) {
    function handleChange(value: number) {
        if (!setQuantity) return
        setQuantity(value)
    }

    return (
        <fieldset className={style.fieldset}>
            <label htmlFor="quantity">Quantidade:</label>
            <input type="number" name="quantity" id="quantity" value={quantity}
                onChange={e => handleChange(Number(e.target.value))} min={1}
            />
        </fieldset>
    )
}