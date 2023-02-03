import React from 'react'
import { Layout, Navbar } from './components'
import { Breadcrumb } from './components/Breadcrumb'
import { Home } from './pages'
import { Route } from 'wouter'
import { ProductDetail } from './pages/ProductDetail'
import { Products } from './pages/Products'

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Layout>
        <Breadcrumb />
        <Route path='/' component={Home} />
        <Route path='/items' component={Products} />
        <Route path='/items/:id' component={ProductDetail} />
      </Layout>

    </>
  )
}

export default App
