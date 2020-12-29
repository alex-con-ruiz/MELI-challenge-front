import React, { useContext } from 'react'

import SVG from 'react-inlinesvg'

import styles from './Products.scss'
import shipping from '../../assets/envio.svg'
import { AppContext } from '../../contexts/provider'
import PropTypes from 'prop-types'

export default function Products({ product }) {
  const [state, setId] = useContext(AppContext)

  // Establece el id en el estado automaticamente rutea a la vista de detalle
  const handleDetail = (id) => {
    setId({ ...state, id })
  }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className={styles.product} onClick={() => handleDetail(product.id)}>
      <div className={styles.img}>
        <img src={product.picture} alt={product.title} />
      </div>
      <div className={styles.detail}>
        <div className={styles.info}>
          <div className={styles.infoHeader}>
            <p>
              {product.price.currency === 'ARS' ? '$' : 'U$D'}{' '}
              {product.price.amount}
              {product.price.decimals === '00' ? '' : product.price.decimals}
            </p>
            <SVG className={styles.shipping} src={shipping} />
          </div>
          <div className={styles.infoDesc}>{product.title}</div>
        </div>
        <div className={styles.city}>{product.address}</div>
      </div>
    </a>
  )
}

Products.propTypes = {
  product: PropTypes.shape({
    address: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.string.isRequired,
    }),
    title: PropTypes.string.isRequired,
  }),
}
