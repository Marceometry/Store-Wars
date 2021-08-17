import Head from "next/head"

import { ProductCard } from "../components/Products/ProductCard"
import { Filters } from "../components/Search/Filters"
import { Loading } from "../components/Utils/Loading"
import { useSearch } from "../contexts/SearchContext"

import style from "../styles/searchPage.module.scss"

export default function Search() {
    const { productsResult, isLoading, searchText } = useSearch()
    
    return (
        <main className={`${style.container} container`}>
            <Head>
                <title>{searchText ? searchText : 'Busca'} | Store Wars</title>
            </Head>

            <Filters />

            {isLoading ? (
                <Loading />
            ) : (
                <div className={style.products}>
                    {productsResult.map((product, index) => (
                        <ProductCard
                            key={`${product._id}${index}`}
                            bg="var(--bodyBackground)"
                            width={256} product={product}
                        />
                    ))}
                </div>
            )}
        </main>
    )
}