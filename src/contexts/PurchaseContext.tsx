import { useState, createContext, useContext, ReactNode, useEffect } from "react"

type PurchaseContextType = {
    productsInCart: string[]
    addProductToCart: (id: string) => void
    removeProductFromCart: (id: string) => void
}

type PurchaseContextProviderProps = {
    children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)

export function PurchaseContextProvider({ children }: PurchaseContextProviderProps) {
    const [productsInCart, setProductsInCart] = useState([''])

    useEffect(() => {
        const storagedProducts = localStorage.getItem('productsInCart')
        
        if (!storagedProducts) return
        
        setProductsInCart(storagedProducts.split(', '))
    }, [])

    useEffect(() => {
        localStorage.setItem('productsInCart', productsInCart.join(', '))
    }, [productsInCart])

    function addProductToCart(id: string) {
        const alreadyInCart = productsInCart.filter(productInCart => {
            return productInCart === id
        })
        
        if (alreadyInCart[0]) return

        setProductsInCart([...productsInCart, id])
    }

    function removeProductFromCart(id: string) {
        const newList = [...productsInCart]

        newList.forEach((productInCart, index) => {
            if (productInCart === id) {
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