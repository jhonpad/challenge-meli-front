import type { Product } from '../../models'
import { currencyFormat } from '../../utilities/numericFormats'
import React from 'react'
import styles from './styles/ProductCard.module.scss'
import { useLocation } from 'wouter'

export interface ProductCardInterface {
  product: Product
}

export const ProductCard: React.FC<ProductCardInterface> = ({ product }) => {
  const [, setLocation] = useLocation()
  const handleClick = (): void => setLocation(`/items/${product.id}`)

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <div className={styles.image}>
        <img src={product.picture} alt={product.title} />
      </div>

      <div className={styles.wrapperInfo}>
        <div className={styles.content}>
          <div className={styles.price}>
            <p>{currencyFormat(product.price.currency, 'es-AR', product.price.amount)}</p>
            {product.freeShipping &&
              <div className={styles.freeShipping}>
                <img src='./assets/ic_shipping.png' alt='ic_shipping' />
              </div>
            }
          </div>

          <div className={styles.title}>
            <p>{product.title}</p>
          </div>
        </div>
      </div>
    </div >
  )
}
