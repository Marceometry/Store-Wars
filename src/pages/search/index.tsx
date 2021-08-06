import Head from "next/head"
import { ProductCard } from "../../components/Products/ProductCard"
import { Filters } from "../../components/Search/Filters"
import products from '../../data/products'
import style from "../../styles/searchPage.module.scss"

export default function Search() {
    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>Busca | Store Wars</title>
            </Head>

            <Filters />

            <div className={style.products}>
                Pesquise algo
            </div>
        </main>
    )
}