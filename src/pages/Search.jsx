import React, { Suspense, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { AppContext } from '../contexts/provider'
import { useQueryId } from '../hooks/useParams'

const Products = React.lazy(() => import('../components/Products/Products'))
const Breadcrumb = React.lazy(() => import('../components/Breadcrumb/Breadcrumb'))

export default function Search() {
  const [state, setState] = useContext(AppContext)

  // Se obtiene la query de la url del navegador
  let query = new URLSearchParams(useLocation().search).get('search')

  // Setea en caso de modificacion o autoload.
  useQueryId('query', state, setState, query)

  // Vacia el id previamente visitado
  if (state.id !== null) {
    setState({ ...state, id: null })
  }

  let products = []

  if (state.products) {
    products = state.products.items
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Breadcrumb />
      {state.products ? products.map((product) => <Products product={product} key={product.id} />) : null}
    </Suspense>
  )
}
