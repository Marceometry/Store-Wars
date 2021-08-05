import Image from 'next/image'
import style from './style.module.scss'

type ImagesGridProps = {
    images: string[]
    productID: string
}

export function ImagesGrid({ images, productID }: ImagesGridProps) {
    return (
        <div className={style.container}>
            <aside>
                {images.map(url => (
                    <div key={url}>
                        <Image className={style.active} width={64} height={64}
                            src={`/images/products/${productID}/${url}`} alt="Imagem do Produto"
                        />
                    </div>
                ))}
            </aside>

            <div className={style.mainImage}>
                <Image width={500} height={500} src={`/images/products/${productID}/${images[0]}`} alt="Imagem do ProProduto" />
            </div>
        </div>
    )
}