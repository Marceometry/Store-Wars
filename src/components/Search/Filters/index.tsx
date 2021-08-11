import { useSearch } from '../../../contexts/SearchContext'
import { categories } from '../../../data/products'
import { Checkbox } from './Checkbox'
import { PriceInput } from './PriceInput'
import style from './style.module.scss'

export function Filters() {
    const {
        searchProducts,
        selectedCategories,
        searchText,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice
    } = useSearch()
    
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
        searchProducts(searchText, selectedCategories, minPrice, maxPrice)
    }

    function verifyIsChecked(category: string) {
        return selectedCategories.includes(category)
    }

    function handleMinPrice(minPrice: number) {
        const max = minPrice > maxPrice && maxPrice > 0 ? minPrice * 2 : maxPrice
        max !== maxPrice && setMaxPrice(max)
        setMinPrice(minPrice)
        searchProducts(searchText, selectedCategories, minPrice, max)
    }

    function handleMaxPrice(maxPrice: number) {
        setMaxPrice(maxPrice)
        searchProducts(searchText, selectedCategories, minPrice, maxPrice)
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

            <div className={style.filters}>
                <h1>Preço</h1>

                <PriceInput min={minPrice} max={maxPrice}
                    handleMinPrice={handleMinPrice} handleMaxPrice={handleMaxPrice}
                />
            </div>
        </aside>
    )
}