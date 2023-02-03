import type { AppStore } from '../../redux/store'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './styles/Breadcrumb.module.scss'

const Breadcrumb: React.FC = () => {
  const searchResult = useSelector((state: AppStore) => state.searchResult)
  const buildBreadcrumb = (): string[] => {
    const { categories } = searchResult
    const result = categories.map(category => {
      return `${category} > `
    })
    return result
  }

  return <div className={styles.breadcrumb}>
      {buildBreadcrumb()}
  </div >
}

export default Breadcrumb
