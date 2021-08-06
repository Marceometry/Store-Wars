import { useState, createContext, useContext, ReactNode, useCallback } from "react"
import { debounce } from "lodash"
import products, { categories, Categories, Products } from "../data/products"

type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextType = {
    searchText: string
    setSearchText: (value: string) => void
    isLoading: boolean
    setIsLoading: (value: boolean) => void
    filteredProducts: Products
    debouncedSearch: (value: string) => void
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [filteredProducts, setFilteredProducts] = useState(products)
    const [searchText, setSearchText] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const debouncedSearch = useCallback(
        debounce(value => {
            searchProducts(value)
            setIsLoading(false)
        }, 400
        ), [],
    )

    function searchProducts(value: string) {
        if (!value) {
            setFilteredProducts(products)
            return
        }

        const result = filterProducts(value)
        setFilteredProducts(result)
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

    return (
        <SearchContext.Provider value={{
            isLoading,
            setIsLoading,
            searchText,
            setSearchText,
            filteredProducts,
            debouncedSearch
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}