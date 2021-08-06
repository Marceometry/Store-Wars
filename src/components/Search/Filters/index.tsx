// import { useSearch } from '../../../contexts/SearchContext'
import { categories } from '../../../data/products'
import style from './style.module.scss'

export function Filters() {
    // const { categoriesList } = useSearch()

    return (
        <aside className={style.container}>
            <h1>Filtros:</h1>

            <div className={style.filters}>
                <h1>Categorias</h1>

                {categories.map(category => (
                    <fieldset key={category.name}>
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