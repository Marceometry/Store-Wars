import style from './style.module.scss'

const categories = [
    { name: "Jedi" },
    { name: "Sith" },
    { name: "Legos" },
    { name: "Brinquedos" },
    { name: "Camisas" },
]

export function Filters() {
    return (
        <aside className={style.container}>
            <h1>Filtros:</h1>

            <div className={style.filters}>
                <h1>Categorias</h1>

                {categories.map(category => (
                    <fieldset>
                        <input
                            name={category.name}
                            type="checkbox"
                            // checked={isChecked}
                            // onChange={e => handleChange(e.target.checked)}
                        />
                        <label htmlFor={category.name}>
                            {category.name}
                        </label>
                    </fieldset>
                ))}
            </div>
        </aside>
    )
}