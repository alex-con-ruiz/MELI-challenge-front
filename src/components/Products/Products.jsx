import React from "react";

import SVG from "react-inlinesvg";

import styles from "./Products.scss";
import shipping from "../../assets/envio.svg";

export default function Products() {
  return (
    <div className={styles.product}>
      <div className={styles.img}>Imagen</div>
      <div className={styles.detail}>
        <div className={styles.info}>
          <div className={styles.infoHeader}>
            <div>
              <strong>26999.00</strong>
            </div>
            <SVG className={styles.shipping} src={shipping} />
          </div>
          <div className={styles.infoDesc}>
            Samsung Galaxy A21s 64 Gb Negro 4 Gb Ram
          </div>
        </div>
        <div className={styles.city}>Villa Crespo</div>
      </div>
    </div>
  );
}
