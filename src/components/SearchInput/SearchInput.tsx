import { getProducts } from '../../services/getProduct'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import styles from './styles/SearchInput.module.scss'
import { useDispatch } from 'react-redux'
import { createSearchResult, resetSearchResult } from '../../redux/slices/searchResult.slice'
import { useLocation } from 'wouter'

const SearchInput: React.FC = () => {
  const dispatch = useDispatch()
  const [query] = useState('')
  const [keyword, setKeyword] = useState('')
  const { data, error } = useSWR(query, getProducts)
  const [, setLocation] = useLocation()

  const handleSudmit = (evt: React.FormEvent): void => {
    evt.preventDefault()
    setLocation(`/items?search=${keyword}`)
  }
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setKeyword(evt.target.value)
  }

  useEffect(() => {
    (data != null) ? dispatch(createSearchResult(data)) : dispatch(resetSearchResult())

    ;(Boolean(error)) && console.log('Error -> ', error.message)
  }, [data, error])

  return (
    <div className={styles.searchinput}>
      <form onSubmit={handleSudmit}>
        <input type='text' placeholder='Nunca dejes de buscar' className={styles.input} value={keyword} onChange={handleChange} />
        <button type='submit' className={styles.button}>
          <img src='./assets/ic_Search.png' alt='btn-search' />
        </button>
      </form>
    </div >
  )
}

export default SearchInput
