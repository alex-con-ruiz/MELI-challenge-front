import React, { Component, useEffect } from "react";
/* import SVG from 'react-inlinesvg';
import { withRouter, Link } from 'react-router-dom'; */

// Style
import styles from "./SearchBar.module.scss";

// import logo from '../../assets/logo.svg';
// import lupa from '../../assets/lupa.svg';
/* import recents from '../../assets/recents.svg'; */

// Dependencies

function SearchBar(props) {
  // Ejecuta la busqueda del valor.
  /* const goToHandler = e => {
    if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
      props.goTo(props.value);
    }
  }; */

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <div>Holas</div>
        <div className={styles.searchBar}>
          <input ></input> 
        </div>
      </div>
    </header>
  );
}

export default SearchBar;
