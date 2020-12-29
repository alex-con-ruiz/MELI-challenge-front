import React, { Suspense, useContext } from 'react'
import { AppContext } from '../contexts/provider'
import { useParams } from 'react-router-dom'
import { useQueryId } from '../hooks/useParams'

const Detail = React.lazy(() => import('../components/Detail/Detail'))
const Breadcrumb = React.lazy(() => import('../components/Breadcrumb/Breadcrumb'))

export default function ProductDetail() {
  const [state, setId] = useContext(AppContext)

  // Se obtiene el id de la url del navegador
  const { id } = useParams()

  // Setea en caso de modificacion o autoload.

  useQueryId('id', state, setId, id)

  const detail = state.detail

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Breadcrumb />
        {state.detail ? <Detail productDetail={detail.item} /> : null}
      </Suspense>
    </>
  )
}
