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
    filterByCategory: (categories: string[], searchValue: string) => void
    selectedCategories: string[]
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [productsResult, setProductsResult] = useState(products)
    const [selectedCategories] = useState([] as string[])
    const [searchText, setSearchText] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        debouncedSearch(searchText)
    }, [searchText])
    
    const debouncedSearch = useCallback(
        debounce(value => {
            searchProducts(value)
            setIsLoading(false)
        }, 400
        ), [],
    )

    function searchProducts(value: string) {
        if (!value) {
            setProductsResult(products)
            selectedCategories.length > 0 && filterByCategory(selectedCategories, value)
            return
        }

        const result = filterProducts(value)
        setProductsResult(result)
        selectedCategories.length > 0 && filterByCategory(selectedCategories, value)
    }

    function filterProducts(value: string) {
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

    function filterByCategory(categories: string[], searchValue: string) {
        if (categories.length === 0) {
            searchProducts(searchText)
            return
        }

        const filteredProducts = filterProducts(searchValue)

        const result = filteredProducts.filter(product => {
            return compareCategories(categories, product)
        })

        setProductsResult(result)
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

    return (
        <SearchContext.Provider value={{
            isLoading,
            setIsLoading,
            searchText,
            setSearchText,
            productsResult,
            filterByCategory,
            selectedCategories
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}