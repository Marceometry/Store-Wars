export type Product = {
    _id: string
    images: string[]
    name: string
    description: string
    price: number
    tags: string[]
    categories: string[]
    quantity?: number
}