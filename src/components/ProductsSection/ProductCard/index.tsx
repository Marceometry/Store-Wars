import style from './style.module.scss'

export function ProductCard({ index }: { index: number }) {
    return (
        <div className={style.card}>

            <div>{index}</div>

        </div>
    )
}