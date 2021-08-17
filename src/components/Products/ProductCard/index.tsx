import Image from 'next/image'
import Link from 'next/link'
import { Product } from '../../../utils/productType'
import style from './style.module.scss'

type ProductCardProps = {
    bg: string
    width: number
    product: Product
}

export function ProductCard({ bg, width, product }: ProductCardProps) {
    return (
        <Link href={`/products/${product._id}`}>
        <a className={style.card} style={{ width, background: bg }}>
            <Image width={width} height={width} src={`/images/products/${product._id}/${product.images[0]}`} alt="Produto" />

            <div className={style.content}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <footer>R${product.price.toLocaleString('pt-BR')}</footer>
            </div>
        </a>
        </Link>
    )
}