import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '../LinkButton'
import style from './style.module.scss'

export function Banner() {
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

                    <LinkButton
                        href="/"
                        bgColor="var(--red)"
                        outlined
                    >
                        Ver Produtos
                    </LinkButton>
                </div>
            </section>

            <section>
                <div className={style.opacity}></div>

                <div className={style.content}>
                    <h1>Light Side</h1>
                    <p>Livre a sua mente da fúria, jovem padawan, e se torne um Jedi.</p>

                    <LinkButton
                        href="/"
                        bgColor="var(--blue)"
                        outlined
                    >
                        Ver Produtos
                    </LinkButton>
                </div>
            </section>
        </div>
    )
}