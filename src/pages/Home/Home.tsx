import { resetSearchResult } from '../../redux/slices/searchResult.slice'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from './styles/Home.module.scss'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(resetSearchResult())
  }, [])

  return (
   <div className={styles.home}></div >
  )
}

export default Home
