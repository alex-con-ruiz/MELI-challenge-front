import React, { Component, useEffect } from "react";
import SVG from "react-inlinesvg";
/*import { withRouter, Link } from 'react-router-dom'; */

// Style
import styles from "./SearchBar.module.scss";

import lupa from "../../assets/lupa.svg";
/* import recents from '../../assets/recents.svg'; */

// Dependencies

function SearchBar(props) {

  const LOGOSM = 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/logo__small.png'
  // Ejecuta la busqueda del valor.
  /* const goToHandler = e => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      props.goTo(props.value);
    }
  }; */

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <img className={styles.logo} src={LOGOSM} alt="Logo de mercadoLibre" srcset=""/>
        <input></input>
        <div className={styles.button}>
          <div className={styles.centerIcon}>
            <SVG className={styles.icon} src={lupa} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default SearchBar;
