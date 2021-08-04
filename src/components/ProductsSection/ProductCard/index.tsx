import Image from 'next/image'
import style from './style.module.scss'

type ProductCardProps = {
    width: number,
}

export function ProductCard({ width }: ProductCardProps) {
    return (
        <div className={style.card} style={{ width }}>
            <Image width={width} height={width} src="/lego.png" alt="Produto" />

            <div className={style.content}>
                <h2>Lego ATAT Walker</h2>
                <p>Recrie a batalha de Hoth com este símbolo imperial.</p>

                <footer>R$ 1499,00</footer>
            </div>
        </div>
    )
}