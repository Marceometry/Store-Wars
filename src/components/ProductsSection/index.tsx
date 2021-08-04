import React, { useRef, useState } from "react"
import { Products } from "../../data/products"
import { ArrowLeft, ArrowRight } from "../../svg/Arrows"
import { ProductCard } from "./ProductCard"
import style from "./style.module.scss"

type ProductsSectionProps = {
    products: Products
    type: string
    title: string
}

export function ProductsSection({ products, type, title }: ProductsSectionProps) {
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
            x = (containerWidth - listWidth) - 180
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
                <button className={style.left} onClick={() => handleScroll('left')} disabled={scrollX === 0}>
                    <ArrowLeft />
                </button>

                <button className={style.right} onClick={() => handleScroll('right')} disabled={!scrollRight}>
                    <ArrowRight />
                </button>

                <div className={style.list} style={{
                    width: 10 * 300,
                    marginLeft: scrollX
                }}>
                    {products.map(product => (
                        <ProductCard width={250} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}