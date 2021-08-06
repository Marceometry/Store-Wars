import { useState, createContext, useContext, ReactNode, useCallback } from "react"
import { debounce } from "lodash"
import products, { Products } from "../data/products"

type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextType = {
    searchText: string
    setSearchText: (value: string) => void
    isLoading: boolean
    setIsLoading: (value: boolean) => void
    productsResult: Products
    debouncedSearch: (value: string) => void
    filterByCategory: (categories: string[]) => void
    selectedCategories: string[]
    setSelectedCategories: (categories: string[]) => void
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [productsResult, setProductsResult] = useState(products)
    const [selectedCategories, setSelectedCategories] = useState([] as string[])
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
            setProductsResult(products)
            return
        }

        const result = filterProducts(value)
        setProductsResult(result)
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

    function filterByCategory(categories: string[]) {
        if (categories.length === 0) {
            searchProducts(searchText)
            return
        }

        const result = productsResult.filter(product => {
            const hasCategory = product.categories.find(category => {
                let includes = true
                for (const index in categories) {
                    category !== categories[index] && (
                        includes = false
                    )
                }
                console.log(includes)
                return includes
            })
            return hasCategory
        })

        setProductsResult(result)
    }

    return (
        <SearchContext.Provider value={{
            isLoading,
            setIsLoading,
            searchText,
            setSearchText,
            productsResult,
            debouncedSearch,
            filterByCategory,
            selectedCategories,
            setSelectedCategories
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearch() {
    return useContext(SearchContext)
}