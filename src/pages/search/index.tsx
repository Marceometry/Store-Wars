import Head from "next/head"
import { Filters } from "../../components/Search/Filters"
import style from "../../styles/cartPage.module.scss"

export default function Search() {
    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>Busca | Store Wars</title>
            </Head>

            <Filters />
        </main>
    )
}