import React from "react";


import styles from "./Detail.scss";

export default function Detail({productDetail}) {

  return (
    <div className={styles.detail}>
      <div className={styles.preview}>

        {/* image */}
        <div className={styles.image}>
          <img
            src={productDetail.picture}
            alt={productDetail.title}
          />
        </div>

        {/* Aside */}
        <div className={styles.detailProduct}>
          <span>{productDetail.condition === 'new' ? 'Nuevo' : 'Usado'} - {productDetail.sold_quantity} vendidos</span>
          <h1 className={styles.name}>{productDetail.title}</h1>

          <h1 className={styles.price}>{productDetail.price.currency === 'ARS'? '$': 'U$D'} {productDetail.price.amount}{productDetail.price.decimals === '00'? '': productDetail.price.decimals}</h1>

          <button>Comprar</button>
        </div>
      </div>

        {/* Description */}
      <div className={styles.description}>
        <h1>Descripcion del producto</h1>
        <p>
          {productDetail.description}
        </p>
      </div>
    </div>
  );
}
