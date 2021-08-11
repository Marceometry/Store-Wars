import { useState, createContext, useContext, ReactNode, useCallback, useEffect } from "react"
import { debounce } from "lodash"
import products, { Product, Products } from "../data/products"

type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextType = {
    searchText: string
    setSearchText: (value: string) => void
    isLoading: boolean
    setIsLoading: (value: boolean) => void
    productsResult: Products
    filterByCategory: (categories: string[], products: Products) => void
    selectedCategories: string[]
    searchProducts: (value: string, selectedCategories: string[], minPrice: number, maxPrice: number) => void
    minPrice: number
    setMinPrice: (value: number) => void
    maxPrice: number
    setMaxPrice: (value: number) => void
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [productsResult, setProductsResult] = useState(products)
    const [selectedCategories] = useState([] as string[])
    const [searchText, setSearchText] = useState('')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        debouncedSearch(searchText)
    }, [searchText])
    
    const debouncedSearch = useCallback(
        debounce(value => {
            searchProducts(value, selectedCategories, minPrice, maxPrice)
            setIsLoading(false)
        }, 400
        ), [],
    )

    function searchProducts(value: string, selectedCategories: string[], minPrice: number, maxPrice: number) {
        let result = products
        if (value) result = filterByText(value)

        setProductsResult(result)

        if (selectedCategories.length > 0) {
            result = filterByCategory(selectedCategories, products)
        }

        if (maxPrice > 0 || minPrice > 0) filterByPrice(minPrice, maxPrice, result)
    }

    function filterByText(value: string) {
        const result = products.filter(product => {
            const lowercaseName = product.name.toLowerCase()
            const lowercaseValue = value.toLowerCase()
            let mustInclude = 0
            
            const tagsResult = product.tags.filter(tag => {
                return lowercaseValue.includes(tag)
            })

            mustInclude = tagsResult.length

            lowercaseName.includes(lowercaseValue) && (
                mustInclude = 1
            )

            return mustInclude
        })
        return result
    }

    function filterByCategory(categories: string[], products: Products) {
        const result = products.filter(product => {
            return compareCategories(categories, product)
        })

        setProductsResult(result)
        return result
    }

    function compareCategories(categories: string[], product: Product) {
        const comparisonResult = categories.map(category => {
            const hasCategory = product.categories.find(productCategory => {
                return category === productCategory
            })
            
            if (hasCategory) {
                return true
            } else {
                return false
            }
        })
        
        const productMatches = comparisonResult.find(result => {
            return result === true
        })

        return productMatches
    }

    function filterByPrice(min: number, max: number, products: Products) {
        const result = products.filter(product => {
            if (max === 0) return product.price >= min
            if (min === 0) return product.price <= max
            return product.price >= min && product.price <= max
        })

        setProductsResult(result)
        return result
    }

    return (
        <SearchContext.Provider value={{
            isLoading,
            setIsLoading,
            searchText,
            setSearchText,
            productsResult,
            filterByCategory,
            selectedCategories,
            searchProducts,
            minPrice,
            setMinPrice,
            maxPrice,
            setMaxPrice
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}