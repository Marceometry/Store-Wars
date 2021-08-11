import Image from 'next/image'
import { useState } from 'react'
import style from './style.module.scss'

type ImagesGridProps = {
    images: string[]
    productID: string
}

export function ImagesGrid({ images, productID }: ImagesGridProps) {
    const [currentImage, setCurrentImage] = useState(images[0])

    return (
        <div className={style.container}>
            <aside>
                {images.map(url => (
                    <div key={url}>
                        <Image width={64} height={64} alt="Imagem do Produto"
                            className={currentImage === url ? style.active : ''}
                            src={`/images/products/${productID}/${url}`}
                            onMouseOver={() => setCurrentImage(url)}
                        />
                    </div>
                ))}
            </aside>

            <div className={style.mainImage}>
                <Image width={500} height={500} alt="Imagem do Produto"
                    src={`/images/products/${productID}/${currentImage}`}
                />
            </div>
        </div>
    )
}