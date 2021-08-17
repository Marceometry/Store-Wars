import style from './style.module.scss'

export function Loading() {
    return (
        <div className={style.container}>
            {/* <Image width={128} height={128} src="/images/sad-icon.png" alt="Ícone triste" /> */}
            <h1>Carregando...</h1>
        </div>
    )
}