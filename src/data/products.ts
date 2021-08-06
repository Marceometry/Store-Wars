export type Product = {
    id: string
    images: string[]
    name: string
    description: string
    price: number
    tags: string[]
    categories: string[]
}

export type Products = Product[]

export const categories = [ "Jedi", "Sith", "Lego", "Brinquedos", "Camisas" ]

const products = [
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego", "atat", "at-at", "luke", "skywalker"],
        categories: ["Lego"]
    },
    {
        id: "camisa-yoda",
        images: [
            "main.png"
        ],
        name: "Camisa Mestre Yoda",
        description: "Branca, tamanho M",
        price: 49.99,
        tags: ["camisa", "camiseta", "mestre", "yoda", "jedi"],
        categories: ["Camisas", "Jedi"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
    {
        id: "atat-walker",
        images: [
            "main.png"
        ],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego"],
        categories: ["Lego"]
    },
]

export default products as Products