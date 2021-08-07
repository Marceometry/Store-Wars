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

export const categories = [ "Jedi", "Sith", "Lego", "Brinquedos", "Roupas", "Decoração", "Outros" ]

const products = [
    {
        id: "atat-walker",
        images: ["main.png"],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego", "atat", "at-at", "luke", "skywalker"],
        categories: ["Lego"]
    },
    {
        id: "camisa-yoda",
        images: ["main.jpg"],
        name: "Camisa Mestre Yoda",
        description: "Branca, tamanho M",
        price: 49.99,
        tags: ["camisa", "camiseta", "roupa", "mestre", "yoda", "jedi"],
        categories: ["Roupas", "Jedi"]
    },
    {
        id: "sabre-de-luz-kylo-ren",
        images: ["main.jpg"],
        name: "Sabre de Luz - Kylo Ren",
        description: "Sabre de luz retrátil com efeitos sonoros",
        price: 499.99,
        tags: ["lightsaber", "kylo", "ren", "sabre", "luz"],
        categories: ["Sith", "Brinquedos"]
    },
    {
        id: "luminaria-estrela-da-morte",
        images: ["main.jpg"],
        name: "Luminária - Estrela da Morte",
        description: "Acompanha controle remoto com 16 opções de cores",
        price: 79.99,
        tags: ["luminaria", "luminária", "luz", "estrela", "morte" ],
        categories: ["Decoração", "Sith"]
    },
    {
        id: "quadro-darth-vader",
        images: ["main.jpg"],
        name: "Quadro - Darth Vader",
        description: "Quadro 20x30cm - Darth Vader e o exército imperial",
        price: 39.99,
        tags: ["quadro", "darth", "vader"],
        categories: ["Decoração", "Sith"]
    },
    {
        id: "camisa-stormtroopers",
        images: ["main.jpg"],
        name: "Camisa Stormtroopers",
        description: "Camisa branca, tamanho M",
        price: 55.49,
        tags: ["camisa", "camiseta", "roupa", "storm", "trooper"],
        categories: ["Roupas"]
    },
    {
        id: "anakin-podracer",
        images: ["main.jpg"],
        name: "Lego - Podracer do Anakin",
        description: "Pod de corrida do Anakin, de Star Wars I: Ameaça Fantasma",
        price: 279.90,
        tags: ["lego", "anakin", "skywalker", "padme"],
        categories: ["Lego"]
    }
]

export default products as Products