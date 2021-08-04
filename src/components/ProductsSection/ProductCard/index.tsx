import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../../../data/products'
import style from './style.module.scss'

type ProductCardProps = {
    width: number
    product: Product
}

export function ProductCard({ width, product }: ProductCardProps) {
    return (
        <Link href="/">
        <a className={style.card} style={{ width }}>
            <Image width={width} height={width} src={`/images/products/${product.id}/${product.images[0]}`} alt="Produto" />

            <div className={style.content}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <footer>R$ {product.price},00</footer>
            </div>
        </a>
        </Link>
    )
}