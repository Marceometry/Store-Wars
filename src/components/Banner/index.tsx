import Image from 'next/image'
import Link from 'next/link'
import style from './style.module.scss'

export function Banner() {
    return (
        <div className={style.banner}>
            <div className={style.bg}>
                <Image
                    width={1920}
                    height={576}
                    src="/banner.jpg"
                    alt="Banner"
                />
            </div>

            <section>
                <div className={style.opacity}></div>

                <div className={style.content}>
                    <h1>Dark Side</h1>
                    <p>Sinta o poder do Lado Negro com nossos produtos Sith.</p>

                    <Link href="/">
                        <a>Ver Produtos</a>
                    </Link>
                </div>
            </section>

            <section>
                <div className={style.opacity}></div>

                <div className={style.content}>
                    <h1>Light Side</h1>
                    <p>Livre a sua mente da fúria, jovem padawan, e se torne um Jedi.</p>

                    <Link href="/">
                        <a>Ver Produtos</a>
                    </Link>
                </div>
            </section>
        </div>
    )
}