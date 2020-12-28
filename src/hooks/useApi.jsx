import { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { CFG } from '../../config'

/**
 * Function hook se encarga de manejar los llamados al api
 * @example - useApi(state, setState, 'query', 'products', `/items?search=`)
 * @param {object} state - Estado del contexto se pasa por parametro
 * @param {object} setter - Setter del estado [setState]
 * @param {string} param - Parametro en el estado que contiene el id o query a ser consultado
 * @param {string} key - Key del estado donde va a ser destructurada la respuesta del request
 * @param {string} path - Path al que va a navegar al finalizar el request (Coincide con los endpoints del api)
 * @return  void
 */
export const useApi = (state, setter, param, key, path) => {
  // Se obtiene la history del browser para hacer routing programaticamente
  const history = useHistory()

  // Se obtiene la urlBase del archivo de config
  const url = `${CFG.baseURL}/api`

  useEffect(() => {
    // Si el estado es null se evita renderizados innecesarios
    if (state[param] === null) {
      return
    }

    // Llamada al api
    axios
      .get(`${url}${path}${state[param]}`)
      .then((resp) => {
        // Se obtiene la data y se carga al estado al key correspondiente
        setter({ ...state, [key]: resp.data })

        // Se navega a la ruta dispuesta
        history.push(`${path}${state[param]}`)
      })
      .catch((err) => {
        // Se navega a pagina de error
        history.push('/no-match')
      })
  }, [state[param]])
}
