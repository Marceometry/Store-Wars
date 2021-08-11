export type Product = {
    id: string
    images: string[]
    name: string
    description: string
    price: number
    tags: string[]
    categories: string[]
    quantity?: number
}

export type Products = Product[]

export const categories = [ "Jedi", "Sith", "Lego", "Livros", "Brinquedos", "Roupas", "Decoração" ]

export const prices = [ 25, 50, 100, 200, 500, 1000, 2000 ]

const products = [
    {
        id: "atat-walker",
        images: ["main.png"],
        name: "Lego ATAT Walker",
        description: "40cm de altura, acompanha Luke Skywalker!",
        price: 1499,
        tags: ["lego", "atat", "at-at", "hoth", "luke", "skywalker"],
        categories: ["Lego", "Jedi"]
    },
    {
        id: "camiseta-yoda",
        images: ["main.jpg"],
        name: "Camiseta Mestre Yoda",
        description: "Camiseta branca, tamanho M",
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
        id: "camiseta-stormtroopers",
        images: ["main.jpg"],
        name: "Camiseta Stormtroopers",
        description: "Camiseta branca, tamanho M",
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
    },
    {
        id: "livro-dos-sith",
        images: ["main.jpg"],
        name: "Livro dos Sith",
        description: "Compilado de livros Sith antigos",
        price: 34.99,
        tags: ["livro", "sith", "capa dura"],
        categories: ["Livros", "Sith"]
    },
    {
        id: "roupao-preto",
        images: ["main.jpeg"],
        name: "Roupão Preto",
        description: "Roupão preto com capacetes de star wars",
        price: 94.99,
        tags: ["roupao", "banho"],
        categories: ["Roupas"]
    },
    {
        id: "wampa-cave",
        images: ["main.jpeg"],
        name: "Lego Wampa Cave",
        description: "Caverna do Wampa, com Luke e uma nave T-47",
        price: 314.49,
        tags: ["lego", "luke", "wampa", "caverna", "nave", "hoth"],
        categories: ["Lego", "Jedi"]
    },
    {
        id: "flametrooper-first-order",
        images: ["main.jpeg"],
        name: "Flametrooper - Primeira Ordem",
        description: "Boneco Flametrooper da Primeira Ordem",
        price: 279,
        tags: ["boneco", "flame", "trooper", "primeira ordem"],
        categories: ["Brinquedos"]
    },
    {
        id: "manual-do-imperio",
        images: ["main.jpeg"],
        name: "Manual do Império",
        description: "Manual do Império com comentários dos mais queridos personagens da rebelião.",
        price: 44.49,
        tags: ["livro", "manual", "imperio"],
        categories: ["Livros"]
    }
]

export default products as Products
