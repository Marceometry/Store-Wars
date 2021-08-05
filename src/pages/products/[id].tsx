import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ImagesGrid } from '../../components/ImagesGrid'
import { NotFound } from '../../components/NotFound'
import products, { Product } from '../../data/products'
import style from '../../styles/productPage.module.scss'

type ProductProps = {
    product: Product
}

export default function ProductPage({ product }: ProductProps) {
    if (!product) {
        return (
            <NotFound message="Produto não encontrado"/>
        )
    }

    const { id, name, description, images, price } = product
    
    return (
        <main className={style.container}>
            <Head>
                <title>{name} | Store Wars</title>
            </Head>

            <div>
                <ImagesGrid images={images} productID={id} />
                
                <div className={style.productDescription}>
                    <h1>{name}</h1>

                    <h2>Por: R${price.toLocaleString('pt-BR')}</h2>

                    <p><strong>Descrição:</strong> {description}</p>
                </div>

                <aside className={style.purchaseInfo}>
                    <h1>R${price.toLocaleString('pt-BR')}</h1>

                    <fieldset>
                        <label htmlFor="quantity">Quantidade:</label>
                        <input type="number" name="quantity"
                        id="quantity" defaultValue={1} min={1} />
                    </fieldset>

                    <div className={style.buttons}>
                        <button className={style.filled}>Comprar</button>
                        <button>Carrinho +</button>
                    </div>
                </aside>
            </div>
        </main>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = products.map((product) => ({
        params: { id: product.id },
    }))

    return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {    
    const product = products.find((product) => {
        return product.id === params?.id
    })

    if (!product) { return { props: { product: null } } }

    return {
        props: { product },
        revalidate: 60 * 60 * 8
    }
}