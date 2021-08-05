import style from './style.module.scss'

export function Quantity() {
    return (
        <fieldset className={style.fieldset}>
            <label htmlFor="quantity">Quantidade:</label>
            <input type="number" name="quantity"
                id="quantity" defaultValue={1} min={1} />
        </fieldset>
    )
}