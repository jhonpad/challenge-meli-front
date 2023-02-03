import React from 'react'
import type { ReactNode } from 'react'
import styles from './styles/Layout.module.scss'
export interface LayoutInterface {
  children: ReactNode
}

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        {children}
      </div>
    </div >
  )
}

export default Layout
