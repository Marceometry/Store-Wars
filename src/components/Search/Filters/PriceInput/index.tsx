import style from "./style.module.scss"

type PriceInputProps = {
    min: number
    max: number
    handleMinPrice: (value: number) => void
    handleMaxPrice: (value: number) => void
}

export function PriceInput({ min, max, handleMinPrice, handleMaxPrice }: PriceInputProps) {
    return (
        <div className={style.container}>
            <fieldset>
                <label htmlFor="minPrice"> Preço mínimo: </label>
                <div className={style.inputContainer}>
                    <span>R$</span>
                    <input type="number" name="minPrice" id="minPrice" placeholder="0000"
                        onChange={e => handleMinPrice(Number(e.target.value))}
                        value={min > 0 ? min : ''} min={0}
                    />
                </div>
            </fieldset>

            <fieldset>
                <label htmlFor="minPrice"> Preço máximo: </label>
                <div className={style.inputContainer}>
                    <span>R$</span>
                    <input type="number" name="maxPrice" id="maxPrice" placeholder="0000"
                        onChange={e => handleMaxPrice(Number(e.target.value))} min={min}
                        value={max === 0 ? '' : max}
                    />
                </div>
            </fieldset>
        </div>
    )
}