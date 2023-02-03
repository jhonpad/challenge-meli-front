import { ProductList } from '../../components'
import React, { useEffect, useState } from 'react'
import styles from './styles/Products.module.scss'
import type { Search } from '../../models'
import { SearchEmptyState } from '../../models'
import { getProducts } from '../../services/getProduct'
import { useData } from '../../hooks/useData'
import { useDispatch } from 'react-redux'
import { createSearchResult, resetSearchResult } from '../../redux/slices/searchResult.slice'

const QUERYPARAM = 'search'

const Products: React.FC = () => {
  const dispatch = useDispatch()
  const getValue = (param: string): string | null => new URLSearchParams(window.location.search).get(param)
  const query = getValue(QUERYPARAM) ?? ''
  const [searchResult, setSearchResult] = useState(SearchEmptyState)
  const { data, error } = useData<Search>({ key:query, fetcher: getProducts })

  useEffect(() => {
    if (data != null) {
      dispatch(createSearchResult(data))
      setSearchResult(data)
    }

    if (error != null) {
      dispatch(resetSearchResult())
      console.log('Error -> ', error)
    }
  }, [data, error])

  return <div className={styles.products}>
    <ProductList products={searchResult.products} />
  </div >
}

export default Products
