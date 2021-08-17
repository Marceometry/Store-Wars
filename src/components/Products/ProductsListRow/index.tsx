import React, { useRef, useState } from "react"
import { Product } from "../../../utils/productType"
import { ArrowLeft, ArrowRight } from "../../../svg/Arrows"
import { ProductCard } from "../ProductCard"
import style from "./style.module.scss"

type ProductsSectionProps = {
    products: Product[]
    type: string
    title: string
}

export function ProductsListRow({ products, type, title }: ProductsSectionProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollX, setScrollX] = useState(0)
    const [scrollRight, setScrollRight] = useState(true)

    function handleScroll(direction: string) {
        const containerWidth = containerRef.current?.offsetWidth ?? window.innerWidth
        let x = scrollX
        let listWidth = products.length * 250

        if (direction === 'left') {
            x = scrollX + Math.round(products.length / 5 * 250)
        } else if (direction === 'right') {
            x = scrollX - Math.round(products.length / 5 * 250)
        }

        if ((containerWidth - listWidth) > x) {
            x = (containerWidth - listWidth) - 200
            setScrollRight(false)
        } else { setScrollRight(true) }

        if (x > 0) {
            x = 0
        }

        setScrollX(x)
    }

    return (
        <section ref={containerRef} className={style.container}>
            <h1>{title}</h1>

            <div className={style.listarea}>
                <button
                    className={style.left}
                    disabled={scrollX === 0}
                    aria-label="Rolar lista para a esquerda"
                    onClick={() => handleScroll('left')}
                >
                    <ArrowLeft />
                </button>

                <div className={style.list} style={{
                    width: 10 * 300,
                    marginLeft: scrollX
                }}>
                    {products.map(product => (
                        <ProductCard key={product._id} bg="var(--background)" width={250} product={product} />
                    ))}
                </div>

                <button
                    className={style.right}
                    disabled={!scrollRight}
                    aria-label="Rolar lista para a direita"
                    onClick={() => handleScroll('right')}
                >
                    <ArrowRight />
                </button>
            </div>
        </section>
    )
}