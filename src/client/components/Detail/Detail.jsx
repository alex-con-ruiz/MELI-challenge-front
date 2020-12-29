import React from 'react'
import PropTypes from 'prop-types'

import styles from './Detail.scss'

export default function Detail({ productDetail }) {
  return (
    <div className={styles.detail}>
      <div className={styles.preview}>
        {/* image */}
        <div className={styles.image}>
          <img src={productDetail.picture} alt={productDetail.title} />
        </div>

        {/* Aside */}
        <div className={styles.detailProduct}>
          <span>
            {productDetail.condition === 'new' ? 'Nuevo' : 'Usado'} -{' '}
            {productDetail.sold_quantity} vendidos
          </span>
          <h2 className={styles.name}>{productDetail.title}</h2>

          <h1 className={styles.price}>
            {productDetail.price.currency === 'ARS' ? '$' : 'U$D'}{' '}
            {productDetail.price.amount}
            {productDetail.price.decimals === '00'
              ? ''
              : productDetail.price.decimals}
          </h1>

          <button>Comprar</button>
        </div>
      </div>

      {/* Description */}
      <div className={styles.description}>
        <h1>Descripcion del producto</h1>
        <p>{productDetail.description}</p>
      </div>
    </div>
  )
}

Detail.propTypes = {
  productDetail: PropTypes.shape({
    category_id: PropTypes.string.isRequired,
    condition: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.shape({
      currency: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      decimals: PropTypes.string.isRequired,
    }),
    sold_quantity: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
}
