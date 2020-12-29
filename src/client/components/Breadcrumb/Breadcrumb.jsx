import React, { useContext } from 'react'
import { AppContext } from '../../contexts/provider'
import PropTypes from 'prop-types'

import styles from './Breadcrumb.scss'

export default function Breadcrumb() {
  const [state] = useContext(AppContext)

  let categories = null

  if (state.products) {
    categories = state.products.categories
  }

  if (state.detail) {
    categories = state.detail.category_id
  }

  return (
    <div className={styles.breadcrumb}>
      {state.products || state.detail
        ? categories.map((cat, idx) => (
            <Item
              cat={cat}
              idx={idx}
              length={categories.length}
              key={`item-${idx}`}
            />
          ))
        : null}
    </div>
  )
}

const Item = ({ cat, idx, length }) => {
  return (
    <>
      <span key={`text-${idx}`} className={styles.Breadcrumb_el}>
        {cat.name}
      </span>
      <div
        key={`chev-${idx}`}
        className={idx === length - 1 ? styles.hide : styles.Breadcrumb_chevron}
      ></div>
    </>
  )
}

Item.propTypes = {
  cat: PropTypes.object,
  idx: PropTypes.number,
  length: PropTypes.number,
}
