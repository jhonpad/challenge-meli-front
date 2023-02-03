import React from 'react'
import { Link } from 'wouter'
import { SearchInput } from '../SearchInput'
import styles from './styles/Navbar.module.scss'

const Navbar: React.FC = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <img src="./assets/Logo_ML.png" alt="btn-search" />
            </a>
          </Link>
        </div>
       <div className={styles.content}>
          <SearchInput />
        </div>
      </div>
    </div >
  )
}

export default Navbar
