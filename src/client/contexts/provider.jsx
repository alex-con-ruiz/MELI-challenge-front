import React, { createContext, useState } from 'react'
import { useApi } from '../hooks/useApi'

import PropTypes from 'prop-types'

const ContextProvider = ({ children }) => {
  // Estado general del app enviado por ContextApi
  const [state, setState] = useState({
    query: null,
    id: null,
    products: null,
    detail: null,
  })

  // Obtiene los productos buscados por query del api
  useApi(state, setState, 'query', 'products', `/items?search=`)

  // Obtiene el detalle del producto seleccionado por id del api
  useApi(state, setState, 'id', 'detail', `/items/`)

  return (
    <>
      <AppContext.Provider value={[state, setState]}>
        {children}
      </AppContext.Provider>
    </>
  )
}

export default ContextProvider

// Se crea el contexto y se exporta
export const AppContext = createContext()

ContextProvider.propTypes = {
  children: PropTypes.node,
}
