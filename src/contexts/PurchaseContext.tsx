import { useState, createContext, useContext, ReactNode, useEffect } from "react"
import { Product, Products } from "../data/products"

type PurchaseContextType = {
    productsInCart: Products
    addProductToCart: (product: Product) => void
    removeProductFromCart: (id: string) => void
}

type PurchaseContextProviderProps = {
    children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)

export function PurchaseContextProvider({ children }: PurchaseContextProviderProps) {
    const [productsInCart, setProductsInCart] = useState([] as Products)

    function addProductToCart(product: Product) {
        const alreadyInCart = productsInCart.filter(productInCart => {
            return productInCart.id === product.id
        })
        
        if (alreadyInCart[0]) return

        setProductsInCart([...productsInCart, product])
    }

    function removeProductFromCart(id: string) {
        const newList = [...productsInCart]

        newList.forEach((productInCart, index) => {
            if (productInCart.id === id) {
                newList.splice(index, 1)
            }
        })

        setProductsInCart([...newList])
    }

    return (
        <PurchaseContext.Provider value={{
            productsInCart,
            addProductToCart,
            removeProductFromCart
        }}>
            { children }
        </PurchaseContext.Provider>
    )
}

export function usePurchase() {
    return useContext(PurchaseContext)
}