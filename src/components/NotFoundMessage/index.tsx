import Head from 'next/head'
import Image from 'next/image'
import style from './style.module.scss'

export function NotFoundMessage({ message }: { message: string }) {
    return (
        <div className={style.container}>
            <Head>
                <title>{message} | Store Wars</title>
            </Head>
            
            <h1>{message}</h1>
            <Image width={600} height={340} src="/images/sad-porg.jpg" alt="sad" />
        </div>
    )
}