import type { Product } from '../../models'
import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard'
import styles from './styles/ProductList.module.scss'
export interface ProductListInterface {
  products: Product[]
}

const ProductList: React.FC<ProductListInterface> = ({ products }) => {
  return (
    <div className={styles.productlist}>
      {
        products.map(product => {
          return <ProductCard product={product} key={product.id} />
        })
      }
    </div >
  )
}

export default ProductList
