import { useState } from "react"

type CheckboxProps = {
    category: string
    verifyIsChecked: (category: string) => boolean
    handleSelectedCategories: (category: string, isChecked: boolean) => void
}

export function Checkbox({ category, verifyIsChecked, handleSelectedCategories }: CheckboxProps) {
    const [isChecked, setIsChecked] = useState(() => verifyIsChecked(category))

    function handleChange(category: string, isChecked: boolean) {
        setIsChecked(isChecked)
        handleSelectedCategories(category, isChecked)   
    }

    return (
        <fieldset key={category}>
            <input
                name={category}
                type="checkbox"
                checked={isChecked}
                onChange={e => handleChange(e.target.name, e.target.checked)}
            />
            <label htmlFor={category}>
                {category}
            </label>
        </fieldset>
    )
}