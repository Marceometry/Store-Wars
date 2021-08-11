import { useState, createContext, useContext, ReactNode, useEffect } from "react"

type ProductData = {
    id: string
    quantity: number
}

type PurchaseContextType = {
    productsInCart: ProductData[]
    removeProductFromCart: (id: string) => void
    addProductToCart: (id: string, quantity: number) => void
    changeProductQuantity: (id: string, quantity: number) => void
}

type PurchaseContextProviderProps = {
    children: ReactNode
}

export const PurchaseContext = createContext({} as PurchaseContextType)

export function PurchaseContextProvider({ children }: PurchaseContextProviderProps) {
    const [productsInCart, setProductsInCart] = useState([] as ProductData[])

    useEffect(() => {
        const storagedProducts = localStorage.getItem('productsInCart')
        
        if (!storagedProducts) return
        
        setProductsInCart(JSON.parse(storagedProducts))
    }, [])

    useEffect(() => {
        localStorage.setItem('productsInCart', JSON.stringify(productsInCart))
    }, [productsInCart])

    function addProductToCart(id: string, quantity: number) {
        const alreadyInCart = productsInCart.filter(product => {
            return product.id === id
        })
        
        if (alreadyInCart[0]) return

        setProductsInCart([...productsInCart, { id, quantity }])
    }

    function removeProductFromCart(id: string) {
        const newList = [...productsInCart]

        newList.forEach((product, index) => {
            if (product.id === id) {
                newList.splice(index, 1)
            }
        })

        setProductsInCart([...newList])
    }

    function changeProductQuantity(id: string, quantity: number) {
        const alreadyInCart = productsInCart.filter(product => {
            if (product.id === id) product.quantity = quantity
            return true
        })
        
        setProductsInCart([...alreadyInCart])
    }

    return (
        <PurchaseContext.Provider value={{
            productsInCart,
            addProductToCart,
            removeProductFromCart,
            changeProductQuantity
        }}>
            { children }
        </PurchaseContext.Provider>
    )
}

export function usePurchase() {
    return useContext(PurchaseContext)
}