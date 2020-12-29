import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Layout from './components/Layout/Layout'

import Search from './pages/Search'
import ProductsDetail from './pages/ProductDetail'
import ContextProvider from './contexts/provider'
import NoMatch from './components/NoMatch/NoMatch'

require('./styles/styles.scss')

const App = () => {
  return (
    <>
      {/* Helmet implementation for SEO */}

      <Helmet>
        <title>Mercado Libre</title>
        <meta name='description' content='Mercado Libre App' />
      </Helmet>

      <ContextProvider>
        <Layout>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/items' exact>
              <Search />
            </Route>
            <Route path='/items/:id' exact>
              <ProductsDetail />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Layout>
      </ContextProvider>
    </>
  )
}

function Home() {
  return ''
}

export default App
