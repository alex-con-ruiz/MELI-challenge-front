import React, { useState, useContext } from "react";
import SVG from "react-inlinesvg";
import { AppContext } from "../../contexts/provider";
import { CFG } from ".././../../config";

/*import { withRouter, Link } from 'react-router-dom'; */

// Style
import styles from "./SearchBar.module.scss";

import lupa from "../../assets/lupa.svg";

const LOGOSM = CFG.logoMELI;

function SearchBar(props) {

  
  const [value, setValue] = useState("");
  const [state, setQuery] = useContext(AppContext);

  // Ejecuta la busqueda del valor.
  const goToHandler = (e) => {
    if ((e.type === "keypress" && e.key === "Enter") || e.type === "click") {
      setQuery({...state, query: value})
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <img className={styles.logo} src={LOGOSM} alt="Logo de mercadoLibre" />
        <input
          placeholder="Nunca dejes de buscar."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyPressCapture={goToHandler}
        ></input>
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
