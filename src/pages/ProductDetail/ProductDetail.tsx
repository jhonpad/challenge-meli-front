import { useData } from '../../hooks/useData'
import React, { useEffect, useState } from 'react'
import { useRoute } from 'wouter'
import styles from './styles/ProductDetail.module.scss'
import type { Product } from '../../models'
import { ProductEmptyState } from '../../models'
import { getProductById } from '../../services/getProduct'
import { currencyFormat } from '../../utilities/numericFormats'

const CONDITIONS = {
  new:'Nuevo',
  used: 'Usado'
}

const ProductDetail: React.FC = () => {
  const [, params] = useRoute('/items/:id')
  const { data, error } = useData<Product>({ key: ((params?.id ?? '')), fetcher: getProductById })
  const [product, setProduct] = useState(ProductEmptyState)
  useEffect(() => {
    setProduct(data ?? ProductEmptyState)
    error ?? console.log('Error -> ', error)
  }, [data, error])

  return (
    <div className={styles.productdetail}>
      <div className={styles.image}>
        <img src={product.picture} alt={product.title} />
      </div>

      <div className={styles.content}>
        <div className={styles.condition}>
          {`${CONDITIONS[product.condition as keyof typeof CONDITIONS]} - ${product.soldQuantity} vendidos`}
        </div>

        <div className={styles.title}>
          {product.title}
        </div>
        {
           // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
           product.price?.currency &&
            <div className={styles.price}>
             {currencyFormat(product.price.currency, 'es-AR', product.price.amount)}
            </div>
        }

        <div className={styles.buttons}>
          <button type='button'>Comprar</button>
        </div>

      </div>

      <div className={styles.description}>
        <h2>Descripción del producto</h2>
        <p>{product.description}</p>
      </div>
    </div >
  )
}

export default ProductDetail
