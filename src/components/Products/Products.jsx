import React, { useContext, useEffect } from "react";

import SVG from "react-inlinesvg";

import styles from "./Products.scss";
import shipping from "../../assets/envio.svg";

export default function Products({product}) {
  return (
    <div className={styles.product}>
      <div className={styles.img}>
        <img src={product.picture} alt={product.title}/>
      </div>
      <div className={styles.detail}>
        <div className={styles.info}>
          <div className={styles.infoHeader}>
            <div>
              <strong>{product.price.currency === 'ARS'? '$': 'U$D'} {product.price.amount}{product.price.decimals === '00'? '': product.price.decimals}</strong>
            </div>
            <SVG className={styles.shipping} src={shipping} />
          </div>
          <div className={styles.infoDesc}>
            {product.title}
          </div>
        </div>
        <div className={styles.city}>{product.address}</div>
      </div>
    </div>
  );
}
