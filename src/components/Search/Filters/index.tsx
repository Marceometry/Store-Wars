import { useSearch } from '../../../contexts/SearchContext'
import { categories } from '../../../data/products'
import { Checkbox } from './Checkbox'
import style from './style.module.scss'

export function Filters() {
    const { filterByCategory, selectedCategories, setSelectedCategories } = useSearch()
    
    function handleSelectedCategories(category: string, isChecked: boolean) {        
        if (isChecked) {
            selectedCategories.push(category) 
        } else {
            selectedCategories.forEach((categoryInArray, index) => {
                if (categoryInArray === category) {
                    selectedCategories.splice(index, 1)
                }
            })
        }
        filterByCategory(selectedCategories)
    }

    function verifyIsChecked(category: string) {
        return selectedCategories.includes(category)
    }

    return (
        <aside className={style.container}>
            <h1>Filtros:</h1>

            <div className={style.filters}>
                <h1>Categorias</h1>

                {categories.map(category => (
                    <Checkbox
                        key={category}
                        verifyIsChecked={verifyIsChecked}
                        category={category}
                        handleSelectedCategories={handleSelectedCategories}
                    />
                ))}
            </div>
        </aside>
    )
}