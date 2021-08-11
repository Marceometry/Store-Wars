import Image from 'next/image'
import { useSearch } from '../../contexts/SearchContext'
import { StyledLink } from '../LinkButton'
import products from '../../data/products'
import style from './style.module.scss'

export function Banner() {
    const { selectedCategories, filterByCategory } = useSearch()

    return (
        <div className={style.banner}>
            <div className={style.bg}>
                <Image
                    width={1920}
                    height={576}
                    src="/images/banner.jpg"
                    alt="Banner"
                />
            </div>

            <section>
                <div className={style.opacity}></div>

                <div className={style.content}>
                    <h1>Dark Side</h1>
                    <p>Sinta o poder do Lado Sombrio com nossos produtos Sith.</p>

                    <StyledLink
                        href="/search"
                        bgColor="var(--red)"
                        outlined
                        onClick={() => {
                            selectedCategories.splice(0, selectedCategories.length)
                            selectedCategories.push("Sith")
                            filterByCategory(["Sith"], products)
                        }}
                    >
                        Ver Produtos
                    </StyledLink>
                </div>
            </section>

            <section>
                <div className={style.opacity}></div>

                <div className={style.content}>
                    <h1>Light Side</h1>
                    <p>Livre a sua mente da fúria, jovem padawan, e se torne um Jedi.</p>

                    <StyledLink
                        href="/search"
                        bgColor="var(--blue)"
                        outlined
                        onClick={() => {
                            selectedCategories.splice(0, selectedCategories.length)
                            selectedCategories.push("Jedi")
                            filterByCategory(["Jedi"], products)
                        }}
                    >
                        Ver Produtos
                    </StyledLink>
                </div>
            </section>
        </div>
    )
}