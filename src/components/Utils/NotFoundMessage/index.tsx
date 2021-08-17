import Head from 'next/head'
import Image from 'next/image'
import style from './style.module.scss'

export function NotFoundMessage({ message }: { message: string }) {
    return (
        <div className={style.container}>
            <Head>
                <title>{message} | Store Wars</title>
            </Head>
            
            <Image width={128} height={128} src="/images/sad-icon.png" alt="Ícone triste" />
            <h1>{message}</h1>
        </div>
    )
}