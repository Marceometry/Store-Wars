import { useState, createContext, useContext, ReactNode, useCallback, useEffect } from "react"
import { debounce } from "lodash"
import { client } from "../services/apolloClient"
import { GET_PRODUCTS } from "../services/graphql/getProducts"
import { Product } from "../utils/productType"

type SearchContextProviderProps = {
    children: ReactNode
}

type SearchContextType = {
    searchText: string
    setSearchText: (value: string) => void
    isLoading: boolean
    setIsLoading: (value: boolean) => void
    productsResult: Product[]
    filterByCategory: (categories: string[], products: Product[]) => void
    selectedCategories: string[]
    searchProducts: ({}: SearchOptions) => void
    minPrice: number
    setMinPrice: (value: number) => void
    maxPrice: number
    setMaxPrice: (value: number) => void
}

type SearchOptions = {
    value?: string,
    minimumPrice?: number
    maximumPrice?: number
    categories?: string[],
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchContextProvider({ children }: SearchContextProviderProps) {
    const [productsResult, setProductsResult] = useState([] as Product[])
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
        debounce((value) => {
            searchProducts({ value })
            setIsLoading(false)
        }, 400
        ), [],
    )

    async function searchProducts(options: SearchOptions) {
        const { data, error } = await client.query({ query: GET_PRODUCTS })

        if (error) {
            alert(error.message)
            return
        }

        const {
            value = searchText,
            categories = selectedCategories,
            minimumPrice = minPrice,
            maximumPrice = maxPrice
        } = options

        const { products } = data
        let result = products
        
        if (value) result = filterByText(value, result)

        if (categories.length > 0) result = filterByCategory(categories, result)

        if (maximumPrice > 0 || minimumPrice > 0) result = filterByPrice(minimumPrice, maximumPrice, result)

        setProductsResult(result)
    }

    function filterByText(value: string, products: Product[]) {
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

    function filterByCategory(categories: string[], products: Product[]) {
        const result = products.filter(product => {
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
        })

        setProductsResult(result)
        return result
    }

    function filterByPrice(min: number, max: number, products: Product[]) {
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