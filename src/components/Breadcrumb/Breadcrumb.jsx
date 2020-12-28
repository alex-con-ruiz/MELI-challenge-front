import React, { useContext } from "react";
import { AppContext } from "../../contexts/provider";

import styles from "./Breadcrumb.scss";

export default function Breadcrumb() {
  const [state, setState] = useContext(AppContext);

  let categories = null;

  if (state.products) {
    categories = state.products.categories;
  }

  return (
    <div className={styles.breadcrumb}>
      {state.products
        ? categories.map((cat, idx) => (
            <>
              <span className={styles.Breadcrumb_el}>{cat.name}</span>
              <div
                className={idx === categories.length - 1 ? styles.hide : styles.Breadcrumb_chevron}
              ></div>
            </>
          ))
        : null}
    </div>
  );
}
