import React, { useRef, useState } from "react"
import { ArrowLeft, ArrowRight } from "../../svg/Arrows"
import { ProductCard } from "./ProductCard"
import style from "./style.module.scss"

export function ProductsSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [scrollX, setScrollX] = useState(0)
    const [scrollRight, setScrollRight] = useState(true)

    function handleScroll(direction: string) {
        const containerWidth = containerRef.current?.offsetWidth ?? window.innerWidth
        let x = scrollX
        let listWidth = 10 * 250

        if (direction === 'left') {
            x = scrollX + Math.round(10 / 5 * 250)
        } else if (direction === 'right') {
            x = scrollX - Math.round(10 / 5 * 250)
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
            <h1>Produtos em Destaque</h1>

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
                    <ProductCard index={1} />
                    <ProductCard index={2} />
                    <ProductCard index={3} />
                    <ProductCard index={4} />
                    <ProductCard index={5} />
                    <ProductCard index={6} />
                    <ProductCard index={7} />
                    <ProductCard index={8} />
                    <ProductCard index={9} />
                    <ProductCard index={10} />
                </div>
            </div>
        </section>
    )
}